# The FitTech Gym Management System

FitTech Gym management system is a modern fitness application that combines technology and science to provide users with a personalized fitness experience.

## Features

* CRUD (Create, Read, Update, Delete) operations for managing users, memberships, and posts.
* User authentication and login system.
* User-friendly interface for easy navigation and interaction.

### Installation

1. Clone this repository to your local machine using git clone https://github.com/Ken-Kabutu/the-FitTech-Gym-frontend
2. Navigate to the project directory with cd fittech-gym.
3. Install the required dependencies with npm install.
4. Start the development server with npm start.
5. Access the application in your web browser at http://localhost:3000.

## Usage

FitTech Gym Management System offers a user-friendly interface for gym members and staff to access various features:

1. User Registration and Login: New users can register with their email and password. Existing users can log in to access their accounts.
2. Membership Plans: Users can view different membership plans offered by the gym and choose the one that suits them.
3. Posts and Updates: Staff can create and publish informative posts and updates related to fitness and health.
4. User Management: Staff can manage user data, including updating user information and deleting user accounts.

## Technologies Used

* React.js for frontend development.
* Axios for making HTTP requests to the backend API.
* Styled Components for styling the UI.
* Ruby ActiveRecords with Sinatra for the backend API.
* PostgreSQL for database management.

# API Endpoints

The backend API provides the following endpoints:

* '/users' GET, POST, DELETE
* '/memberships' GET, POST, DELETE
* '/' GET, POST, DELETE

## Descrição do projeto:

Este é o projeto final do curso de desenvolvimento full-stack da Resilia. Utilizamos o atributo "Alunos" para fazer a parte front-end desse projeto, onde o funcionário da Academia pode acessar os alunos a partir do CRUD.

## Dependências Gerais:
```js
 "dependencies": {
    "axios": "^0.24.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-modules": "^1.0.8",
    "react-router": "^6.2.1",
    "react-router-dom": "^6.2.1",
    "react-scripts": "^5.0.0",
    "react-scroll": "^1.8.4",
    "react-use-effect": "^0.0.1",
    "styled-components": "^5.3.3",
    "web-vitals": "^2.1.2"
  }
```

## Rotas da API:

| Método | Rota | Funcionalidade |
| ------ | ----- | ----------- |
| **GET** | `http://localhost:3000/alunos` | Gets em todos|
| **GET** | `http://localhost:3000/alunos/{id}` | Gets em alunos por {id} |
| **POST** | `http://localhost:3000/alunos` | Entrada de novo aluno |
| **PUT** | `http://localhost:3000/alunos/{id}` | Alterações por {id} |
| **DELETE** | `http://localhost:3000/alunos/{id}` | Deleção de alunos {id} |

## Como executar?
Clone o projeto.
Execute o comando "npm install" para instalar as dependências necessárias.
Inserir no terminal o comando "npm start".

## Responsáveis pelo projeto:

- [Larissa Silva](https://github.com/LariCostaSilva)
- [Murilo Rodrigues](https://github.com/muridev017) 
- [Nathalie Moreira](https://github.com/NathalieMS)
- [Yasmin Reis](https://github.com/yasminreisk)
