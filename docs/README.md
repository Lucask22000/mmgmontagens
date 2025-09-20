README - MMG Instalações Website
Descrição do Projeto
Este é o site oficial da MMG Instalações, uma empresa especializada em serviços de montagem e instalação. O site apresenta informações sobre a empresa, serviços oferecidos, galeria de trabalhos realizados e um formulário de contato para solicitação de orçamentos.

Estrutura do Projeto
text
project-root/
│
├── index.html          # Arquivo principal HTML
├── style.css           # Folha de estilos CSS
├── scripts.js          # Arquivo JavaScript com funcionalidades
├── README.md           # Este arquivo
└── assets/             # Pasta para recursos (imagens, vídeos, etc.)
    └── images/
        └── celo.png    # Imagem do proprietário
Funcionalidades
Design Responsivo: Adaptado para diferentes tamanhos de tela

Navegação Suave: Links de menu com rolagem suave até as seções

Galeria Interativa: Com abas para imagens, vídeos e projetos

Lightbox: Para visualização ampliada de imagens

Formulário de Contato: Integrado com EmailJS para envio de mensagens

Links para Redes Sociais: Instagram, Facebook e WhatsApp

Tecnologias Utilizadas
HTML5

CSS3 (com Flexbox e Grid)

JavaScript (Vanilla)

Font Awesome (ícones)

EmailJS (para envio de formulários)

Como Configurar e Executar
Clone ou faça o download dos arquivos do projeto

Certifique-se de que todos os arquivos (HTML, CSS, JS) estão na mesma pasta

Adicione suas imagens na pasta assets/images/ (substitua o arquivo celo.png)

Para o formulário de contato funcionar:

Crie uma conta no EmailJS

Substitua SEU_SERVICE_ID e SEU_TEMPLATE_ID no script do formulário

Atualize o to_email para o endereço de email desejado

Abra o arquivo index.html em um navegador web

Personalização
Cores e Estilo
Edite o arquivo style.css para alterar cores, fontes e outros aspectos visuais.

Conteúdo
Atualize as informações de contato na seção apropriada

Modifique os serviços oferecidos conforme necessário

Adicione suas próprias imagens e vídeos na galeria

Integração com EmailJS
Para configurar corretamente o envio de emails:

Registre-se no EmailJS e crie um serviço de email

Crie um template de email

Substitua as credenciais no código JavaScript:

javascript
emailjs.init("SEU_USER_ID_PUBLICO");
emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams)
Estrutura das Seções
Cabeçalho: Logo e menu de navegação

Hero: Banner principal com call-to-action

Sobre: Informações sobre a empresa e o proprietário

Serviços: Cards com os serviços oferecidos

Galeria: Trabalhos realizados com abas para diferentes mídias

Contato: Formulário e informações de contato

Rodapé: Informações de copyright

Compatibilidade
O site é compatível com os principais navegadores modernos:

Chrome (versões recentes)

Firefox (versões recentes)

Safari (versões recentes)

Edge (versões recentes)

Autor
Desenvolvido para MMG Instalações.

Licença
Este projeto é de uso exclusivo da MMG Instalações.