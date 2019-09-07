CREATE DATABASE dbDungeons;

CREATE TABLE tbPersonages(
    id INT AUTO_INCREMENT,
    charName VARCHAR(40) NOT NULL,
    gender INT(1) NOT NULL,
    alignment INT(1) NOT NULL,
    age INT(3) NOT NULL,
    race VARCHAR(40) NOT NULL,
    class VARCHAR(40) NOT NULL,
    lvl INT(2) DEFAULT 1,
    xp INT DEFAULT 0,
    hitDice INT(2) NOT NULL,
    proficiency INT(2) NOT NULL,
    strenght INT(2) NOT NULL,
    constitution INT(2) NOT NULL,
    dexterity INT(2) NOT NULL,
    inteligence INT(2) NOT NULL,
    wisdom INT(2) NOT NULL,
    charisma INT(2) NOT NULL,
    PRIMARY KEY (id)
) engine = innodb;

CREATE TABLE tbPersonageItems(
    id INT AUTO_INCREMENT,
    itemName VARCHAR(80) NOT NULL,
    details VARCHAR(512),
    weigh FLOAT DEFAULT 0.0,
    inUse BOOLEAN DEFAULT false,
    charOwner INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (harOwner) REFERENCES tbCharacters(id)
) engine = innodb;

CREATE TABLE tbSpells(
    id INT AUTO_INCREMENT,
    spellName VARCHAR(60),
    details VARCHAR(1023),
    charOwner INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (charOwner) REFERENCES tbCharacters(id)
) engine = innodb;