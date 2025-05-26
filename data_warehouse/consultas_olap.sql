-- Vendas por ano
SELECT t.ano, SUM(f.total) AS total_vendas
FROM fato_vendas f
JOIN dim_tempo t ON f.tempo_id = t.id
GROUP BY t.ano;

-- Drill-down: Vendas por ano e mês
SELECT t.ano, t.mes, SUM(f.total) AS total_vendas
FROM fato_vendas f
JOIN dim_tempo t ON f.tempo_id = t.id
GROUP BY t.ano, t.mes;

-- Vendas por cidade
SELECT l.cidade, SUM(f.total) AS total_vendas
FROM fato_vendas f
JOIN dim_localizacao l ON f.localizacao_id = l.id
GROUP BY l.cidade;

