# iatecam_challenge
Desafio Técnico  – Desenvolvedor de Software 

# Orientações

<details>
  <summary><strong>🐳 Rodando no Docker</strong></summary>

  ### 👉 Com Docker

**:warning: Antes de começar, seu docker-compose precisa estar na versão v2.5 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `2.5.0`.**

> :information_source: Rode os serviços `mysql_service` e `back_service` e `front_service`  com o comando `docker-compose up -d` na raiz do projeto.

- Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, alterando 3306 por uma porta de sua preferência no arquivo docker-compose.yml;
- Esses serviços irão inicializar um container chamado `estoque_db`, `estoque_back`  e outro chamado `estoque_front`;
 Lembre-se de liberar a porta padrão (`4200`) do Angular para o frontend, ou adapte, alterando 4200 por uma porta de sua preferência no arquivo docker-compose.yml;

 - A partir daqui você pode abrir: `http://localhost:8000/docs` a documentação da API no Swagger UI.
 - Acessar `http://localhost:4200/login` para ir para o frontend da aplicação.

 O banco já vem populado com alguns usuários, categorias, produtos e vendas.

 Abaixo os usuários para se testar login:
 
 ```
 [
	{
		"id" : 1,
		"usuario" : "admin",
		"senha" : "admin"
	},
	{
		"id" : 2,
		"usuario" : "user",
		"senha" : "user"
	},
	{
		"id" : 3,
		"usuario" : "oppenheimer",
		"senha" : "oppenbarbie"
	},
	{
		"id" : 4,
		"usuario" : "barbie",
		"senha" : "barbie"
	},
	{
		"id" : 5,
		"usuario" : "oppenbarbie",
		"senha" : "oppenbarbie"
	}
]
 ``` 


