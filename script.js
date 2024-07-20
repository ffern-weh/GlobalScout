document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to navigation links for smooth scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // List of available destinations and their corresponding URLs
    const destinations = {
        "japan": "japan.html",
        "vietnam": "vietnam.html",
        // Add more destinations here
    };

    // Search bar functionality
    const searchBar = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    searchButton.addEventListener('click', function() {
        const query = searchBar.value.trim().toLowerCase(); // Convert query to lowercase
        if (query) {
            if (destinations[query]) {
                window.location.href = destinations[query];
            } else {
                alert(`We will add the destination ${query} soon.`);
            }
        } else {
            alert('Please enter a destination to search.');
        }
    });
});
