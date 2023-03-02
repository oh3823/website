async function getQuote() {
  const quote = document.getElementById('quote');
  const content = document.getElementById('content');
  const author = document.getElementById('author');
  const response = await (await fetch('https://api.quotable.io/random')).json();
  quote.classList.remove('hidden');
  content.innerText = `"${response.content}"`;
  author.innerText = response.author;
}

getQuote();
