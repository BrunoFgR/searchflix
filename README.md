# SearchFlix

SearchFlix é um sistema para gerenciamento de filmes com operações completas de CRUD (Create, Read, Update, Delete) que também se integra com uma API pública para obter detalhes adicionais sobre os filmes.

## Funcionalidades

- Cadastro, leitura, atualização e remoção de filmes
- Consulta de informações detalhadas dos filmes via API externa
- Autenticação de usuários
- Documentação interativa via Swagger

## Estrutura do Projeto

```
src/
├── config/               # Configurações do sistema
│   ├── swagger.ts        # Configuração do Swagger
│   ├── auth.ts           # Configuração de autenticação
│   └── api.ts            # Configuração de APIs externas
│
├── modules/              # Módulos do sistema (entidades)
│   ├── [module]/
│   │   ├── dtos/         # Interfaces para requisições
│   │   ├── infra/
│   │   │   ├── http/     # Controllers, routes e middlewares
│   │   │   └── sequelize/# Entities e implementações dos repositories
│   │   ├── providers/    # Implementação de serviços (Hash, API, etc)
│   │   ├── repositories/ # Abstrações para regras de negócio
│   │   └── services/     # Lógica de negócio usando repositories
│
└── shared/               # Recursos compartilhados entre módulos
    ├── container/        # Injeção de dependência (tsyringe)
    ├── errors/           # Tratamento de erros com mensagens e status codes
    └── infra/            # Implementações compartilhadas
        ├── db/
        │   └── sequelize/
        │       ├── config/
        │       ├── migrations/
        │       ├── models/
        │       ├── seeders/
        │       └── index.ts
        └── http/
            ├── routes/   # Agregação de rotas dos módulos
            └── server.ts # Inicialização da API
```

## Requisitos

- Node.js
- NPM ou Yarn
- Docker e Docker Compose (opcional, mas recomendado)
- Banco de dados (PostgreSQL, MySQL ou outro suportado pelo Sequelize)

## Começando

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/searchflix.git
cd searchflix
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto baseado no modelo `.env.example`:

```
# Banco de dados
DB_HOST=localhost
DB_USER=postgres
DB_PASS=senha
DB_NAME=searchflix
DB_PORT=5432

# JWT
JWT_SECRET=suachavesecreta
JWT_EXPIRATION=8h

# API Externa de Filmes
MOVIE_API_KEY=sua_chave_api
MOVIE_API_URL=https://api.exemplo.com/v1
```

### 4. Inicie os serviços

**Opção 1:** Com Docker (recomendado)

```bash
docker-compose up -d
```

**Opção 2:** Diretamente com Node.js

```bash
npm run dev:server
```

### 5. Execute as migrations

Depois que os serviços estiverem rodando, execute as migrations para criar as tabelas no banco de dados:

```bash
npm run migration:run
```

## Documentação da API

A documentação interativa da API está disponível através do Swagger. Após iniciar o servidor, acesse:

```
http://localhost:3000/api-docs
```

## Scripts Disponíveis

- `npm install` - Instala as dependências
- `npm run dev:server` - Inicia o servidor em modo de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm start` - Inicia o servidor em modo de produção
- `npm run migration:run` - Executa as migrations do banco de dados
- `npm run migration:revert` - Reverte a última migration executada
- `npm run seed:run` - Executa os seeders para popular o banco de dados

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para dúvidas ou sugestões, por favor abra uma issue no repositório do projeto.
