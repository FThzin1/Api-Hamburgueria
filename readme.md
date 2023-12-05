# API de Hamburgueria
Esta API foi desenvolvida para gerenciar pedidos de uma hamburgueria. Ela oferece funcionalidades básicas para manipulação de pedidos.

## Rotas Disponíveis
GET /pedido

Retorna todos os pedidos existentes na base de dados.

### Exemplo de Requisição:
```bash
GET /pedidos
```
### Exemplo de Resposta:
```json
[
  {
    "id": 1,
    "cliente": "João",
    "itens": [
      {
        "produto": "Hambúrguer simples",
        "quantidade": 2
      },
      {
        "produto": "Batata frita",
        "quantidade": 1
      }
    ],
    "total": 25.50
  },
  {
    "id": 2,
    "cliente": "Maria",
    "itens": [
      {
        "produto": "Hambúrguer duplo",
        "quantidade": 1
      }
    ],
    "total": 12.00
  }
]
```

POST /pedidos


Cria um novo pedido na base de dados.

### Exemplo de Requisição:
```bash
POST /pedidos
{
  "cliente": "Pedro",
  "itens": [
    {
      "produto": "Hambúrguer simples",
      "quantidade": 3
    },
    {
      "produto": "Refrigerante",
      "quantidade": 2
    }
  ]
}
```
### Exemplo de Resposta:
```json
{
  "id": 3,
  "cliente": "Pedro",
  "itens": [
    {
      "produto": "Hambúrguer simples",
      "quantidade": 3
    },
    {
      "produto": "Refrigerante",
      "quantidade": 2
    }
  ],
  "total": 32.00
}
```
PUT /pedidos/{id}

Atualiza um pedido existente com base no ID fornecido.

### Exemplo de Requisição:
```bash
PUT /pedidos/1
{
  "cliente": "João Silva",
  "itens": [
    {
      "produto": "Hambúrguer simples",
      "quantidade": 2
    },
    {
      "produto": "Batata frita",
      "quantidade": 1
    },
    {
      "produto": "Refrigerante",
      "quantidade": 2
    }
  ]
}

```
### Exemplo de Resposta:
```json
{
  "id": 1,
  "cliente": "João Silva",
  "itens": [
    {
      "produto": "Hambúrguer simples",
      "quantidade": 2
    },
    {
      "produto": "Batata frita",
      "quantidade": 1
    },
    {
      "produto": "Refrigerante",
      "quantidade": 2
    }
  ],
  "total": 38.00
}
```
DELETE /pedidos/{id}

Remove um pedido específico com base no ID fornecido.
### Exemplo de Requisição:
```bash
DELETE /pedidos/2
```
### Exemplo de Resposta: 
```bash
Pedido com ID 2 removido com sucesso.
```

GET /pedidos/{id}

Retorna um pedido específico com base no ID fornecido.
### Exemplo de Requisição:
```bash
GET /pedidos/1
```
### Exemplo de Resposta: 
```json
{
  "id": 1,
  "cliente": "João Silva",
  "itens": [
    {
      "produto": "Hambúrguer simples",
      "quantidade": 2
    },
    {
      "produto": "Batata frita",
      "quantidade": 1
    },
    {
      "produto": "Refrigerante",
      "quantidade": 2
    }
  ],
  "total": 38.00
}
```

- [x] GETALL
- [x] POST
- [x] GET:ID
- [x] PUT:ID
- [x] DELETE:ID

# Executando o Projeto
Clone o repositório: git clone https://github.com/FThzin1/API-HAMBURGERIA.git

Instale as dependências: yarn

Inicie o servidor: yarn dev