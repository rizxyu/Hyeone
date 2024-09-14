document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('click', () => {
        window.location.href = 'https://wa.me/+6281917302510?text=!menu';  // Ganti dengan link ke bot WhatsApp kamu
    });
    
    
   document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('nav-links').classList.toggle('active');
});
    const logoContainer = document.querySelector(".logo-container");
const logo = document.querySelector(".logoi");

// Gandakan elemen di awal untuk memastikan looping mulus
const logoClone = logo.cloneNode(true);
logoContainer.appendChild(logoClone);

// Event listener untuk animasi
logo.addEventListener("animationiteration", () => {
    // Hapus elemen pertama dan tambahkan ulang klon setelah animasi selesai
    logoContainer.removeChild(logoContainer.firstElementChild);
    const newLogoClone = logo.cloneNode(true);
    logoContainer.appendChild(newLogoClone);
});
    
    const animatedNumber = document.getElementById('animatedNumber');
    
    function animateNumber(element, start, end, duration) {
        let startTime = null;

        function updateNumber(currentTime) {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        }

        requestAnimationFrame(updateNumber);
    }

    animateNumber(animatedNumber, 0, 800, 2000); // 2000ms = 2 seconds
    // Animasi pada scroll
    const featureItems = document.querySelectorAll('.feature-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateY(50px)';
            }
        });
    });

    featureItems.forEach(item => {
        item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(item);
    });
});

