<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210718104802 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE artist ADD complementary_link_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE artist ADD CONSTRAINT FK_1599687DCBDB180 FOREIGN KEY (complementary_link_id) REFERENCES complementary_link (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_1599687DCBDB180 ON artist (complementary_link_id)');
        $this->addSql('ALTER TABLE complementary_link ADD picture VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE artist DROP FOREIGN KEY FK_1599687DCBDB180');
        $this->addSql('DROP INDEX UNIQ_1599687DCBDB180 ON artist');
        $this->addSql('ALTER TABLE artist DROP complementary_link_id');
        $this->addSql('ALTER TABLE complementary_link DROP picture');
    }
}
