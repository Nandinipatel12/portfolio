

    document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
            root: null, // Observe intersections relative to the viewport
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the target is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add class to animate content
                    entry.target.querySelector('.portfolio-content').classList.add('animate-bottom');
                } else {
                    // Optionally remove the class if you want to reset the animation
                    entry.target.querySelector('.portfolio-content').classList.remove('animate-bottom');
                }
            });
        }, observerOptions);

        // Target all portfolio items
        document.querySelectorAll('.portfolio-item').forEach(item => {
            observer.observe(item);
        });
    });
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle animations
    function handleAnimation(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleAnimation, {
        threshold: 0.1 // Trigger animation when 10% of the element is visible
    });

    // Observe the .animate-bottom elements
    document.querySelectorAll('.animate-bottom').forEach(element => {
        observer.observe(element);
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});
