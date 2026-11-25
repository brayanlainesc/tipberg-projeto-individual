CREATE DATABASE tipberg;
USE tipberg;

CREATE TABLE pais (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL UNIQUE
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
    numero INT NOT NULL UNIQUE,
    texto VARCHAR(150) NOT NULL
);

CREATE TABLE alternativa (
    id INT AUTO_INCREMENT,
	questao_id INT,
    letra CHAR(1) NOT NULL,
    texto VARCHAR(50) NOT NULL,
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

INSERT INTO pais (id, nome) VALUES
	(1, 'Brasil'),
	(2, 'Portugal'),
	(3, 'Estados Unidos'),
	(4, 'México');

INSERT INTO usuario (id, nome, email, senha, ano_nasc, pais_id) VALUES
	(101, 'Teste 01', 'teste01@teste.com', SHA2('senha123', 256), 2000, 1),
	(102, 'Teste 02', 'teste02@teste.com', SHA2('senha123', 256), 1998, 1),
	(103, 'Teste 03', 'teste03@teste.com', SHA2('senha123', 256), 1996, 1),
	(104, 'Teste 04', 'teste04@teste.com', SHA2('senha123', 256), 2001, 1),
	(105, 'Teste 05', 'teste05@teste.com', SHA2('senha123', 256), 1999, 2),
	(106, 'Teste 06', 'teste06@teste.com', SHA2('senha123', 256), 2005, 1),
	(107, 'Teste 07', 'teste07@teste.com', SHA2('senha123', 256), 2002, 1),
	(108, 'Teste 08', 'teste08@teste.com', SHA2('senha123', 256), 1997, 1),
	(109, 'Teste 09', 'teste09@teste.com', SHA2('senha123', 256), 1995, 3),
	(110, 'Teste 10', 'teste10@teste.com', SHA2('senha123', 256), 2003, 1),
	(111, 'Teste 11', 'teste11@teste.com', SHA2('senha123', 256), 1999, 1),
	(112, 'Teste 12', 'teste12@teste.com', SHA2('senha123', 256), 2007, 1),
	(113, 'Teste 13', 'teste13@teste.com', SHA2('senha123', 256), 2001, 1),
	(114, 'Teste 14', 'teste14@teste.com', SHA2('senha123', 256), 1998, 2),
	(115, 'Teste 15', 'teste15@teste.com', SHA2('senha123', 256), 2002, 1),
	(116, 'Teste 16', 'teste16@teste.com', SHA2('senha123', 256), 1996, 3),
	(117, 'Teste 17', 'teste17@teste.com', SHA2('senha123', 256), 2000, 1),
	(118, 'Teste 18', 'teste18@teste.com', SHA2('senha123', 256), 2008, 4),
	(119, 'Teste 19', 'teste19@teste.com', SHA2('senha123', 256), 2004, 1),
	(120, 'Teste 20', 'teste20@teste.com', SHA2('senha123', 256), 1999, 1);

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
    (2, 'C', 'A Histórica (narrativa complexa, operações)'),
    (2, 'D', 'A Moderna (patrocínios, gráficos novos)'),
    
    (3, 'A', 'Sim, e inclusive joguei Club Penguin Island'),
    (3, 'B', 'Sim, mas depois do fechamento não joguei mais'),
    (3, 'C', 'Provavelmente, mas não me lembro tão bem'),
    (3, 'D', 'Não, já tinha parado de jogar há um tempo');
    
INSERT INTO resposta (usuario_id, questao_id, alternativa_id) VALUES
-- Questão 1: minijogo (1 Cardjitsu, 2 Catchin' Waves, 3 Aqua Grabber, 4 Pizzatron)
	(101,1,4),(102,1,1),(103,1,4),(104,1,2),(105,1,1),
	(106,1,4),(107,1,3),(108,1,1),(109,1,4),(110,1,2),
	(111,1,1),(112,1,4),(113,1,3),(114,1,1),(115,1,4),
	(116,1,2),(117,1,1),(118,1,4),(119,1,3),(120,1,4),
    
-- Questão 2: era (5 Raiz, 6 Massiva, 7 Histórica, 8 Moderna)
	(101,2,6),(102,2,7),(103,2,5),(104,2,6),(105,2,7),
	(106,2,8),(107,2,6),(108,2,7),(109,2,5),(110,2,6),
	(111,2,7),(112,2,8),(113,2,6),(114,2,7),(115,2,6),
	(116,2,5),(117,2,7),(118,2,8),(119,2,6),(120,2,7),
    
-- Questão 3: despedida (9 a 12)
	(101,3,9),(102,3,10),(103,3,12),(104,3,9),(105,3,10),
	(106,3,12),(107,3,9),(108,3,10),(109,3,11),(110,3,9),
	(111,3,10),(112,3,9),(113,3,12),(114,3,10),(115,3,11),
	(116,3,12),(117,3,9),(118,3,11),(119,3,10),(120,3,12);