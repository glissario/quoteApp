let quoteButton = document.getElementById("button");
quoteButton.addEventListener("click", quotation);

function quotation() {
  var raw = "";

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://quote-garden.herokuapp.com/api/v3/quotes/random",
    requestOptions
  )
    .then((response) => response.text())
    .then(function (result) {
      newQuote(JSON.parse(result).data);
    })
    .catch((error) => console.log("error", error));
}

function newQuote(element) {
  console.log(element);
  let newQuoteArea = document.querySelector("#quote-area");
  const oldQuote = document.querySelector("#quote-text");
  const oldAuthor = document.querySelector("#author");
  newQuoteArea.removeChild(oldQuote);
  newQuoteArea.removeChild(oldAuthor);

  let newQuote = document.createElement("p");
  newQuote.classList = "m-5";
  newQuote.id = "quote-text";
  const nodeQuote = element[0].quoteText;
  const node = document.createTextNode(nodeQuote);
  newQuote.appendChild(node);

  let newAuthor = document.createElement("footer");
  newAuthor.classList = "blockquote-footer text-center";
  newAuthor.id = "author";

  console.log(newAuthor);

  const nodeAuthor = element[0].quoteAuthor;
  const author = document.createTextNode(nodeAuthor);
  newAuthor.appendChild(author);

  newQuoteArea.appendChild(newQuote);
  newQuoteArea.appendChild(newAuthor);
}
