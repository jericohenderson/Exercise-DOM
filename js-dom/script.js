const heading = document.getElementById("heading1");

heading.innerHTML = "Jerico's JS DOM";
heading.style.color = "red";
heading.style.fontSize = "100px";

const btn = document.getElementsByTagName("button");
console.log(btn[0]);

btn[0].style.backgroundColor = "gray";
