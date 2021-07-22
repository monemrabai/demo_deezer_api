<?php

namespace App\Security;

use App\Repository\UserRepository;

use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use KnpU\OAuth2ClientBundle\Security\Authenticator\SocialAuthenticator;
use League\OAuth2\Client\Provider\DeezerResourceOwner;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\User\UserProviderInterface;

/**
 * create a custom authenticator
 *
 * Class DeezerAuthenticator
 * @package App\Security
 */
class DeezerAuthenticator extends SocialAuthenticator
{
    private $router;
    private $clientRegistry;
    private $userRepository;

    /**
     * DeezerAuthenticator constructor.
     * @param RouterInterface $router
     * @param ClientRegistry $clientRegistry
     * @param UserRepository $user
     */
    public function __construct(RouterInterface $router, ClientRegistry $clientRegistry, UserRepository $userRepository)
    {
        $this->router = $router;
        $this->clientRegistry = $clientRegistry;
        $this->userRepository = $userRepository;
    }

    /**
     * Specify how we will start an authentication : redirect to url login
     *
     * @param Request $request
     * @param AuthenticationException|null $authException
     * @return RedirectResponse
     */
    public function start(Request $request, AuthenticationException $authException = null): RedirectResponse
    {
        return new RedirectResponse($this->router->generate('security_login'));
    }

    /**
     * Must return true if the authentication system must be triggered for the url given
     *
     * @param Request $request
     * @return bool
     */

    public function supports(Request $request)
    {
        return 'oauth_check' === $request->attributes->get('_route') && $request->get('service') === "deezer";
    }

    /**
     * Retrieve the email, passoword, csrf_token information to send them to the getUser method
     *
     * @param Request $request
     * @return \League\OAuth2\Client\Token\AccessToken|mixed
     */
    public function getCredentials(Request $request)
    {
        return $this->fetchAccessToken($this->clientRegistry->getClient('deezer'));
    }

    /**
     * User recovery from deezer app
     *
     * @param mixed $credentials
     * @param UserProviderInterface $userProvider
     * @return \Symfony\Component\Security\Core\User\UserInterface|void|null
     */
    public function getUser($credentials, UserProviderInterface $userProvider)
    {
        $deezerUser = new DeezerResourceOwner();

        if($credentials !== false) {
            try {
                $response = HttpClient::create()->request(
                    'GET',
                    'https://api.deezer.com/user/me',
                    [
                        'headers' => [
                            'authorization' => "token {$credentials->getToken()}"
                        ]
                    ]

                );

                $deezerUser = json_decode($response->getContent());
            } catch (\Exception $e) {
               $deezerUser = new DeezerResourceOwner();
            }


        }

        return $this->userRepository->findOrCreateFromOauth($deezerUser);
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {
        // TODO: Implement onAuthenticationFailure() method.
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $providerKey)
    {
        return new RedirectResponse('/');
    }
}