// Kaydırma Efekti
document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

       
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('.project-title').forEach(title => {
    title.addEventListener('click', () => {
        const details = title.nextElementSibling; // Detaylar divini al
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block'; 
        } else {
            details.style.display = 'none'; // Detayları gizle
        }
    });
});

window.addEventListener('load', function() {
    console.log("Başarıyla yüklendi!");
});
