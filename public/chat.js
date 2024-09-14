const socket = io();

document.getElementById('send-message').addEventListener('click', function () {
  const message = document.getElementById('message-input').value;
  socket.emit('chat message', message);
  document.getElementById('message-input').value = '';
});

socket.on('chat message', function (msg) {
  const li = document.createElement('li');
  li.textContent = msg;
  document.getElementById('messages').appendChild(li);
});
