import {useState, useCallback} from 'react'
export function usePaginatedFetch(url) {
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])
    const [count, setCount] = useState(0)
    const [next, setNext] = useState(null)
    const load = useCallback(async() => {
        setLoading(true)
        const response = await fetch(next || url, {
            headers: {
                'Accept': 'application/ld+json'
            }
        })
        const responseData = await response.json()

        if(response.ok) {
            setItems(items => [...items, ...responseData['hydra:member']])
            setCount(responseData['hydra:totalItems'])
            if (responseData['hydra:view'] && responseData['hydra:view']['hydra:next']) {
                setNext(responseData['hydra:view']['hydra:next'])
            }else{
               setNext(null)
            }
        } else {
            console.error(responseData)
        }
        setLoading(false)
    }, [url, next])

    return {
        items,
        load,
        count,
        loading,
        hasMore: next != null
    }
}