// Add event listener to show/hide dropdown when the button is clicked
document.querySelector('.dropbtn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
});
// Intersection Observer to detect when the section is in view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'visible' class when the section enters the viewport
            entry.target.classList.add('visible');
            // Optionally, stop observing after it has appeared
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the section is in the viewport

// Observe the .home-phrases section
const homePhrasesSection = document.querySelector('.home-phrases');
observer.observe(homePhrasesSection);
