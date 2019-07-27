# Bossabox Frontend VUTTR

Aplicação front-end para consumir API VUTTR (Gerenciamento de ferramentas úteis para desenvolvedores), essa aplicação é uma parte do dessafio proposto pela Bossabox. Foi desenvolvida utilizando o Framework [Angular](https://angular.io/).

## Executando a aplicação

Para executar a aplicação, é necessario instalar o [NodeJs](https://nodejs.org/en/download/). Execute o comando `git clone https://github.com/moisesdelavalentina/bossabox-frontend.git` para fazer o download da aplicação, navegue a para a pasta do projeto e utilize o comando `npm install` para instalar as dependencias. Após a instalação execute `ng serve` para servir a aplicação. Abra o navegador e navegue para o endereço: `http://localhost:4200/`.

## Rotas

A aplicação está preparada para consumir uma API com as seguintes rotas:

* `GET /tools` : Lista de todos os itens cadastrados.
* `POST /tools` : Cadastra um novo item.
* `DELETE /tools/:id` : Apaga um item de acordo com o ID :id.
* `GET /tools?q=:busca` : Lista os itens de acordo com uma busca :q.
* `GET /tools?tags_like=:busca` : Lista os itens de acordo com uma tag especificada :tags_like.

## Exemplos de Requisição


Requisição: 
```javascript
GET /tools
```
Resposta:
```javascript
[
    {
        "title": "Laravel",
        "link": "https://laravel.com/",
        "description": "Framework PHP para desenvolvimento de sites e aplicações para web",
        "tags":[
            "php", 
            "framework", 
            "web", 
            "fullsatck"
        ]
    }
]
```

### POST /tools

Requisição:
```javascript
// POST /tools
// Content-Type: application/json
{
    "title": "Laravel",
    "link": "https://laravel.com/",
    "description": "Framework PHP para desenvolvimento de sites e aplicações para web",
    "tags":[
        "php", 
        "framework", 
        "web", 
        "fullsatck"
    ]
}
```

Resposta:
```javascript
{
    "id":5
    "title": "Laravel",
    "link": "https://laravel.com/",
    "description": "Framework PHP para desenvolvimento de sites e aplicações para web",
    "tags":[
        "php", 
        "framework", 
        "web", 
        "fullsatck"
    ]
}
```

### GET /tools?q=:busca

Requisição: 
```javascript
GET /tools?q=Laravel
```
Resposta:
```javascript
[
    {
        "id":5
        "title": "Laravel",
        "link": "https://laravel.com/",
        "description": "Framework PHP para desenvolvimento de sites e aplicações para web",
        "tags":[
            "php", 
            "framework", 
            "web", 
            "fullsatck"
        ]
    }
]
```

### GET /tools?tags_like=:busca

Requisição: 
```javascript
GET /tools?tags_like=framework
```
Resposta:
```javascript
[
    {
        "id":5
        "title": "Laravel",
        "link": "https://laravel.com/",
        "description": "Framework PHP para desenvolvimento de sites e aplicações para web",
        "tags":[
            "php", 
            "framework", 
            "web", 
            "fullsatck"
        ]
    }
]
```


### DELETE /tools/:id
Requisição:
```javascript
DELETE /tools/5
```

Resposta:
```javascript
// Status: 200 OK
{}
```