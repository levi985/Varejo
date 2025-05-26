CREATE DATABASE dw_varejo;
USE dw_varejo;

CREATE TABLE dim_tempo (
    id INT PRIMARY KEY,
    data DATE,
    ano INT,
    mes INT,
    dia INT
);

CREATE TABLE dim_localizacao (
    id INT PRIMARY KEY,
    cidade VARCHAR(50),
    estado VARCHAR(50),
    pais VARCHAR(50)
);

CREATE TABLE dim_produto (
    id INT PRIMARY KEY,
    nome VARCHAR(50),
    categoria VARCHAR(50)
);

CREATE TABLE fato_vendas (
    id INT PRIMARY KEY,
    tempo_id INT,
    localizacao_id INT,
    produto_id INT,
    quantidade INT,
    total DOUBLE,
    FOREIGN KEY (tempo_id) REFERENCES dim_tempo(id),
    FOREIGN KEY (localizacao_id) REFERENCES dim_localizacao(id),
    FOREIGN KEY (produto_id) REFERENCES dim_produto(id)
);

