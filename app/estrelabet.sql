DROP SCHEMA IF EXISTS ESTRELA_BET;
CREATE SCHEMA ESTRELA_BET;

CREATE TABLE ESTRELA_BET.Company (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  CNPJ INTEGER NOT NULL,
  Nome TEXT NOT NULL,
  Email TEXT NOT NULL,
  Telefone TEXT NOT NULL,
  Endereco TEXT NOT NULL
);

CREATE TABLE ESTRELA_BET.Employees (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  CPF INTEGER NOT NULL,
  Nome TEXT NOT NULL,
  Email TEXT NOT NULL,
  Telefone TEXT NOT NULL,
  Endereco TEXT NOT NULL,
  Empresa_id INTEGER NOT NULL,
  FOREIGN KEY (Empresa_id) REFERENCES ESTRELA_BET.Company (id)
);