document.addEventListener("DOMContentLoaded", async () => {
  const content = document.getElementById("content");

  const params = new URLSearchParams(window.location.search);
  const selectedTheme = params.get("theme");

  let data = {};

  try {
    const response = await fetch("./database.json");
    data = await response.json();
  } catch (error) {
    content.innerHTML = "<p>Error loading data.</p>";
    return;
  }

  if (!selectedTheme) {
    renderThemes();
  } else {
    renderThemeQuestions(selectedTheme);
  }

  function renderThemes() {
    content.innerHTML = "";

    Object.keys(data).forEach((theme) => {
      const link = document.createElement("a");
      link.className = "theme-link";
      link.textContent = theme;

      link.href = `?theme=${encodeURIComponent(theme)}`;
      link.target = "_blank";

      content.appendChild(link);
    });
  }

  function renderThemeQuestions(theme) {
    if (!data[theme]) {
      content.innerHTML = "<p>Theme not found.</p>";
      return;
    }

    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = theme;
    content.appendChild(heading);

    const questions = data[theme];

    questions.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "qa-card";

      card.innerHTML = `
        <h3>${index + 1}. ${item.question}</h3>
        <p class="answer"><b>Answer:</b> ${item.answer}</p>
      `;

      content.appendChild(card);
    });
  }
});
