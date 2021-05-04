const list = document.querySelector(".list");
const ground = document.querySelector(".ground h2").offsetTop;
const body = document.querySelector("body");
const persons = document.querySelectorAll(".person");

const fetchJson = (event) => {
  body.style.overflow = "auto";
  list.innerHTML = "";

  if (event.target.innerHTML.toLowerCase() === "vladan") {
    fetch("https://papavlad.github.io/Data/links.json")
      .then((resp) => resp.json())
      .then((data) => {
        for (i = 0; i < data.vladan.length; i++) {
          const listItem = document.createElement("DIV");
          listItem.classList.add("list-item");

          const nameIcon = document.createElement("H3");
          nameIcon.classList.add("name-icon");

          nameIcon.innerHTML = `<img src="img/prog-icons/${data.vladan[i].imgSrc}.png" alt="program logo" />${data.vladan[i].name}`;

          const download = document.createElement("A");
          download.innerHTML = "Download";
          download.href = data.vladan[i].download;

          download.classList.add("down");
          listItem.appendChild(nameIcon);
          listItem.appendChild(download);
          list.appendChild(listItem);
        }
        window.scrollTo(0, ground);
      });
  } else {
    fetch("https://papavlad.github.io/Data/links.json")
      .then((resp) => resp.json())
      .then((data) => {
        for (i = 0; i < data.natalija.length; i++) {
          const listItem = document.createElement("DIV");
          listItem.classList.add("list-item");

          const nameIcon = document.createElement("H3");
          nameIcon.classList.add("name-icon");

          nameIcon.innerHTML = `<img src="img/prog-icons/${data.natalija[i].imgSrc}.png" alt="program logo" />${data.natalija[i].name}`;

          const download = document.createElement("A");
          download.innerHTML = "Download";
          download.target = "_blank";
          download.href = data.natalija[i].download;

          download.classList.add("down");
          listItem.appendChild(nameIcon);
          listItem.appendChild(download);
          list.appendChild(listItem);
        }
        window.scrollTo(0, ground);
      });
  }
};

persons.forEach((person) => {
  person.addEventListener("click", fetchJson);
});
