<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MMG - Montagem e Instalações</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="scripts.js" defer></script>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container" id="topo">
            <div class="header-content">
                <div class="logo">MMG <span>Instalações</span></div>
                <nav>
                    <ul>
                        <li><a href="#topo">Início</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="#gallery">Galeria</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <h1>Soluções Profissionais em Montagem e Instalação</h1>
            <p>Serviços especializados com qualidade, agilidade e comprometimento para residências e empresas</p>
            <a href="#contact" class="btn">Solicitar Orçamento</a>
        </div>
    </section>



    <!-- About Section -->
    <section id="about">
        <div class="container">
            <div class="section-title">
                <h2>Sobre Nós</h2>
                <p>Conheça a MMG e nossa trajetória no mercado de montagem e instalações</p>
            </div>
            <div class="about-content">
                <div class="about-image">
                    <img src="celo.png" alt="Miguel - Proprietário da MMG">
                </div>
                <div class="about-text">
                    <h3>MMG - Profissionalismo e Qualidade</h3>
                    <p>A MMG é uma empresa especializada em serviços de montagem e instalação, liderada por Miguel, um profissional com vasta experiência no segmento. Nosso compromisso é oferecer soluções eficientes e de qualidade para nossos clientes.</p>
                    <p>Atuamos no mercado com seriedade, transparência e dedicação, buscando sempre superar as expectativas em cada serviço prestado. Nossa equipe é treinada e capacitada para executar diversos tipos de montagens e instalações com precisão e segurança.</p>
                    <p>Valorizamos o relacionamento com nossos clientes, por isso priorizamos a comunicação clara, prazos acordados e orçamentos justos. Entre em contato e descubra como podemos ajudar no seu projeto!</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
        <div class="container">
            <div class="section-title">
                <h2>Nossos Serviços</h2>
                <p>Oferecemos uma gama completa de serviços de montagem e instalação</p>
            </div>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-tools"></i>
                    </div>
                    <h3>Montagem de Móveis</h3>
                    <p>Montagem profissional de móveis planos, armários, estantes, camas e outros móveis residenciais e comerciais.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-tv"></i>
                    </div>
                    <h3>Instalação de Eletrônicos</h3>
                    <p>Instalação de TVs, soundbars, home theaters, sistemas de som e outros equipamentos eletrônicos.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <h3>Instalação de Iluminação</h3>
                    <p>Instalação de lustres, luminárias, arandelas, painéis de LED e outros sistemas de iluminação.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-fan"></i>
                    </div>
                    <h3>Instalação de Ventiladores</h3>
                    <p>Instalação segura de ventiladores de teto e outros sistemas de ventilação e exaustão.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-puzzle-piece"></i>
                    </div>
                    <h3>Montagem de Equipamentos</h3>
                    <p>Montagem de equipamentos de ginástica, parquinhos infantis, bicicletas ergométricas e outros.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-box-open"></i>
                    </div>
                    <h3>Instalações em Geral</h3>
                    <p>Instalação de prateleiras, cortinas, persianas, quadros, espelhos e diversos outros itens.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- Gallery Section -->
    <section id="gallery">
        <div class="container">
            <div class="section-title">
                <h2>Galeria</h2>
                <p>Confira nossa galeria de projetos realizados</p>
            </div>
            <div class="gallery">
                <div class="gallery-tabs">
                    <button class="tab-btn active" data-tab="images">Imagens</button>
                    <button class="tab-btn" data-tab="videos">Vídeos</button>
                    <button class="tab-btn" data-tab="projects">Projetos</button>
                </div>

                <!-- Imagens -->
                <div class="tab-content active" id="images-content">
                    <div class="media-grid" id="gallery-images">
                        <div class="loading">Carregando imagens...</div>
                    </div>
                </div>

                <!-- Vídeos -->
                <div class="tab-content" id="videos-content">
                    <div class="media-grid" id="gallery-videos">
                        <div class="loading">Carregando vídeos...</div>
                    </div>
                </div>

                <!-- Projetos -->
                <div class="tab-content" id="projects-content">
                    <div class="media-grid" id="gallery-projects">
                        <div class="loading">Carregando projetos...</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Lightbox Modal -->
    <div id="lightbox" class="lightbox">
        <span class="close-btn">&times;</span>
        <div class="lightbox-content">
            <img id="lightbox-img" src="" alt="">
            <div class="lightbox-caption">
                <h3 id="lightbox-title"></h3>
                <p id="lightbox-desc"></p>
            </div>
        </div>
    </div>

    <!-- Video Modal -->
    <div id="video-modal" class="video-modal">
        <span class="close-btn">&times;</span>
        <div class="video-modal-content">
            <video id="modal-video" controls>
                Seu navegador não suporta vídeos HTML5.
            </video>
            <div class="video-modal-caption">
                <h3 id="video-modal-title"></h3>
                <p id="video-modal-desc"></p>
            </div>
        </div>
    </div>
    <!-- Contact Section -->
    <section id="contact">
        <div class="container">
            <div class="section-title">
                <h2>Entre em Contato</h2>
                <p>Estamos à disposição para tirar dúvidas e realizar orçamentos</p>
            </div>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-text">
                            <h4>Telefone</h4>
                            <p>+55 67 9109-2895</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="contact-text">
                            <h4>Proprietário</h4>
                            <p>Miguel</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="contact-text">
                            <h4>Horário de Atendimento</h4>
                            <p>Segunda a Sábado: 8h às 18h</p>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="https://www.instagram.com/mmg_instala?igsh=OHMyaWZ5Y2ZvOXFn" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/share/15spagoCkr/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://wa.me/556791092895" target="_blank"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
                <!-- Formulário -->
                <div class="contact-form">
                    <form id="contactForm">
                        <div class="form-group">
                            <label for="name">Nome Completo</label>
                            <input type="text" id="name" placeholder="Seu nome completo" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Telefone</label>
                            <input type="tel" id="phone" placeholder="Seu telefone para contato" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Seu melhor email">
                        </div>
                        <div class="form-group">
                            <label for="service">Tipo de Serviço</label>
                            <select id="service" required>
                                <option value="">Selecione um serviço</option>
                                <option value="montagem">Montagem de Móveis</option>
                                <option value="instalacao">Instalação de Eletrodomésticos</option>
                                <option value="eletronicos">Instalação de Eletrônicos</option>
                                <option value="outros">Outros Serviços</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="message">Detalhes do Serviço</label>
                            <textarea id="message" placeholder="Descreva o serviço que você precisa" required></textarea>
                        </div>
                        <button type="submit" class="btn">Enviar Solicitação</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">MMG <span>Instalações</span></div>
                <p>Soluções profissionais em montagem e instalação</p>
            </div>
            <div class="copyright">
                <p>&copy; 2025 MMG Instalações - Todos os direitos reservados</p>
            </div>
        </div>
    </footer>

<script src="https://cdn.emailjs.com/sdk/3.2.0/email.min.js"></script>
<script>
    emailjs.init("service_bu3obzr"); // substitua pelo seu USER_ID do EmailJS

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const templateParams = {
            from_name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value,
            to_email: "lucashateen@gmail.com"
        };

        emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams)
            .then(function(response) {
                alert('Mensagem enviada com sucesso!');
                document.getElementById('contactForm').reset();
            }, function(error) {
                alert('Erro ao enviar a mensagem, tente novamente.');
                console.log('FAILED...', error);
            });
    });
</script>
</body>
</html>
