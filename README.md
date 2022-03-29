# CRud Estrela Bet - Processo Seletivo
Aplicação para visualizar e cadastrar empresas e/ou funcionarios

-----------

### Com docker e o mysql instalados, rodar os seguintes comandos:

Iniciar o docker: `sudo service docker start`

Instalar dependencias (frontend e backend): `npm run install:apps`

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
	"phone": "40044500",
	"address": "Rua do banco, 123"
}
```

------------------

### Para finalizar as aplicações, rode o comando `npm run compose:down`
