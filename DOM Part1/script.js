let btn1 = document.querySelector("#Mode");
let body = document.querySelector("body");

let currmode = "light";

btn1.addEventListener("click", () => {
  if (currmode === "light") {
    currmode = "dark";
    body.classList.add("dark");
    body.classList.remove("light")
  } else {
    currmode = "light";
    body.classList.add("light");
  }
  console.log(currmode);
});
