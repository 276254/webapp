// Global variable to hold the YouTube player object
let player;o8GrqUSdzi0
// Set your desired YouTube Video ID here!
const videoId = 'o8GrqUSdzi0'; // <-- REPLACE this with your actual video ID
const toggleLink = document.getElementById('pause-toggle-link');

// 1. This function is called automatically when the IFrame API is ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('audio-player', {
        height: '1', 
        width: '1',
        videoId: videoId,
        playerVars: {
            'autoplay': 1,      // <-- IMPORTANT: 1 to start playing automatically
            'controls': 0,      // Hide the YouTube player controls
            'disablekb': 1,     // Disable keyboard controls
            'iv_load_policy': 3 // Hide annotations
        },
        events: {
            // Check the state after it tries to autoplay
            'onReady': onPlayerReady 
        }
    });
}

// 2. Once the player is ready, add the click listener to the link
function onPlayerReady(event) {
    // Note: Autoplay restrictions may still prevent audio until the user interacts.
    event.target.playVideo(); 

    // Add click handler to your existing link
    toggleLink.addEventListener('click', function(e) {
        // Prevent the default link action (navigating to '#')
        e.preventDefault(); 
        
        if (player.getPlayerState() === YT.PlayerState.PLAYING || player.getPlayerState() === YT.PlayerState.BUFFERING) {
            player.pauseVideo();
            // Optional: Update the appearance of your pause button to a play icon
            toggleLink.classList.add('is-paused');
        } else {
            player.playVideo();
            // Optional: Update the appearance back to a pause icon
            toggleLink.classList.remove('is-paused');
        }
    });
}