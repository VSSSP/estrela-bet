# CRud Estrela Bet - Processo Seletivo
Aplicação para visualizar e cadastrar empresas e/ou funcionarios

-----------

### Necessário ter docker e node.js instalados

Clonar este repositório;

Iniciar o docker: `sudo service docker start`

Ir para a pasta raiz: `cd estrela-bet`

Instalar dependencias: `npm run install:apps`

Via docker, iniciar banco de dados, backend e frontend: `npm run compose:up`

------------

Por padrão, as rotas são:

Database: `3308`

Backend: `3001`

Frontend: `3000`

--------------------

Após o docker-compose subir todas as aplicações:


Acesse o frontend via `http://localhost:3000/`

O backend também pode ser acessado, nesse caso via `http://localhost:3001 /employee ou /company`, aceitando requisições get ou post.
O body da requisição POST, deve seguir os seguintes formatos:

Caso a rota seja /employee: 

```
{
	"CPF": 075.552.658-25,
	"name": "Jose de Souza",
	"email": "jose@gmail.com",
	"phone": "(31)986525548",
	"address": "Rua do Jose, 123",
	"company_id": 1
}
```

Caso a rota seja /company: 

```
{
	"CNPJ": "00.000.000/0001-91",
	"name": "Banco do Brasil",
	"email": "bdb@banco.com",
	"phone": "(31)40044500",
	"address": "Rua do banco, 123"
}
```

------------------

### Para finalizar as aplicações, rode o comando `npm run compose:down`

-----------------

### Desenvolvimento:

- No backend, o banco de dados é feito através do docker, utilizando a imagem do mysql. O banco de dados é consumido pela API criada no express com node.js, este define rotas para requisições de criação e visualização. A linguagem utilizada foi o javascript. 
- No frontend, é criada a interface para consumir a API criada no backend com javascript, html e css, utilizando React. Também foi utilizado o MUI para estilizações.
- Criei um arquivo docker-compose para subir db, backend e frontend através de apenas um script e também um outro script para instalar todas as dependencias diretamente pela pasta raíz.
