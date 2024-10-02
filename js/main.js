document.getElementById('hogwartsForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const answer = document.getElementById('answer').value.toLowerCase();

    if (answer === 'hedwig') {
        document.getElementById('result').textContent = 'Correct! Here’s your flag: flag{hogwarts_owl}';
    } else {
        document.getElementById('result').textContent = 'Incorrect! Try again.';
    }
});
