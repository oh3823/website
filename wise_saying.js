const content = document.getElementById('content');
const author = document.getElementById('author');

async function get_wise_saying() {
  const wise_saying_api = await fetch('https://api.quotable.io/random');
  const result = await wise_saying_api.json();
  content.innerHTML = result.content;
  author.innerHTML = result.author;
}

get_wise_saying();
