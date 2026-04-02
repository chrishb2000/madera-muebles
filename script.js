// ========================================
// Translations
// ========================================
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contact',
        'hero.title1': 'Custom Wood Cabinets',
        'hero.subtitle1': 'You dream it, we can build it!',
        'hero.title2': 'Bathroom Vanities',
        'hero.subtitle2': 'Elegant & Functional Design',
        'hero.title3': 'Bedroom Furniture',
        'hero.subtitle3': 'Crafted with Precision',
        'hero.title4': 'Kitchen Remodeling',
        'hero.subtitle4': 'Transform Your Space',
        'hero.title5': 'Living Room Woodwork',
        'hero.subtitle5': 'Beautiful & Durable',
        'hero.cta': 'Get Free Estimate',
        'about.title': 'About Muebles David Danilo Santos',
        'about.text1': 'Professional cabinet maker with extensive experience in home remodeling. We specialize in all types of custom cabinets, woodwork, and laminates.',
        'about.text2': 'With years of experience serving Miami-Dade County, we bring your dreams to life with expert craftsmanship, attention to detail, and personalized service.',
        'about.text3': 'We work with 3D view and drawings to help you visualize your project before we begin construction.',
        'about.feature1': 'Free Estimates',
        'about.feature2': '3D Design',
        'about.feature3': 'Years of Experience',
        'about.feature4': 'Quality Craftsmanship',
        'services.title': 'Our Services',
        'services.subtitle': 'All types of custom Cabinets, WOODWORK, and LAMINATES',
        'services.kitchen': 'Kitchen Cabinets',
        'services.kitchen.desc': 'Custom kitchen cabinets, islands, and pantries designed for your space.',
        'services.bathroom': 'Bathroom Vanities',
        'services.bathroom.desc': 'Elegant bathroom cabinets and vanities built to last.',
        'services.bedroom': 'Bedroom Furniture',
        'services.bedroom.desc': 'Custom closets, wardrobes, and headboards.',
        'services.living': 'Living Room',
        'services.living.desc': 'Entertainment centers, shelves, and custom woodwork.',
        'services.3d': '3D Design',
        'services.3d.desc': 'Visualize your project with our 3D drawings and renderings.',
        'services.laminates': 'Laminates',
        'services.laminates.desc': 'Professional laminate installation for countertops and surfaces.',
        'services.doors': 'Doors & Trim',
        'services.doors.desc': 'Custom doors, window frames, and decorative molding.',
        'services.commercial': 'Commercial',
        'services.commercial.desc': 'Office cabinets, storage solutions, and commercial woodwork.',
        'portfolio.title': 'Our Portfolio',
        'portfolio.subtitle': 'See our latest projects and craftsmanship',
        'testimonials.title': 'Customer Reviews',
        'testimonials.review1.text': '"Recently David made the furniture for my kitchen and bathroom, also for my bedroom and I was very happy, very good price, he fulfilled the time we agreed and he is a very kind and professional gentleman, with many years of experience, without a doubt I recommend his carpentry services"',
        'testimonials.review2.text': '"David is my go to carpenter for all things cabinetry! Highly recommend to all in Dade County looking for craftsmanship and great pricing"',
        'testimonials.review3.text': '"Very pleased with his carpentry services, quality and excellent price, very professional, I recommend him"',
        'contact.title': 'Contact Us',
        'contact.address': 'Address',
        'contact.phone': 'Phone',
        'contact.hours': 'Hours',
        'contact.hoursValue': 'Monday - Friday: 8:00 AM - 6:00 PM',
        'contact.hoursValue2': 'Saturday: By Appointment',
        'footer.tagline': 'You dream it, we can build it!'
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Quiénes Somos',
        'nav.services': 'Servicios',
        'nav.portfolio': 'Portafolio',
        'nav.contact': 'Contacto',
        'hero.title1': 'Muebles de Madera Personalizados',
        'hero.subtitle1': '¡Tú lo sueñas, nosotros lo construimos!',
        'hero.title2': 'Vanidades de Baño',
        'hero.subtitle2': 'Diseño Elegante y Funcional',
        'hero.title3': 'Muebles de Habitación',
        'hero.subtitle3': 'Elaborados con Precisión',
        'hero.title4': 'Remodelación de Cocinas',
        'hero.subtitle4': 'Transforma Tu Espacio',
        'hero.title5': 'Ebanistería para Sala',
        'hero.subtitle5': 'Hermoso y Duradero',
        'hero.cta': 'Obtén Cotización Gratis',
        'about.title': 'Sobre Muebles David Danilo Santos',
        'about.text1': 'Ebanista profesional con amplia experiencia en remodelaciones de casas. Nos especializamos en todo tipo de gabinetes personalizados, ebanistería y laminados.',
        'about.text2': 'Con años de experiencia sirviendo a Miami-Dade County, hacemos realidad tus sueños con artesanía experta, atención al detalle y servicio personalizado.',
        'about.text3': 'Trabajamos con vistas y dibujos 3D para ayudarte a visualizar tu proyecto antes de comenzar la construcción.',
        'about.feature1': 'Cotizaciones Gratis',
        'about.feature2': 'Diseño 3D',
        'about.feature3': 'Años de Experiencia',
        'about.feature4': 'Artesanía de Calidad',
        'services.title': 'Nuestros Servicios',
        'services.subtitle': 'Todo tipo de gabinetes personalizados, EBANISTERÍA y LAMINADOS',
        'services.kitchen': 'Gabinetes de Cocina',
        'services.kitchen.desc': 'Gabinetes de cocina personalizados, islas y despensas diseñadas para tu espacio.',
        'services.bathroom': 'Vanidades de Baño',
        'services.bathroom.desc': 'Elegantes gabinetes y vanidades de baño construidos para durar.',
        'services.bedroom': 'Muebles de Habitación',
        'services.bedroom.desc': 'Closets, armarios y cabeceros personalizados.',
        'services.living': 'Sala de Estar',
        'services.living.desc': 'Centros de entretenimiento, estantes y ebanistería personalizada.',
        'services.3d': 'Diseño 3D',
        'services.3d.desc': 'Visualiza tu proyecto con nuestros dibujos y renderizados 3D.',
        'services.laminates': 'Laminados',
        'services.laminates.desc': 'Instalación profesional de laminados para encimeras y superficies.',
        'services.doors': 'Puertas y Molduras',
        'services.doors.desc': 'Puertas personalizadas, marcos de ventanas y molduras decorativas.',
        'services.commercial': 'Comercial',
        'services.commercial.desc': 'Gabinetes de oficina, soluciones de almacenamiento y ebanistería comercial.',
        'portfolio.title': 'Nuestro Portafolio',
        'portfolio.subtitle': 'Mira nuestros últimos proyectos y artesanía',
        'testimonials.title': 'Reseñas de Clientes',
        'testimonials.review1.text': '"Recientemente David hizo los muebles de mi cocina y mi baño, también de mi habitación y quedé muy contenta, muy buen precio, cumplió con el tiempo que acordamos y es un señor muy amable y profesional, con muchos años de experiencia, sin duda recomiendo sus servicios de carpintería"',
        'testimonials.review2.text': '"¡David es mi carpintero de confianza para todo lo relacionado con gabinetes! Muy recomendado para todos en Dade County que buscan artesanía y excelentes precios"',
        'testimonials.review3.text': '"Muy complacido con sus servicios de carpintería, calidad y precio excelente, muy profesional, lo recomiendo"',
        'contact.title': 'Contáctanos',
        'contact.address': 'Dirección',
        'contact.phone': 'Teléfono',
        'contact.hours': 'Horario',
        'contact.hoursValue': 'Lunes - Viernes: 8:00 AM - 6:00 PM',
        'contact.hoursValue2': 'Sábado: Con Cita Previa',
        'footer.tagline': '¡Tú lo sueñas, nosotros lo construimos!'
    }
};

