    // Select the bot button and bot dialog
    const botBtn = document.getElementById('botBtn');
    const botDialog = document.querySelector('.bot-dialog');

    // Add a click event to the bot button
    botBtn.addEventListener('click', function () {
        // Toggle the open class for both bot button and dialog
        botBtn.classList.toggle('open');
        botDialog.classList.toggle('open');
    });


// Show the 'Recent Works' section
document.getElementById('recentWorksBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    showSection('recent-works');
});

// Show the 'Get In Touch' section
document.getElementById('getInTouchBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    showSection('contact');
});

// Show the 'Experience' section
document.getElementById('experienceBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    showSection('experience');
});

// Scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show a specific section or scroll to the top if 'home' is selected
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    if (sectionId === 'home') {
        scrollToTop();
    } else {
        const targetSection = document.getElementById(sectionId);
        targetSection.classList.add('active');
        targetSection.classList.remove('hidden');
        // Scroll smoothly to the section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}
