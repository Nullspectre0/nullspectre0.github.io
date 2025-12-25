const rn = document.getElementById('room-name');
const smbt = document.getElementById('sumbit-input-rn');

smbt.addEventListener('click', function() {
    const roomName = rn.value.trim();
    if(!roomName) {
        alert("Please enter a chatroom name!");
        return;
    }

    const fakeCode = Math.floor(100000 + Math.random() * 900000);

    localStorage.setItem('lastRoomName', roomName);
    localStorage.setItem('lastRoomCode', fakeCode);

    alert(`Chatroom "${roomName}" created! Your room code is: ${fakeCode}`);
    rn.value = "";
});
