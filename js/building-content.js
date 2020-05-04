let arrData = ["person", "job", "resume", "quote"];

const getContentLiWithYear = (data, part, docSelector, titleSelector) => {
  const result = data[part]
    .map(el => {
      return `<li><p><small>${el.year}</small></p><p>${el.comment}</p></li>`;
    })
    .join(" ");

  const docElement = document.querySelector(docSelector);
  docElement.innerHTML = "";
  docElement.insertAdjacentHTML("afterbegin", result);

  const titleElement = document.querySelector(titleSelector);
  titleElement.innerText = data.titles[part];
};

const getContentLi = (data, part, docSelector, titleSelector) => {
  const result = data[part]
    .map(el => {
      return `<li><p>${el}</p></li>`;
    })
    .join(" ");

  const docElement = document.querySelector(docSelector);
  docElement.innerHTML = "";
  docElement.insertAdjacentHTML("afterbegin", result);

  const titleElement = document.querySelector(titleSelector);
  titleElement.innerText = data.titles[part];
};

const getContentP = (data, part, docSelector, titleSelector) => {
  const result = `<p>${data[part].join(", ")}</p>`;

  const docElement = document.querySelector(docSelector);
  docElement.innerHTML = "";
  docElement.insertAdjacentHTML("afterbegin", result);

  const titleElement = document.querySelector(titleSelector);
  titleElement.innerText = data.titles[part];
};

const getContentImageLang = (data, part, docSelector, titleSelector) => {
  const result = data[part]
    .map(elm => {
      return `<span class="language" lang="${elm.sm}">
<object class="doc-lang-image" data="./images/${elm.sm}.svg" role="img" aria-label="Lang"></object>
&nbsp;${elm.name}</span>`;
    })
    .join(" ");

  const docElement = document.querySelector(docSelector);
  docElement.innerHTML = "";
  docElement.insertAdjacentHTML("afterbegin", result);

  const titleElement = document.querySelector(titleSelector);
  titleElement.innerText = data.titles[part];
};

getContentByClass = (data, classSelector) => {
  let titleElement = document.querySelector(classSelector);
  titleElement.innerText = data;
};

getContentByArray = (data, arr) => {
  arr.forEach(element => {
    getContentByClass(data.titles[element], `.title-intro-${element}`);
  });
};

const getDocument = (dataResume = resumeRyuEn) => {
  if (dataResume.titles) {
    getContentByArray(dataResume, arrData);
  }

  if (dataResume.experience) {
    getContentLiWithYear(
      dataResume,
      "experience",
      ".doc-experience",
      ".title-experience"
    );
  }
  if (dataResume.publications) {
    getContentLiWithYear(
      dataResume,
      "publications",
      ".doc-publications",
      ".title-publications"
    );
  }
  if (dataResume.achievements) {
    getContentLi(
      dataResume,
      "achievements",
      ".doc-achievements",
      ".title-achievements"
    );
  }

  if (dataResume.skills) {
    getContentP(dataResume, "skills", ".doc-skills", ".title-skills");
  }
  if (dataResume.character) {
    getContentP(dataResume, "character", ".doc-character", ".title-character");
  }
  if (dataResume.lifeLesson) {
    getContentP(
      dataResume,
      "lifeLesson",
      ".doc-life-lesson",
      ".title-life-lesson"
    );
  }
  if (dataResume.lifeEducation) {
    getContentP(
      dataResume,
      "lifeEducation",
      ".doc-life-education",
      ".title-life-education"
    );
  }
  if (dataResume.likes) {
    getContentP(dataResume, "likes", ".doc-likes", ".title-likes");
  }
  if (dataResume.dislikes) {
    getContentP(dataResume, "dislikes", ".doc-dislikes", ".title-dislikes");
  }
  if (dataResume.languages) {
    getContentImageLang(
      dataResume,
      "languages",
      ".doc-languages",
      ".title-languages"
    );
  }
};
