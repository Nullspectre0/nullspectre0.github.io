const rc = document.getElementById('room-code');
const joinBtn = document.getElementById('sumbit-input-rc');

joinBtn.addEventListener('click', function() {
    const enteredCode = rc.value.trim();
    const savedCode = localStorage.getItem('lastRoomCode');

    if(!enteredCode) {
        alert("Please enter a room code!");
        return;
    }

    if(enteredCode === savedCode) {
        alert(`Welcome to room "${localStorage.getItem('lastRoomName')}"!`);
        window.location.href = "room.html"; // fake room page
    } else {
        alert("Incorrect room code! Try again.");
    }

    rc.value = "";
});
