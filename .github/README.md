# MMG Instalações - Website

> Site oficial da MMG Instalações, empresa especializada em montagem e instalação de móveis, eletrônicos e muito mais.

## 📋 Descrição
Este projeto apresenta a empresa, seus serviços, galeria de trabalhos e um formulário de contato para orçamentos.

## 🚀 Funcionalidades
- **Design Responsivo**: Visual adaptado para qualquer dispositivo
- **Navegação Suave**: Menu com rolagem suave entre seções
- **Galeria Interativa**: Abas para imagens, vídeos e projetos
- **Lightbox**: Visualização ampliada de imagens
- **Formulário de Contato**: Integrado ao EmailJS
- **Links para Redes Sociais**: Instagram, Facebook e WhatsApp

## 🗂️ Estrutura do Projeto
```
mmgmontagens/
│
├── docs/                # Pasta publicada no GitHub Pages
│   ├── index.html       # Página principal
│   ├── style.css        # Estilos
│   ├── scripts.js       # Funcionalidades JS
│   ├── banner.png       # Banner do site
│   ├── celo.png         # Imagem do proprietário
│   └── galeria/         # Imagens, vídeos e projetos
│
├── README.md            # Este arquivo
└── ...
```

## 🛠️ Tecnologias Utilizadas
- HTML5
- CSS3 (Flexbox, Grid)
- JavaScript (Vanilla)
- Font Awesome (ícones)
- EmailJS (envio de formulários)

## ⚙️ Como Executar Localmente
1. Clone ou baixe o repositório
2. Certifique-se de que todos os arquivos estão na mesma pasta
3. Abra `index.html` em seu navegador

## ✉️ Configuração do Formulário (EmailJS)
1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Crie um serviço e um template
3. No código JS, substitua:
   ```js
   emailjs.init("SEU_USER_ID_PUBLICO");
   emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams)
   ```
4. Atualize o campo `to_email` para o e-mail desejado

## 🎨 Personalização
- Edite `style.css` para mudar cores, fontes e layout
- Atualize informações de contato e serviços no HTML
- Adicione suas imagens e vídeos na galeria

## 📑 Estrutura das Seções
- **Cabeçalho**: Logo e menu
- **Hero**: Banner principal
- **Sobre**: Informações da empresa
- **Serviços**: Cards dos serviços
- **Galeria**: Abas para imagens, vídeos e projetos
- **Contato**: Formulário e informações
- **Rodapé**: Copyright

## 🖥️ Compatibilidade
Compatível com os principais navegadores modernos:
- Chrome, Firefox, Safari, Edge

## 👤 Autor
Desenvolvido para MMG Instalações.

## ⚠️ Licença
Projeto de uso exclusivo da MMG Instalações.
