document.addEventListener('DOMContentLoaded', () => {
    const jokeDisplay = document.getElementById('joke-display');
    const nextBtn = document.getElementById('next-joke-btn');
    
    let jokes = [];

    // Fetch jokes from JSON file
    fetch('jokes.json')
        .then(response => response.json())
        .then(data => {
            jokes = data;
            displayRandomJoke();
        })
        .catch(error => {
            console.error('Error loading jokes:', error);
            jokeDisplay.innerHTML = '<p>عذراً، حدث خطأ في تحميل النكت.</p>';
        });

    function displayRandomJoke() {
        if (jokes.length === 0) return;
        
        // Add fade out effect
        jokeDisplay.style.opacity = 0;
        
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * jokes.length);
            const joke = jokes[randomIndex];
            
            // Clean up the joke text (remove line numbers if any remained, though our script removed them)
             // The script we wrote splits lines, but let's be safe and just display the raw string
             // Depending on how the python script processed it. We did line.strip().
             // Some lines in the file started with numbers like "1: ...".
             // The user query said "each line contains a unique joke". 
             // Looking at the view_file output, lines start with "1: ", "2: ".
             // I should probably clean that up in JS for better display if I didn't in Python.
             // Actually, I just did line.strip() in Python. So the numbers are there.
             // I should clean them here using regex.
            
            const cleanJoke = joke.replace(/^\d+:\s*/, '');

            jokeDisplay.innerHTML = `<p>${cleanJoke}</p>`;
            
            // Fade in
            jokeDisplay.style.opacity = 1;
        }, 300);
    }
    
    // Add transition style dynamically
    jokeDisplay.style.transition = 'opacity 0.3s ease';

    nextBtn.addEventListener('click', displayRandomJoke);
});
