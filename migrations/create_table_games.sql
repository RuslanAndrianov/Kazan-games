--liquibase formatted sql
--changeset RuslanAndrianov:created table links
CREATE TABLE games(
    id             BIGINT,
    name           VARCHAR(50)      NOT NULL,
    price          INTEGER          NOT NULL,
    people         VARCHAR(15)      NOT NULL,
    picture        VARCHAR(8192)    NOT NULL,
    type           VARCHAR(30)      NOT NULL,
    description    VARCHAR(200)     NOT NULL,

    PRIMARY KEY(id)
);