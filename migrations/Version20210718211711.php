<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210718211711 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE track (id INT AUTO_INCREMENT NOT NULL, alternative_id INT DEFAULT NULL, artist_id INT NOT NULL, is_readable TINYINT(1) DEFAULT NULL, title VARCHAR(255) NOT NULL, title_short VARCHAR(255) NOT NULL, title_version VARCHAR(255) NOT NULL, is_unseen TINYINT(1) DEFAULT NULL, isrc VARCHAR(255) DEFAULT NULL, link VARCHAR(255) DEFAULT NULL, share VARCHAR(255) DEFAULT NULL, duration INT NOT NULL, track_position INT DEFAULT NULL, disk_number INT DEFAULT NULL, track_rank INT DEFAULT NULL, release_date DATE DEFAULT NULL, is_explicit_lyrics TINYINT(1) NOT NULL, explicit_content_lyrics INT DEFAULT NULL, explicit_content_cover INT NOT NULL, preview VARCHAR(255) DEFAULT NULL, bpm DOUBLE PRECISION DEFAULT NULL, gain DOUBLE PRECISION DEFAULT NULL, available_countries VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_D6E3F8A6FC05FFAC (alternative_id), INDEX IDX_D6E3F8A6B7970CF8 (artist_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE track ADD CONSTRAINT FK_D6E3F8A6FC05FFAC FOREIGN KEY (alternative_id) REFERENCES track (id)');
        $this->addSql('ALTER TABLE track ADD CONSTRAINT FK_D6E3F8A6B7970CF8 FOREIGN KEY (artist_id) REFERENCES artist (id)');
        $this->addSql('ALTER TABLE artist DROP INDEX complementary_link_fk, ADD UNIQUE INDEX UNIQ_1599687DCBDB180 (complementary_link_id)');
        $this->addSql('ALTER TABLE artist DROP FOREIGN KEY complementary_link_fk');
        $this->addSql('ALTER TABLE artist ADD CONSTRAINT FK_1599687DCBDB180 FOREIGN KEY (complementary_link_id) REFERENCES complementary_link (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE track DROP FOREIGN KEY FK_D6E3F8A6FC05FFAC');
        $this->addSql('DROP TABLE track');
        $this->addSql('ALTER TABLE artist DROP INDEX UNIQ_1599687DCBDB180, ADD INDEX complementary_link_fk (complementary_link_id)');
        $this->addSql('ALTER TABLE artist DROP FOREIGN KEY FK_1599687DCBDB180');
        $this->addSql('ALTER TABLE artist ADD CONSTRAINT complementary_link_fk FOREIGN KEY (complementary_link_id) REFERENCES complementary_link (id) ON UPDATE CASCADE ON DELETE SET NULL');
    }
}
