let navbtn = document.querySelector(".navbar-burger");

navbtn.addEventListener("click", (e) => {
  console.log("click");
  document.querySelector(".navbar-menu").classList.toggle("is-active");
  navbtn.classList.toggle("is-active");
});

/*
CARD EXAMPLE TEMP LOCATION

<div class="cards-item">
    <div class="avatar">
        <img class="avatar-image" src="..." />
    </div>
    <h2 class="title is-2">Next Member...</h2>
    <p class="subtitle is-4">Optional Subtitle</p>
</div>
*/
let cardsContainer = document.querySelector(".cards");

fetch("/api/v1/members")
  .then((res) => res.json())
  .then(({ members }) => {
    members.forEach((m) => {
      cardsContainer.innerHTML += `<div class="cards-item">
        <div class="avatar appear">
            <img class="avatar-image" src=${
              m.image_url
                ? "assets/images/" + m.image_url
                : "assets/svg/user.svg"
            } />
        </div>
        <hr />
        <h2 class="title is-4 has-text-white">${m.name || "Unknown"}</h2>
        <p class="subtitle is-6 has-text-white">${m.title || "Member"}</p>
        <div class="d-flex justify-content-around align-items-center">
        <a target="_blank" href="${m.github_url}">
          <img class="social-link" alt="GitHub" src="assets/svg/github.svg" />
        </a>
        <a target="_blank" href="${m.linkedin_url}">
          <img class="social-link" alt="LinkedIn" src="assets/svg/linkedin.svg" />
        </a>
        <a target="_blank" href="${m.page_url}">
          <img class="social-link" alt="Personal Page" src="assets/svg/compass.svg" />
        </a>
        </div>
    </div>`;
    });
  })
  .catch((err) => console.error("Failed to fetch members"));
