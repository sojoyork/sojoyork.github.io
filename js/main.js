document.getElementById('hogwartsForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const answer = document.getElementById('answer').value.toLowerCase();

    if (answer === 'hedwig') {
        document.getElementById('result').textContent = 'Correct! Here’s your flag: flag{hogwarts_owl}';
    } else {
        document.getElementById('result').textContent = 'Incorrect! Try again.';
    }
});

document.getElementById('cmdForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const cmd = document.getElementById('cmdInput').value.toLowerCase();

    if (cmd === 'ls' || cmd === 'cat flag.txt') {
        document.getElementById('cmdResult').textContent = 'flag{command_injection_found}';
    } else {
        document.getElementById('cmdResult').textContent = 'Unknown command.';
    }
});
