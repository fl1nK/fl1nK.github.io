var form = document.querySelector("form");
const body = document.querySelector("body");

function onSubmit() {
  console.log("start");
  console.log(form.name.value);
  if (!checkName()) {
    alert("Ім'я введено невірно!");
    form.name.style.background = "rgb(255,190,190)";
  } else if (!checkVariant()) {
    alert("Номер варіанту введено невірно!");
    form.variant.style.background = "rgb(255,190,190)";
  } else if (!checkPhoneNumber()) {
    alert("Номер телефону введено невірно!");
    form.phone.style.background = "rgb(255,190,190)";
  } else if (!checkFaculty()) {
    alert("Назву факультету введено невірно!");
    form.faculty.style.background = "rgb(255,190,190)";
  } else if (!checkAddress()) {
    alert("Назву адреса введено невірно!");
    form.address.style.background = "rgb(255,190,190)";
  } else {
    alert(
      "ПІБ: " +
        form.name.value +
        "\n" +
        "Варіант: " +
        form.variant.value +
        "\n" +
        "Телефон: " +
        form.phone.value +
        "\n" +
        "Факультет: " +
        form.faculty.value +
        "\n" +
        "Адреса: " +
        form.address.value +
        "\n"
    );
  }
}

function checkName() {
  var value = form.name.value;
  var valueRE = /^[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
  return value.match(valueRE);
}

function checkVariant() {
  var value = form.variant.value;
  var valueRE = /^\d+$/;
  return value.match(valueRE);
}

function checkPhoneNumber() {
  var value = form.phone.value;
  var valueRE = /^\(\d\d\d\)-\d\d\d-\d\d-\d\d$/; // (111)-111-11-11
  return value.match(valueRE);
}

function checkFaculty() {
  var value = form.faculty.value;
  var valueRE = /^[А-ЯІЇЄҐ]+$/;
  return value.match(valueRE);
}

function checkAddress() {
  var value = form.address.value;
  var valueRE = /^м.[А-ЯІЇЄҐ][а-яїєґ]+$/;
  return value.match(valueRE);
}

//============ Завдання 2 ========================================================

const VARIANT = 7;

for (let r = 0; r < 6; r++) {
  const rowElement = document.createElement("tr");
  for (let d = 0; d < 6; d++) {
    const index = String(d + 1 + r * 6);
    const dataElement = document.createElement("td");
    dataElement.innerHTML = index;
    dataElement.id = index;
    rowElement.appendChild(dataElement);
    body.appendChild(rowElement);
  }
}

function onMouseClickCell(element) {
  element.style.background = document.getElementById("current_color").value;
}

function onDoubleClickCell() {
  const startColumn = VARIANT;
  for (let j = startColumn; j <= 36; j += 12) {
    for (let i = 0; i < 6; i++) {
      const currentElement = document.getElementById(String(j + i));
      currentElement.style.background =
        document.getElementById("current_color").value;
    }
  }
}

function onMouseOverRandomBg(element) {
  element.style.background =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";
}

const elementByVariant = document.getElementById(String(VARIANT));

elementByVariant.onmouseover = () => {
  onMouseOverRandomBg(elementByVariant);
};

elementByVariant.onmouseup = () => {
  onMouseClickCell(elementByVariant);
};

elementByVariant.ondblclick = () => {
  onDoubleClickCell();
};
