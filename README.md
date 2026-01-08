# Cartão de Visita Virtual - Automab Style

Este projeto é um cartão de visita digital interativo, visualmente idêntico ao site oficial [Automab.dev](https://automab.dev), otimizado como uma "One Page" de alta conversão.

## 🚀 Tecnologias

- **React** + **Vite**
- **Tailwind CSS** (Sistema de design Automab)
- **Framer Motion** (Animações avançadas)
- **Lucide React** (Ícones)

## 🛠️ Como Customizar

Todas as informações textuais e links estão centralizados em `src/constants.js`.

1. **Editar Textos e Links**:
   Abra `src/constants.js` e altere os valores de `PROFILE`, `EXPERTISE`, `SERVICES`, etc.

2. **Trocar Avatar**:
   Substitua o arquivo `src/assets/perfil3.webp` pela sua foto (mantenha o nome ou atualize a importação em `src/components/Hero.jsx`).

3. **QR Code**:
   O QR Code é gerado automaticamente via API na seção `CTA`. Se quiser um estático, coloque a imagem em `src/assets/` e atualize `CTA.jsx`.

## 📦 Deploy na Vercel

O projeto está pronto para deploy zero-config na Vercel.

1. Instale a CLI da Vercel (opcional) ou conecte seu GitHub na Vercel.
2. Importe este repositório.
3. O build command padrão (`vite build`) e output directory (`dist`) já são detectados automaticamente.

## 🎨 Design System

O arquivo `src/index.css` contém todos os tokens de cor (HSL) e utilitários extraídos do projeto original para garantir fidelidade visual absoluta (Palette `primary: 197 57% 53%`, Backgrounds dark, etc).
