document.addEventListener("DOMContentLoaded", () => {
  displayDefaultQuote();
  const newQuoteBtn = document.querySelector("#new-quote-btn");
  newQuoteBtn.addEventListener("click", getRandomQuote);
});

function displayDefaultQuote() {
  const defaultQuote = "This is the default quote.";
  const defaultAuthor = "Default Author";

  const quoteText = document.querySelector("#quote-text");
  const quoteAuthor = document.querySelector("#quote-author");

  quoteText.textContent = defaultQuote;
  quoteAuthor.textContent = `- ${defaultAuthor}`;
}

async function getRandomQuote() {
  try {
    const response = await fetch("https://dummy-apis.netlify.app/api/quote");
    if (response.ok) {
      const quoteData = await response.json();
      const quoteText = quoteData.text;
      const quoteAuthor = quoteData.author;
      const quoteTextElem = document.querySelector("#quote-text");
      const quoteAuthorElem = document.querySelector("#quote-author");
      quoteTextElem.innerHTML = `${quoteText}<br>- ${quoteAuthor}`;
      quoteAuthorElem.textContent = "";
    } else {
      throw new Error("Failed to fetch quote");
    }
  } catch (error) {
    console.error(error);
  }
}
