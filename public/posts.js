document.getElementById('submit-post').addEventListener('click', () => {
  const post = document.getElementById('new-post').value;
  if (post) {
    fetch('/new-post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        document.getElementById('new-post').value = '';
        updatePosts();
      });
  }
});

function updatePosts() {
  fetch('/posts-data')
    .then((res) => res.json())
    .then((posts) => {
      const postList = document.getElementById('post-list');
      postList.innerHTML = '';
      posts.forEach((post) => {
        const li = document.createElement('li');
        li.textContent = post;
        postList.appendChild(li);
      });
    });
}

// Update posts on page load
updatePosts();
