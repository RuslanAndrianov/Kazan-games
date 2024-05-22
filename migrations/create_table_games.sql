--liquibase formatted sql
--changeset RuslanAndrianov:created table links
CREATE TABLE games(
    id        BIGINT,
    name      VARCHAR(50)    NOT NULL,
    price     INTEGER        NOT NULL,
    people    VARCHAR(15)    NOT NULL,
    PRIMARY KEY(id)
);