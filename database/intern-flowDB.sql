
-- Script SQL généré à partir du MCD fourni

-- Suppression des tables si elles existent déjà (ordre inverse des dépendances)
DROP TABLE IF EXISTS CREER, EFFECTUER, FAIRE, TRAVAILLER, ENCADRER CASCADE;
DROP TABLE IF EXISTS CR, SYNTHESE, STAGE, ENTREPRISE, UTILISATEUR, TUTEUR CASCADE;

-- Table ENTREPRISE
CREATE TABLE ENTREPRISE (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    adresse VARCHAR(255),
    CP VARCHAR(10),
    ville VARCHAR(100),
    tel VARCHAR(20)
);

-- Table UTILISATEUR
CREATE TABLE UTILISATEUR (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    admin BOOLEAN DEFAULT FALSE,
    email VARCHAR(255) UNIQUE NOT NULL,
    adresse VARCHAR(255),
    ville VARCHAR(100),
    CP VARCHAR(10),
    tel VARCHAR(20),
    login VARCHAR(50) UNIQUE NOT NULL,
    mdp VARCHAR(255) NOT NULL,
    specialite VARCHAR(255)
);

-- Table TUTEUR
CREATE TABLE TUTEUR (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    tel VARCHAR(20),
    email VARCHAR(255) UNIQUE,
    poste VARCHAR(255)
);

-- Table CR
CREATE TABLE CR (
    id SERIAL PRIMARY KEY,
    contenu TEXT,
    dateCreation DATE,
    dateModif DATE,
    titre VARCHAR(255),
    date DATE
);

-- Table SYNTHESE
CREATE TABLE SYNTHESE (
    id SERIAL PRIMARY KEY,
    contenu TEXT
);

-- Table STAGE
CREATE TABLE STAGE (
    id SERIAL PRIMARY KEY,
    poste VARCHAR(255),
    adresse VARCHAR(255),
    CP VARCHAR(10),
    ville VARCHAR(100),
    dateDebut DATE,
    dateFin DATE,
    hDebut TIME,
    hFin TIME
);

-- Association TRAVAILLER (ENTREPRISE 0,N - 1,1 UTILISATEUR)
CREATE TABLE TRAVAILLER (
    id_entreprise INT NOT NULL,
    id_utilisateur INT NOT NULL,
    PRIMARY KEY (id_entreprise, id_utilisateur),
    FOREIGN KEY (id_entreprise) REFERENCES ENTREPRISE(id) ON DELETE CASCADE,
    FOREIGN KEY (id_utilisateur) REFERENCES UTILISATEUR(id) ON DELETE CASCADE
);

-- Association ENCADRER (TUTEUR 0,N - 1,1 UTILISATEUR)
CREATE TABLE ENCADRER (
    id_tuteur INT NOT NULL,
    id_utilisateur INT NOT NULL,
    PRIMARY KEY (id_tuteur, id_utilisateur),
    FOREIGN KEY (id_tuteur) REFERENCES TUTEUR(id) ON DELETE CASCADE,
    FOREIGN KEY (id_utilisateur) REFERENCES UTILISATEUR(id) ON DELETE CASCADE
);

-- Association CREER (UTILISATEUR 0,N - 1,1 CR)
CREATE TABLE CREER (
    id_utilisateur INT NOT NULL,
    id_cr INT NOT NULL,
    PRIMARY KEY (id_utilisateur, id_cr),
    FOREIGN KEY (id_utilisateur) REFERENCES UTILISATEUR(id) ON DELETE CASCADE,
    FOREIGN KEY (id_cr) REFERENCES CR(id) ON DELETE CASCADE
);

-- Association EFFECTUER (UTILISATEUR 0,N - 1,1 SYNTHESE)
CREATE TABLE EFFECTUER (
    id_utilisateur INT NOT NULL,
    id_synthese INT NOT NULL,
    PRIMARY KEY (id_utilisateur, id_synthese),
    FOREIGN KEY (id_utilisateur) REFERENCES UTILISATEUR(id) ON DELETE CASCADE,
    FOREIGN KEY (id_synthese) REFERENCES SYNTHESE(id) ON DELETE CASCADE
);

-- Association FAIRE (UTILISATEUR 1,1 - 1,N STAGE)
CREATE TABLE FAIRE (
    id_utilisateur INT NOT NULL,
    id_stage INT NOT NULL,
    PRIMARY KEY (id_utilisateur, id_stage),
    FOREIGN KEY (id_utilisateur) REFERENCES UTILISATEUR(id) ON DELETE CASCADE,
    FOREIGN KEY (id_stage) REFERENCES STAGE(id) ON DELETE CASCADE
);
