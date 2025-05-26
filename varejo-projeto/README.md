# 🛒 Projeto Varejo - Análise e Visualização de Dados

Este projeto é uma solução educacional completa para simular o funcionamento de um sistema de varejo. Ele integra várias áreas da tecnologia: desenvolvimento backend e frontend, mineração de dados, construção de data warehouse, uso de MongoDB e modelagem em Java com ObjectDB.

---

## 📁 Estrutura do Projeto

```
varejo-projeto/
├── backend/           # API REST com rotas de produtos, vendas e comentários
├── frontend/          # Interface web (HTML, CSS, JS)
├── dashboard/         # Versão integrada da visualização dos dados
├── datamining/        # Scripts de machine learning (Python)
├── datasets/          # Arquivos de dados (CSV e JSON)
├── data_warehouse/    # Scripts SQL do Data Warehouse
├── jpa_objectdb/      # Entidades Java com JPA e ObjectDB
├── mongodb/           # Script de inserção no MongoDB
└── README.md          # Documentação do projeto
```

---

## 🚀 Como Executar o Projeto

### 1. Backend (Node.js + Express)

```bash
cd backend
npm install
node server.js
```

A API ficará disponível em `http://localhost:3000/`, com as seguintes rotas:

- `GET /produtos`
- `GET /vendas`
- `GET /comentarios`

---

### 2. Frontend

Abra o arquivo `frontend/index.html` em seu navegador. Ele consome dados da API e exibe em formato de tabela ou visualização básica.

---

### 3. Dashboard (Visualização Avançada)

Você também pode abrir a pasta `dashboard/` no navegador. Essa versão pode incluir gráficos e visuais interativos.

---

### 4. Mineração de Dados (Python)

Instale os pacotes necessários e execute os scripts:

```bash
cd datamining
pip install pandas scikit-learn matplotlib
python clustering_clientes.py
python previsao_vendas.py
```

Esses scripts realizam:

- Agrupamento de clientes por comportamento (KMeans)
- Previsão de vendas com Regressão Linear

---

### 5. MongoDB

Certifique-se que o MongoDB está ativo.

Edite o caminho do arquivo `comentarios.json` se necessário, depois execute:

```bash
cd mongodb
node insert_comentarios.js
```

Este script insere os comentários do dataset no MongoDB na coleção `comentarios` do banco `varejo`.

---

### 6. Data Warehouse (PostgreSQL)

Na pasta `data_warehouse`, execute os scripts:

- `create_dw.sql`: Cria o schema do data warehouse
- `consultas_olap.sql`: Realiza consultas analíticas OLAP

Você pode usar PostgreSQL, MySQL ou outro SGBD compatível.

---

### 7. Java com JPA (ObjectDB)

Na pasta `jpa_objectdb/` há dois arquivos:

- `Cliente.java`
- `Produto.java`

Eles exemplificam a modelagem de entidades com JPA utilizando o banco de dados orientado a objetos [ObjectDB](https://www.objectdb.com/).

---

## 📦 Datasets

Localizados na pasta `datasets/`, os arquivos representam dimensões e fatos do modelo estrela:

- `dim_cliente.csv`
- `dim_loja.csv`
- `dim_produto.csv`
- `dim_tempo.csv`
- `comentarios.json` (para MongoDB)

---

## 🛠 Tecnologias Utilizadas

- **Node.js** com **Express** (API REST)
- **HTML, CSS, JavaScript** (Interface e Dashboard)
- **Python** (Mineração de Dados)
- **MongoDB** (Banco de dados NoSQL)
- **PostgreSQL** (Data Warehouse)
- **Java + JPA + ObjectDB** (Banco orientado a objetos)

---

## 🧠 Objetivos de Aprendizagem

✔️ Construir uma API REST  
✔️ Desenvolver interfaces web  
✔️ Aplicar técnicas de Data Mining  
✔️ Modelar e consultar Data Warehouses  
✔️ Inserir dados em bancos NoSQL  
✔️ Trabalhar com JPA e persistência em Java

---

## 👥 Autores

Este projeto foi desenvolvido para fins acadêmicos e de aprendizagem interdisciplinar.

---

📚 Projeto desenvolvido com fins didáticos para integrar conceitos de desenvolvimento web, ciência de dados e bancos de dados relacionais e não relacionais.