document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a, .back-to-top').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Gallery tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });

    // Simple form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        
        if(name && phone && service) {
            alert('Obrigado! Entraremos em contato em breve para elaborar seu orçamento.');
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });

    // Mostrar ou esconder o botão "Voltar ao Topo"
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // ===============================
    // Galeria com Descrições
    // ===============================
    async function carregarGaleria(folder, containerId, type) {
        const container = document.getElementById(containerId);
        container.innerHTML = '<div class="loading">Carregando...</div>';
        
        try {
            const response = await fetch(`${folder}/descriptions.json`);
            if (!response.ok) {
                container.innerHTML = '<div class="no-content">Nenhum conteúdo disponível</div>';
                return;
            }
            
            const descriptions = await response.json();
            container.innerHTML = '';
            
            for (const item of descriptions) {
                const extension = type === 'video' ? 'mp4' : 'jpg';
                const mediaPath = `${folder}/${item.filename}`;
                
                const mediaItem = document.createElement('div');
                mediaItem.className = 'media-item';
                mediaItem.setAttribute('data-title', item.title || '');
                mediaItem.setAttribute('data-desc', item.description || '');
                
                if (type === 'video') {
                    mediaItem.innerHTML = `
                        <video preload="metadata" poster="${folder}/thumb_${item.filename.replace('.mp4', '.jpg')}">
                            <source src="${mediaPath}#t=0.1" type="video/mp4">
                            Seu navegador não suporta vídeos HTML5.
                        </video>
                        <div class="play-btn"><i class="fas fa-play"></i></div>
                        <div class="media-info">
                            <h3>${item.title || 'Video'}</h3>
                            <p>${item.description || ''}</p>
                        </div>
                        <div class="video-loading"></div>
                    `;
                    
                    const video = mediaItem.querySelector('video');
                    video.addEventListener('loadedmetadata', function() {
                        setupVideoPlayer(this, mediaItem);
                    });
                    
                    mediaItem.addEventListener('click', (e) => {
                        const isPlayButton = e.target.closest('.play-btn') || 
                                             e.target.classList.contains('play-btn') ||
                                             e.target.classList.contains('fa-play');
                        if (!e.target.closest('.video-controls') && !isPlayButton) {
                            abrirVideoModal(item.title, item.description, mediaPath);
                        }
                    });
                    
                } else {
                    mediaItem.innerHTML = `
                        <img src="${mediaPath}" alt="${item.title || 'Imagem'}" loading="lazy">
                        <div class="media-info">
                            <h3>${item.title || 'Imagem'}</h3>
                            <p>${item.description || ''}</p>
                        </div>
                    `;
                    mediaItem.addEventListener('click', () => {
                        abrirLightbox(item.title, item.description, mediaPath);
                    });
                }
                
                container.appendChild(mediaItem);
            }
        } catch (error) {
            console.error('Erro ao carregar galeria:', error);
            container.innerHTML = '<div class="no-content">Erro ao carregar conteúdo</div>';
        }
    }

    // ===============================
    // Funcionalidades para Vídeos
    // ===============================
    function setupVideoPlayer(videoElement, mediaItem) {
        const playBtn = mediaItem.querySelector('.play-btn');
        const video = mediaItem.querySelector('video');
        
        // Adicionar evento de clique direto ao botão de play
        playBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (video.paused) {
                video.play();
                playBtn.classList.add('hidden');
                document.querySelectorAll('video').forEach(otherVideo => {
                    if (otherVideo !== video && !otherVideo.paused) {
                        otherVideo.pause();
                        const otherMediaItem = otherVideo.closest('.media-item');
                        if (otherMediaItem) {
                            const otherPlayBtn = otherMediaItem.querySelector('.play-btn');
                            const otherPlayPauseBtn = otherMediaItem.querySelector('.play-pause-btn');
                            if (otherPlayBtn) {
                                otherPlayBtn.innerHTML = '<i class="fas fa-play"></i>';
                                otherPlayBtn.classList.remove('hidden');
                            }
                            if (otherPlayPauseBtn) otherPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
                        }
                    }
                });
            } else {
                video.pause();
                playBtn.classList.remove('hidden');
            }
        });
        
        video.addEventListener('pause', function() { playBtn.classList.remove('hidden'); updatePlayButton(); });
        video.addEventListener('play', function() { playBtn.classList.add('hidden'); updatePlayButton(); });

        // Criar controles de vídeo
        const videoControls = document.createElement('div');
        videoControls.className = 'video-controls';
        videoControls.innerHTML = `
            <button class="control-btn play-pause-btn"><i class="fas fa-play"></i></button>
            <div class="video-progress">
                <div class="video-progress-filled"></div>
            </div>
            <div class="video-time">00:00 / ${formatTime(video.duration)}</div>
            <div class="video-volume">
                <button class="control-btn volume-btn"><i class="fas fa-volume-up"></i></button>
                <input type="range" class="video-volume-slider" min="0" max="1" step="0.1" value="1">
            </div>
        `;
        mediaItem.appendChild(videoControls);

        // Botão de fullscreen
        const fullscreenBtn = document.createElement('button');
        fullscreenBtn.className = 'control-btn fullscreen-btn';
        fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
        videoControls.appendChild(fullscreenBtn);

        fullscreenBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (videoElement.requestFullscreen) {
                videoElement.requestFullscreen();
            } else if (videoElement.webkitRequestFullscreen) { // Safari
                videoElement.webkitRequestFullscreen();
            } else if (videoElement.msRequestFullscreen) { // IE/Edge
                videoElement.msRequestFullscreen();
            }
        });

        const playPauseBtn = videoControls.querySelector('.play-pause-btn');
        const progress = videoControls.querySelector('.video-progress');
        const progressFilled = videoControls.querySelector('.video-progress-filled');
        const timeDisplay = videoControls.querySelector('.video-time');
        const volumeBtn = videoControls.querySelector('.volume-btn');
        const volumeSlider = videoControls.querySelector('.video-volume-slider');

        playPauseBtn.addEventListener('click', (e) => { e.stopPropagation(); togglePlay(); });
        video.addEventListener('click', (e) => { e.stopPropagation(); togglePlay(); });
        video.addEventListener('timeupdate', handleProgress);

        progress.addEventListener('click', scrub);
        let mousedown = false;
        progress.addEventListener('mousedown', () => mousedown = true);
        progress.addEventListener('mouseup', () => mousedown = false);
        progress.addEventListener('mousemove', (e) => mousedown && scrub(e));

        volumeBtn.addEventListener('click', toggleMute);
        volumeSlider.addEventListener('change', () => { video.volume = volumeSlider.value; updateVolumeButton(); });
        volumeSlider.addEventListener('mousemove', () => { video.volume = volumeSlider.value; updateVolumeButton(); });

        function togglePlay() {
            if (video.paused) { video.play(); } else { video.pause(); }
            document.querySelectorAll('video').forEach(otherVideo => {
                if (otherVideo !== video && !otherVideo.paused) { otherVideo.pause(); }
            });
        }

        function updatePlayButton() {
            const icon = video.paused ? 'play' : 'pause';
            playBtn.innerHTML = `<i class="fas fa-${icon}"></i>`;
            playPauseBtn.innerHTML = `<i class="fas fa-${icon}"></i>`;
        }

        function handleProgress() {
            const percent = (video.currentTime / video.duration) * 100;
            progressFilled.style.width = `${percent}%`;
            timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
        }

        function scrub(e) {
            const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
            video.currentTime = scrubTime;
        }

        function toggleMute() {
            video.muted = !video.muted;
            updateVolumeButton();
        }

        function updateVolumeButton() {
            const icon = video.muted || video.volume === 0 ? 'volume-mute' : 'volume-up';
            volumeBtn.innerHTML = `<i class="fas fa-${icon}"></i>`;
            volumeSlider.value = video.muted ? 0 : video.volume;
        }

        video.addEventListener('waiting', () => { mediaItem.querySelector('.video-loading').style.display = 'block'; });
        video.addEventListener('canplay', () => { mediaItem.querySelector('.video-loading').style.display = 'none'; });
    }

    // ===============================
    // Lightbox e Modal de Vídeo
    // ===============================
    function abrirLightbox(title, description, src) {
        const lightbox = document.getElementById('lightbox');
        document.getElementById('lightbox-img').src = src;
        document.getElementById('lightbox-title').textContent = title;
        document.getElementById('lightbox-desc').textContent = description;
        lightbox.style.display = 'block';
        document.addEventListener('keydown', fecharLightboxComTecla);
    }

    function abrirVideoModal(title, description, src) {
        const videoModal = document.getElementById('video-modal');
        const modalVideo = document.getElementById('modal-video');
        document.getElementById('video-modal-title').textContent = title;
        document.getElementById('video-modal-desc').textContent = description;

        modalVideo.innerHTML = `<source src="${src}" type="video/mp4">`;
        videoModal.style.display = 'block';
        modalVideo.load();
        modalVideo.play();

        document.addEventListener('keydown', fecharVideoModalComTecla);
    }

    document.querySelector('#lightbox .close-btn').addEventListener('click', fecharLightbox);
    document.querySelector('#video-modal .close-btn').addEventListener('click', fecharVideoModal);

    window.addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') fecharLightbox();
        if (e.target.id === 'video-modal') fecharVideoModal();
    });

    function fecharLightboxComTecla(e) { if (e.key === 'Escape') fecharLightbox(); }
    function fecharVideoModalComTecla(e) { if (e.key === 'Escape') fecharVideoModal(); }

    function fecharLightbox() {
        document.getElementById('lightbox').style.display = 'none';
        document.removeEventListener('keydown', fecharLightboxComTecla);
    }

    function fecharVideoModal() {
        const modalVideo = document.getElementById('modal-video');
        modalVideo.pause();
        document.getElementById('video-modal').style.display = 'none';
        document.removeEventListener('keydown', fecharVideoModalComTecla);
    }

    function formatTime(seconds) {
        if (isNaN(seconds)) return '00:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Carregar as galerias
    carregarGaleria('galeria/imagens', 'gallery-images', 'image');
    carregarGaleria('galeria/videos', 'gallery-videos', 'video');
    carregarGaleria('galeria/projetos', 'gallery-projects', 'project');
});
