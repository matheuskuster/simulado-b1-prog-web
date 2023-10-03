
## Simulado de Programação Avançada para Web
---
Esta é uma API desenvolvida para um simulado de programação avançada para web, que inclui quatro entidades: Pacientes, Agendas, Consultas e Secretarias. Este readme fornecerá instruções sobre como rodar a aplicação, testá-la e descreverá as rotas disponíveis para cada entidade.

### Pré-requisitos
Antes de começar, certifique-se de que você tenha os seguintes pré-requisitos instalados em seu sistema:

- Docker (para usar o PostgreSQL via Docker Compose) - opcional
- Node.js (v14 ou superior)
-npm ou Yarn (gerenciadores de pacotes JavaScript)
- Insomnia (para testar a API) - opcional

### Configuração Inicial
Clone ou baixe este repositório para o seu sistema.

Abra um terminal e navegue até o diretório raiz da aplicação.

Dentro do diretório, instale as dependências do Node.js executando o seguinte comando:

```bash
npm install
# ou yarn
```

### Configuração do Banco de Dados
Esta aplicação oferece suporte tanto ao PostgreSQL quanto ao SQLite como bancos de dados. Por padrão, está configurado para usar o PostgreSQL via Docker Compose. Se você preferir usar o SQLite, siga estas etapas:

Abra o arquivo schema.prisma no diretório raiz da aplicação.

Comente ou remova a seguinte seção que se refere à configuração do PostgreSQL:

```
// dataSource db {
//   provider = "postgresql"
//   url      = env("DATABASE_URL")
// }
```
Descomente a seguinte seção que se refere à configuração do SQLite:

```
dataSource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

### Rodando a Aplicação
Agora que você configurou as dependências e o banco de dados, siga estas etapas para rodar a aplicação:

No diretório raiz da aplicação, execute o seguinte comando para criar as tabelas do banco de dados:

```bash
npx prisma migrate dev
# ou yarn prisma migrate dev
```

Inicie a aplicação com o seguinte comando:

```bash
npm run start
# ou yarn start
```

A aplicação estará disponível em http://localhost:3000.

### Testando a API com Insomnia
Você pode usar o arquivo insomnia/SimuladoAPI.json para importar as requisições predefinidas no Insomnia e testar a API. Siga estas etapas:

1. Abra o Insomnia.

2. No topo da janela do Insomnia, clique em "Import/Export".

3. Selecione "Import Data" e escolha "From File".

4. Navegue até o diretório do projeto e selecione o arquivo insomnia/SimuladoAPI.json.

As requisições predefinidas serão importadas para o Insomnia. Agora você pode usá-las para testar a API.

### Rotas da API
Aqui estão as rotas disponíveis para cada entidade:

#### Pacientes

```
POST /pacientes
GET /pacientes
GET /pacientes/:id
PUT /pacientes/:id
DELETE /pacientes/:id
```

#### Consultas

```
POST /consultas
GET /consultas
GET /consultas/:id
PUT /consultas/:id
DELETE /consultas/:id
```


#### Secretarias

```
POST /secretarias
GET /secretarias
GET /secretarias/:id
PUT /secretarias/:id
DELETE /secretarias/:id
```


#### Agenda

```
POST /agendas
GET /agendas
GET /agendas/:id
PUT /agendas/:id
DELETE /agendas/:id
```
