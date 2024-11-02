window.onload = function() {
    const music = document.getElementById("background-music");
    const notificationOverlay = document.createElement("div");
    notificationOverlay.id = "notification-overlay";

    const notificationBox = document.createElement("div");
    notificationBox.id = "notification-box";
    notificationBox.innerHTML = `
        <h3>Welcome to the Winter Arc</h3>
        <button onclick="startMusic()">OK</button>
    `;

    notificationOverlay.appendChild(notificationBox);
    document.body.appendChild(notificationOverlay);
};

function startMusic() {
    const notificationOverlay = document.getElementById("notification-overlay");
    document.getElementById("background-music").play();
    notificationOverlay.remove();
}

function toggleList(listId) {
    const list = document.getElementById(listId);
    list.classList.toggle('hidden');
    list.style.maxHeight = list.classList.contains('hidden') ? '0' : list.scrollHeight + 'px';
}
