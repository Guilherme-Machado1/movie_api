# movie_api

Para rodar o projeto localmente, basta criar um arquivo dotenv e adicionar o link do banco de dados, executar as migrations e executar o comando: npm start

O Projeto permite criar, deletar, atualizar, listar e também consegue filtrar quais filmes não foram avaliados. Também é possível adicionar reviews aos filmes, escrevendo um comentário e deixando uma nota, sendo que a nota não pode ser maior do que 5.

Quando o filme é deletado, automaticamente todas as reviews relacionadas ao filme também são deletadas.

- Tecnoligas usadas
- Node.JS
- Typescript
- Prisma
- Express

Banco de dados Relacional
- Supabase
