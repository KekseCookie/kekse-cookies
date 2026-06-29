# Kekse - Landing Page & Cardápio Digital Premium 🍪

Este é o repositório do site completo da **Kekse**, uma marca fictícia de cookies artesanais gourmet de alto padrão. O site funciona como uma Landing Page institucional e um Cardápio Digital interativo integrado ao WhatsApp.

Desenvolvido com foco em **experiência do usuário (UX/UI premium)**, responsividade móvel de alta performance, micro-animações elegantes e um sistema de desconto dinâmico no carrinho.

---

## 🌟 Funcionalidades

- **Design Premium & Minimalista**: Paleta de cores inspirada em confeitaria de luxo (Marrom chocolate, bege/creme e dourado).
- **Galeria de Fotos Reais**: Imagens de altíssima qualidade geradas para representar fielmente os produtos.
- **Cardápio Digital Interativo**: Adicione e remova cookies diretamente do cardápio ou no carrinho lateral.
- **Motor de Desconto Inteligente**:
  - *Regra Mista*: Em pedidos com múltiplos sabores, apenas o sabor de menor valor base (Tradicional) recebe desconto por quantidade.
  - *Transparência*: O carrinho detalha claramente quais descontos estão ativos e as justificativas promocionais.
- **Integração com WhatsApp**: Checkout sem necessidade de banco de dados ou backend, gerando mensagens formatadas automaticamente para a marca.
- **Responsividade Total**: Projetado com foco *mobile-first* (90%+ dos acessos a cardápios ocorrem via celular).

---

## 🛠️ Tecnologias Utilizadas

- **React** (v19)
- **Vite** (para build ultrarrápido)
- **Tailwind CSS v4** (estilização moderna e otimizada por compilador)
- **Lucide React** (iconografia minimalista)

---

## 🚀 Como Executar Localmente

### 1. Pré-requisitos
Certifique-se de ter o **Node.js** (v18+) e o **npm** instalados.

### 2. Instalação das Dependências
Clone ou copie a pasta do projeto e instale as dependências:
```bash
npm install
```

### 3. Rodar em Ambiente de Desenvolvimento
Inicie o servidor local:
```bash
npm run dev
```
Abra o navegador no endereço indicado no terminal (normalmente `http://localhost:5173`).

---

## 📦 Como Publicar no GitHub Pages (Gratuito)

Você pode publicar este site de forma 100% gratuita utilizando o GitHub Pages. Siga as etapas abaixo:

### 1. Instalar o pacote de deploy
Instale o pacote `gh-pages` como dependência de desenvolvimento:
```bash
npm install gh-pages --save-dev
```

### 2. Configurar o arquivo `vite.config.js`
Adicione a propriedade `base` com o nome do seu repositório no GitHub:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/nome-do-seu-repositorio/', // Adicione esta linha (ex: '/kekse-cookies/')
})
```

### 3. Configurar scripts no `package.json`
Abra o arquivo `package.json` e adicione os seguintes scripts no bloco `"scripts"`:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -dir dist"
}
```

### 4. Inicializar Git e Criar Repositório
Inicialize o repositório git local, comite as alterações e vincule ao seu GitHub:
```bash
git init
git add .
git commit -m "feat: setup kekse cookie website"
git branch -M main
git remote add origin https://github.com/seu-usuario/nome-do-seu-repositorio.git
```

### 5. Fazer Deploy
Rode o comando de publicação:
```bash
npm run deploy
```
Este comando criará o bundle de produção e publicará na branch `gh-pages` automaticamente. Seu site estará disponível em `https://seu-usuario.github.io/nome-do-seu-repositorio/` após alguns minutos.

---

## 🎨 Identidade de Design & Customizações

Se você deseja alterar o número de WhatsApp, preços ou sabores:
- Abra [src/config.js](file:///src/config.js) para editar o número de telefone em `WHATSAPP_NUMBER` e os detalhes dos produtos na constante `PRODUCTS`.
- O tema de cores e fontes é gerenciado através do `@theme` no arquivo [src/index.css](file:///src/index.css).
