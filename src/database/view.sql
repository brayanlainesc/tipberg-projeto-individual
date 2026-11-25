-- KPI 1: QUANTIDADE DE JOGADORES QUE RESPONDERAM
CREATE VIEW vw_qtd_respostas AS
SELECT
	COUNT(DISTINCT r.usuario_id) AS qtd_respostas
FROM resposta r
JOIN usuario u ON r.usuario_id = u.id;

SELECT * FROM vw_qtd_respostas;

-- KPI 2: IDADE ATUAL DOS JOGADORES QUE RESPONDERAM
CREATE VIEW vw_idade_jogadores AS
SELECT
	ROUND(AVG(YEAR(CURDATE()) - u.ano_nasc), 0) AS idade_jogadores
FROM resposta r
JOIN usuario u ON r.usuario_id = u.id;

SELECT * FROM vw_idade_jogadores;

-- KPI 3: PAÍS QUE MAIS RESPONDEU O QUESTIONÁRIO
CREATE VIEW vw_pais_jogadores AS
SELECT 
    p.nome AS pais_jogadores
FROM resposta r
JOIN usuario u ON r.usuario_id = u.id
JOIN pais p ON u.pais_id = p.id
GROUP BY p.nome
ORDER BY COUNT(r.usuario_id) DESC
LIMIT 1;

SELECT * FROM vw_pais_jogadores;

-- GRÁFICO 1: RANKING DE MINIJOGOS
CREATE VIEW vw_ranking_minijogos AS
SELECT
	a.texto,
	COUNT(r.alternativa_id) AS qtd_respostas
FROM resposta r
RIGHT JOIN alternativa a ON r.alternativa_id = a.id
JOIN questao q ON a.questao_id = q.id
WHERE q.numero = 1
GROUP BY a.texto
ORDER BY qtd_respostas DESC, a.texto;

SELECT * FROM vw_ranking_minijogos;

-- GRÁFICO 2: COLUNAS DAS ERAS JOGADAS
CREATE VIEW vw_eras_jogadas AS
SELECT
	a.texto,
	COUNT(r.alternativa_id) AS qtd_respostas
FROM resposta r
RIGHT JOIN alternativa a ON r.alternativa_id = a.id
JOIN questao q ON a.questao_id = q.id
WHERE q.numero = 2
GROUP BY a.letra, a.texto
ORDER BY a.letra;

SELECT * FROM vw_eras_jogadas;

-- GRÁFICO 3: PIZZA DO EVENTO DE DESPEDIDA
CREATE VIEW vw_evento_despedida AS
SELECT
	a.texto,
	COUNT(r.alternativa_id) AS qtd_respostas
FROM resposta r
RIGHT JOIN alternativa a ON r.alternativa_id = a.id
JOIN questao q ON a.questao_id = q.id
WHERE q.numero = 3
GROUP BY a.letra, a.texto
ORDER BY a.letra;

SELECT * FROM vw_evento_despedida;