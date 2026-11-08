# 🛒 Projeto Amazon (JavaScript Clone)

Este projeto é uma recriação/clone da interface e funcionalidades do e-commerce da **Amazon**, desenvolvido com **JavaScript Vanilla (ES6 Modules)**, HTML5 e CSS3.

---

## 📌 Sobre o Projeto

O código original foi construído como parte do aprendizado prático com base no **curso de JavaScript do canal:
[SuperSimpleDev] (https://www.youtube.com/@supersimpledev)**.

---

## 🚀 Funcionalidades

- **Catálogo de Produtos:** Renderização dinâmica da grade de produtos a partir de dados locais (`products.js`).
- **Filtro de Busca:** Pesquisa por nome do produto ou palavras-chave na barra de navegação.
- **Gerenciamento do Carrinho:**
  - Adição de produtos com seleção de quantidade.
  - Atualização automática da quantidade total no cabeçalho.
  - Remoção de itens e alteração de quantidades no checkout.
  - Persistência de dados utilizando a API do `localStorage`.
- **Seleção de Opções de Entrega:** Cálculo dinâmico do custo de frete e atualização imediata do resumo do pedido.
- **Simulação de Pedidos & Rastreamento:**
  - Geração local de pedidos ao clicar em "Place your order".
  - Página de histórico de pedidos (`orders.html`).
  - Tela de rastreamento (`tracking.html`) com cálculo de progresso de entrega usando `Day.js`.
- **Suporte a Classes de Produtos:** Classes orientadas a objetos (`Product`, `Clothing`, `Appliance`) com comportamentos e links customizados.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 & CSS3** (Design responsivo e layout modular)
- **JavaScript ES6+** (Modules (`import`/`export`), Async/Await, Promises, OOP com Classes)
- **LocalStorage API** (Armazenamento dos dados do carrinho e pedidos)
- **Day.js** (Manipulação e cálculo de datas de entrega)
- **Jasmine** (Suíte de testes unitários e de integração automatizados)

---

## 📁 Estrutura de Pastas

```text
javascript-amazon-project/
├── data/                      # Dados da aplicação (Produtos, Carrinho, Pedidos, Frete)
│   ├── cart.js
│   ├── deliveryOptions.js
│   ├── orders.js
│   └── products.js
├── images/                    # Imagens de produtos, ícones e avaliações
├── scripts/                   # Lógica JavaScript das páginas e utilitários
│   ├── checkout/              # Módulos específicos do checkout (resumo do pedido, pagamentos, etc.)
│   ├── utils/                 # Funções utilitárias (formatação de moeda, etc.)
│   ├── amazon.js              # Script da página principal
│   ├── checkout.js            # Script da página de checkout
│   ├── orders.js              # Script da página de histórico de pedidos
│   └── tracking.js            # Script da página de rastreamento
├── tests/                     # Testes automatizados com Jasmine
│   ├── data/
│   ├── utils/
│   └── checkout/
├── amazon.html                # Página principal (Catálogo)
├── checkout.html              # Página do carrinho e checkout
├── orders.html                # Página de pedidos realizados
└── tracking.html              # Página de rastreamento de entrega
