// what is this dom

// tim element
// document.getElementById
// add element
// document.getElementsByTagName("") => HTML HTMLAllCollection
// document.getElementsByClassName("card__tripe")
let card = document.querySelector(".card");
console.log(card);
card.addEventListener("click", () => {
    card.classList.toggle("is-flipped")
})
// delete element
// style
// attribue