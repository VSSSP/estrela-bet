DROP SCHEMA IF EXISTS ESTRELA_BET;
CREATE SCHEMA ESTRELA_BET;

CREATE TABLE ESTRELA_BET.Company (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  CNPJ TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL
);

CREATE TABLE ESTRELA_BET.Employees (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  CPF TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  company_id INTEGER NOT NULL,
  FOREIGN KEY (company_id) REFERENCES ESTRELA_BET.Company (id)
);

INSERT INTO ESTRELA_BET.Company (CNPJ, name, email, phone, address) 
VALUES

('67.345.123/0001-91', 'Estrela Bet', 'estrelabet@estrelabet.com', '+55 (11) 99999-9999', 'Rua da Estrela, 123'),
('00.000.000/0001-91', 'Banco do Brasil', 'bdb@bancodobrasil.com.br', '+55 (11) 99999-9999', 'Rua do Banco, 123');

INSERT INTO ESTRELA_BET.Employees (CPF, name, email, phone, address, company_id)
VALUES

('123.456.789-10', 'Jose da Silva', 'jose@estrelabet.com', '+55 (11) 99999-9999', 'Rua do Jose, 123', 1),
('987.654.321-10', 'Maria da Silva', 'maria@estrelabet.com', '+55 (11) 99999-9999', 'Rua da Maria, 123', 1),
('654.321.987-10', 'Pedro da Silva', 'pedro@bancodobrasil.com.br', '+55 (11) 99999-9999', 'Rua do Pedro, 123', 2),
('321.987.654-10', 'Ana da Silva', 'ana@bancodobrasil.com.br', '+55 (11) 99999-9999', 'Rua da Ana, 123', 2);
