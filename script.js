document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('yesButton').addEventListener('click', () => {
        showContent('video', 'wow.mp4'); // Replace with your video URL
    });

    document.getElementById('noButton').addEventListener('click', () => {
        showContent('image', 'https://cdn.glitch.global/8e1853f1-2c9b-40ac-994d-4a6b04bffbf8/I%20know%20you%20love%20me%20and%20miss%20me%20this%20much%20so%20change%20your%20answer%20Mora%3B).gif?v=1707594646349'); // Replace with your image URL
    });
});

function showContent(type, source) {
    const imageElement = document.getElementById('responseImage');
    const videoElement = document.getElementById('responseVideo');
    const contentDiv = document.getElementById('responseContent');

    if (type === 'image') {
        imageElement.src = source;
        imageElement.style.display = 'block';
        videoElement.style.display = 'none';
    } else if (type === 'video') {
        videoElement.querySelector('source').src = source;
        videoElement.load();
        videoElement.style.display = 'block';
        imageElement.style.display = 'none';
    }

    contentDiv.style.display = 'block'; // Show the container
}

