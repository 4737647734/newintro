// Auto-play background music after page load
window.addEventListener('load', function () {
    const bgMusic = document.getElementById('bgMusic');

    // Try to play music
    bgMusic.play().catch(e => {
        console.log("Audio autoplay was blocked by browser. Waiting for user interaction...");

        // Fallback: Play on first click/tap
        document.addEventListener('click', function () {
            bgMusic.play().catch(err => {
                console.error("Audio play failed:", err);
            });
        }, { once: true });
    });
});
