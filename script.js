document.addEventListener('DOMContentLoaded', function() {
    // Audio control
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    let isPlaying = false;
    
    // Try to play audio on user interaction
    function enableAudio() {
        bgMusic.volume = 0.3;
        bgMusic.play().then(() => {
            isPlaying = true;
            musicToggle.innerHTML = '<i class="fas fa-music"></i> Background Music ON';
        }).catch(error => {
            console.log("Audio playback failed:", error);
        });
    }
    
    // Toggle music playback
    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.innerHTML = '<i class="fas fa-music"></i> Background Music OFF';
        } else {
            bgMusic.play();
            musicToggle.innerHTML = '<i class="fas fa-music"></i> Background Music ON';
        }
        isPlaying = !isPlaying;
    });
    
    // Enable audio on first user interaction
    document.body.addEventListener('click', function initAudio() {
        enableAudio();
        document.body.removeEventListener('click', initAudio);
    }, { once: true });
    
    // Typewriter effect for bio (optional)
    const bioText = "I specialize in creating beautiful, functional digital experiences. With expertise in HTML, CSS, JavaScript, and more, I bring ideas to life.";
    const bioElement = document.querySelector('.bio p');
    
    if (bioElement) {
        let i = 0;
        bioElement.textContent = '';
        
        function typeWriter() {
            if (i < bioText.length) {
                bioElement.textContent += bioText.charAt(i);
                i++;
                setTimeout(typeWriter, 20);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
});
