const content = document.getElementById('content');
const author = document.getElementById('author');

async function getQuote() {
  const quote_api = await fetch('https://api.quotable.io/random');
  const result = await quote_api.json();
  content.innerHTML = result.content;
  author.innerHTML = result.author;
}

getQuote();