// ========================================
// Language Switcher
// ========================================
let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.value = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang-code') === lang);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save preference
    localStorage.setItem('preferredLang', lang);
}

// ========================================
// Navigation
// ========================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Scroll effect for navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show/hide scroll to top button
    const scrollTopBtn = document.getElementById('scrollTop');
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========================================
// Language Buttons
// ========================================
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang-code');
        setLanguage(lang);
    });
});

// Load saved language preference
const savedLang = localStorage.getItem('preferredLang') || 'en';
setLanguage(savedLang);

// ========================================
// Carousel
// ========================================
const carouselTrack = document.getElementById('carouselTrack');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');
const carouselDots = document.querySelectorAll('.dot');

let currentSlide = 0;
const totalSlides = 5;
let autoPlayInterval;

function goToSlide(index) {
    currentSlide = index;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    if (currentSlide >= totalSlides) currentSlide = 0;
    
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    carouselDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

carouselNext.addEventListener('click', () => {
    nextSlide();
    stopAutoPlay();
    startAutoPlay();
});

carouselPrev.addEventListener('click', () => {
    prevSlide();
    stopAutoPlay();
    startAutoPlay();
});

carouselDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
        stopAutoPlay();
        startAutoPlay();
    });
});

// Touch support for carousel
let touchStartX = 0;
let touchEndX = 0;

carouselTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoPlay();
}, { passive: true });

carouselTrack.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    startAutoPlay();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
}

// Start autoplay
startAutoPlay();

// Pause on hover
const heroSection = document.querySelector('.hero');
heroSection.addEventListener('mouseenter', stopAutoPlay);
heroSection.addEventListener('mouseleave', startAutoPlay);

// ========================================
// Portfolio Modal
// ========================================
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const modalClose = document.getElementById('modalClose');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');
const portfolioItems = document.querySelectorAll('.portfolio-item');

let currentImageIndex = 0;
const portfolioImages = Array.from(portfolioItems).map(item => ({
    src: item.querySelector('img').src,
    alt: item.querySelector('img').alt
}));

function openModal(index) {
    currentImageIndex = index;
    updateModalImage();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function updateModalImage() {
    modalImage.src = portfolioImages[currentImageIndex].src;
    modalCaption.textContent = portfolioImages[currentImageIndex].alt;
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + portfolioImages.length) % portfolioImages.length;
    updateModalImage();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % portfolioImages.length;
    updateModalImage();
}

portfolioItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        openModal(index);
    });
});

modalClose.addEventListener('click', closeModal);
modalPrev.addEventListener('click', showPrevImage);
modalNext.addEventListener('click', showNextImage);

// Close modal on background click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeModal();
    } else if (e.key === 'ArrowLeft') {
        showPrevImage();
    } else if (e.key === 'ArrowRight') {
        showNextImage();
    }
});

// ========================================
// Scroll to Top
// ========================================
const scrollTopBtn = document.getElementById('scrollTop');

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Intersection Observer for Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and testimonial cards
document.querySelectorAll('.service-card, .testimonial-card, .portfolio-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// Lazy Loading for Images
// ========================================
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ========================================
// Google Maps - Update with correct coordinates
// ========================================
// The map iframe in HTML uses the address: 1919 NW 22nd St, Miami, FL 33142
// You may want to update the iframe src with the actual embed URL from Google Maps

// ========================================
// Form Handling (if needed in future)
// ========================================
// Currently no contact form as per requirements

// ========================================
// Performance: Preload critical images
// ========================================
function preloadImages() {
    const criticalImages = [
        'images/kitchen-cabinets-woodwork.jpg',
        'images/bathroom-vanity-custom.jpg',
        'images/bedroom-furniture-wood.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

preloadImages();

// ========================================
// Console Welcome Message
// ========================================
console.log('%c🪚 Muebles David Danilo Santos', 'color: #8B4513; font-size: 24px; font-weight: bold;');
console.log('%cCustom Wood Cabinets & Woodwork in Miami', 'color: #666; font-size: 14px;');
console.log('%c📞 +1 786-256-0069', 'color: #666; font-size: 12px;');
console.log('%cDeveloped by Christian Herencia', 'color: #8B4513; font-size: 12px;');
