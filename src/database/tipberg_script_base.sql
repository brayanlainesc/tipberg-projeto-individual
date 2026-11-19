CREATE DATABASE tipberg;
USE tipberg;

CREATE TABLE pais (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL
);

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    ano_nasc INT NOT NULL,
    pais_id INT NOT NULL,
    CONSTRAINT fk_usuario_pais
		FOREIGN KEY (pais_id) REFERENCES pais(id)
);

CREATE TABLE questao (
    id INT PRIMARY KEY AUTO_INCREMENT,
    numero INT NOT NULL,
    texto VARCHAR(150) NOT NULL
);

CREATE TABLE alternativa (
    id INT AUTO_INCREMENT,
    letra CHAR(1) NOT NULL,
    questao_id INT,
    texto VARCHAR(45) NOT NULL,
    FOREIGN KEY (questao_id) REFERENCES questao(id),
    PRIMARY KEY (id, questao_id)
);

CREATE TABLE resposta (
    usuario_id INT,
    questao_id INT,
    alternativa_id INT NOT NULL,
    FOREIGN KEY (questao_id, alternativa_id) REFERENCES alternativa(questao_id, id),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    PRIMARY KEY (usuario_id, questao_id)
);

INSERT INTO pais (nome) VALUES
	('Brasil');

INSERT INTO usuario (nome, email, senha, ano_nasc, pais_id) VALUES
	('laines', 'brayanlainescarvalho@gmail.com', SHA2('minhaSenha123', 256), 2007, 1);

INSERT INTO questao (numero, texto) VALUES
	(1,'Qual era seu minijogo favorito?'),
    (2,'Em qual era do Club Penguin você jogou?'),
    (3,'Você participou do evento de despedida de 2017 (Continue Pinguinando)?');
    
INSERT INTO alternativa (questao_id, letra, texto) VALUES
	(1, 'A', 'Cardjitsu'),
    (1, 'B', "Catchin' Waves"),
    (1, 'C', 'Aqua Grabber'),
    (1, 'D', 'Pizzatron 3000'),
    
    (2, 'A', 'A Raíz (antes da Disney, poucas mecânicas)'),
    (2, 'B', 'A Massiva (novos minijogos, festas temáticas)'),
    (2, 'C', 'A Histórica (formação da narrativa, operações)'),
    (2, 'D', 'A Moderna (patrocínios, gráficos novos)'),
    
    (3, 'A', 'Sim, e inclusive joguei Club Penguin Island'),
    (3, 'B', 'Sim, mas depois do fechamento não joguei mais'),
    (3, 'B', 'Provavelmente, mas não me lembro tão bem'),
    (3, 'C', 'Não, já tinha parado de jogar há um tempo');
    
SELECT * FROM resposta;