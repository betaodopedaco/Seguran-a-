// Header Scroll Effect
document.addEventListener('DOMContentLoaded', () => {
    const siteHeader = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });

    // Animação inicial do Hero
    const sloganContainer = document.querySelector('.slogan-container');
    const tagline = document.querySelector('.tagline');
    const ctaButton = document.querySelector('.cta-button');
    const features = document.querySelector('.features');

    setTimeout(() => {
        sloganContainer.classList.add('active');
        tagline.classList.add('active');
        ctaButton.classList.add('active');
        features.classList.add('active');
    }, 500);

    // GSAP Animations (using ScrollTrigger for sections)
    gsap.registerPlugin(ScrollTrigger);

    // Animação do Plasma Section (pode ser ajustada para usar ScrollTrigger se necessário)
    gsap.from(".plasma-section h2", {
        scrollTrigger: {
            trigger: ".plasma-section",
            start: "top 80%",
            end: "bottom center",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".plasma-section p", {
        scrollTrigger: {
            trigger: ".plasma-section",
            start: "top 75%",
            end: "bottom center",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
    });

    gsap.from(".plasma-features .feature", {
        scrollTrigger: {
            trigger: ".plasma-features",
            start: "top 90%",
            end: "bottom center",
            toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });


    // Animação para a seção "Neverhack" (Soluções de Segurança)
    gsap.from(".neverhack-section .section-title", {
        scrollTrigger: {
            trigger: ".neverhack-section",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".neverhack-section .section-subtitle", {
        scrollTrigger: {
            trigger: ".neverhack-section",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
    });

    gsap.from(".service-card", {
        scrollTrigger: {
            trigger: ".service-grid",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });

    // Animação para os contadores
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = 200; // Adjust speed as needed
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        ScrollTrigger.create({
            trigger: counter,
            start: "top 80%",
            onEnter: () => updateCount(),
            once: true // Only trigger once
        });
    });

    // Animação para a seção "Por Que Escolher a CYBERSHIELD?"
    gsap.from(".feature-item", {
        scrollTrigger: {
            trigger: ".feature-grid",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });

    // Efeito de partículas na seção Hero
    function createSimpleParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.id = 'simple-particles-container';
        particlesContainer.style.position = 'absolute';
        particlesContainer.style.top = '0';
        particlesContainer.style.left = '0';
        particlesContainer.style.width = '100%';
        particlesContainer.style.height = '100%';
        particlesContainer.style.overflow = 'hidden';
        particlesContainer.style.pointerEvents = 'none';
        particlesContainer.style.zIndex = '-1';
        document.body.appendChild(particlesContainer);

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 5 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = `rgba(${Math.random() > 0.5 ? 0 : 125}, ${Math.random() > 0.5 ? 243 : 18}, ${Math.random() > 0.5 ? 255 : 255}, ${Math.random() * 0.3 + 0.1})`;
            particle.style.borderRadius = '50%';
            particle.style.top = Math.random() * 100 + 'vh';
            particle.style.left = Math.random() * 100 + 'vw';

            particlesContainer.appendChild(particle);

            // Animação flutuante
            gsap.to(particle, {
                y: (Math.random() - 0.5) * 100,
                x: (Math.random() - 0.5) * 100,
                duration: Math.random() * 10 + 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    }

    createSimpleParticles();

    // Efeito de chuva de binários
    const binaryRainContainer = document.getElementById('binaryRain');

    function createBinaryColumn() {
        const column = document.createElement('div');
        column.className = 'binary-column';
        column.style.left = Math.random() * 100 + 'vw';
        column.style.fontSize = Math.random() * 10 + 10 + 'px';
        column.style.color = `rgba(0, ${Math.random() * 100 + 155}, 0, ${Math.random() * 0.5 + 0.3})`;
        let binaryString = '';
        for (let i = 0; i < 30; i++) {
            binaryString += Math.round(Math.random());
        }
        column.innerText = binaryString;
        binaryRainContainer.appendChild(column);

        gsap.to(column, {
            y: '100vh',
            duration: Math.random() * 15 + 5,
            ease: "none",
            repeat: -1,
            onRepeat: () => {
                column.style.left = Math.random() * 100 + 'vw';
                column.style.fontSize = Math.random() * 10 + 10 + 'px';
                column.style.color = `rgba(0, ${Math.random() * 100 + 155}, 0, ${Math.random() * 0.5 + 0.3})`;
                let newBinaryString = '';
                for (let i = 0; i < 30; i++) {
                    newBinaryString += Math.round(Math.random());
                }
                column.innerText = newBinaryString;
                gsap.set(column, { y: '-100px' });
            }
        });
    }

    for (let i = 0; i < 50; i++) {
        createBinaryColumn();
    }

    // Efeito de pontos luminosos
    const glowingDotsContainer = document.getElementById('glowingDotsContainer');

    function createGlowingDot() {
        const dot = document.createElement('div');
        dot.className = 'glowing-dot';
        dot.style.left = Math.random() * 100 + 'vw';
        dot.style.top = Math.random() * 100 + 'vh';
        glowingDotsContainer.appendChild(dot);

        gsap.to(dot, {
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
            scale: Math.random() * 0.5 + 0.8,
            opacity: Math.random() * 0.5 + 0.5,
            duration: Math.random() * 5 + 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            onRepeat: () => {
                dot.style.left = Math.random() * 100 + 'vw';
                dot.style.top = Math.random() * 100 + 'vh';
            }
        });
    }

    for (let i = 0; i < 20; i++) {
        createGlowingDot();
    }

    // Efeito de Plasma na Seção 2
    const plasmaCanvas = document.getElementById('plasmaCanvas');
    const plasmaCtx = plasmaCanvas.getContext('2d');
    let plasmaAnimationId;

    function resizePlasmaCanvas() {
        plasmaCanvas.width = plasmaSection.clientWidth;
        plasmaCanvas.height = plasmaSection.clientHeight;
    }

    const plasmaSection = document.getElementById('plasma-section');
    resizePlasmaCanvas();
    window.addEventListener('resize', resizePlasmaCanvas);

    const plasmaParticles = [];
    const plasmaParticleCount = 100;

    for (let i = 0; i < plasmaParticleCount; i++) {
        plasmaParticles.push({
            x: Math.random() * plasmaCanvas.width,
            y: Math.random() * plasmaCanvas.height,
            radius: Math.random() * 5 + 2,
            color: `rgba(0, ${Math.random() * 100 + 155}, ${Math.random() * 50 + 200}, 0.6)`,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        });
    }

    function drawPlasma() {
        plasmaCtx.clearRect(0, 0, plasmaCanvas.width, plasmaCanvas.height);
        plasmaCtx.filter = 'blur(8px)'; // Efeito de brilho plasma

        plasmaParticles.forEach(p => {
            plasmaCtx.beginPath();
            plasmaCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            plasmaCtx.fillStyle = p.color;
            plasmaCtx.fill();

            p.x += p.vx;
            p.y += p.vy;

            // Limites da tela
            if (p.x < 0 || p.x > plasmaCanvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > plasmaCanvas.height) p.vy *= -1;
        });

        plasmaCtx.filter = 'none';
        plasmaAnimationId = requestAnimationFrame(drawPlasma);
    }

    ScrollTrigger.create({
        trigger: ".plasma-section",
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
            if (!plasmaAnimationId) drawPlasma();
        },
        onLeaveBack: () => {
            if (plasmaAnimationId) {
                cancelAnimationFrame(plasmaAnimationId);
                plasmaAnimationId = null;
            }
        },
        onLeave: () => {
            if (plasmaAnimationId) {
                cancelAnimationFrame(plasmaAnimationId);
                plasmaAnimationId = null;
            }
        },
        onEnterBack: () => {
            if (!plasmaAnimationId) drawPlasma();
        }
    });

    // Adiciona o script para o efeito de partículas
    function createConfettiParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.id = 'confetti-particles-container';
        particlesContainer.style.position = 'fixed';
        particlesContainer.style.top = '0';
        particlesContainer.style.left = '0';
        particlesContainer.style.width = '100%';
        particlesContainer.style.height = '100%';
        particlesContainer.style.pointerEvents = 'none';
        particlesContainer.style.zIndex = '9999';
        document.body.appendChild(particlesContainer);

        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 8 + 2 + 'px';
            particle.style.height = Math.random() * 8 + 2 + 'px';
            particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            particle.style.borderRadius = '50%';
            particle.style.opacity = '0.8';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = -10 + 'px'; // Start above the viewport
            particlesContainer.appendChild(particle);

            gsap.to(particle, {
                y: '105vh', // Fall down
                x: (Math.random() - 0.5) * 400, // Drift left/right
                rotation: Math.random() * 720,
                opacity: 0,
                duration: Math.random() * 3 + 2, // Duration of fall
                ease: "none",
                delay: Math.random() * 2, // Stagger appearance
                repeat: -1, // Loop indefinitely
                onComplete: () => {
                    // Reset position for loop
                    gsap.set(particle, { top: -10 + 'px', left: Math.random() * 100 + 'vw', opacity: 0.8 });
                }
            });
        }
    }

    createConfettiParticles();
});
