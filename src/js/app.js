import { getStudentsApi } from "./services/getStudentsAPI";
import { deleteStudentsApi } from "./services/deleteStudentsAPI";
import { addStudentsApi } from "./services/addStudentsAPI";
import { updateStudentsApi } from "./services/updateStudentsAPI";

function createLayout(students) {
  const tableBody = document.querySelector("#students-table tbody");
  tableBody.innerHTML = "";
  students.forEach((student) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.course}</td>
      <td>${student.skills.join(", ")}</td>
      <td>${student.email}</td>
      <td>${student.isEnrolled ? "Зараховано" : "Не зараховано"}</td>
      <td>
        <button class="edit__btn">✏️</button>
        <button class="delete__btn">🗑️</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

document
  .getElementById("get-students-btn")
  .addEventListener("click", function () {
    getStudentsApi()
      .then((students) => createLayout(students))
      .catch((error) => {
        console.error("Помилка при завантаженні студентів:", error);
      });
  });

async function deleteStudent(id) {
  await deleteStudentsApi(id);
  await getStudentsApi().then((students) => createLayout(students));
}
let studentToChange = 0;

document.getElementById("students-table").addEventListener("click", (event) => {
  if (event.target.classList.contains("edit__btn")) {
    document.querySelector(".backdrop").classList.remove("is-hidden");
    document.getElementById("modal-name").value =
      event.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    document.getElementById("modal-age").value =
      event.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    document.getElementById("modal-course").value =
      event.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    document.getElementById("modal-skills").value =
      event.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    document.getElementById("modal-email").value =
      event.target.parentNode.previousElementSibling.previousElementSibling.textContent;
    if (
      event.target.parentNode.previousElementSibling.textContent ===
      "Зараховано"
    ) {
      document.getElementById("modal-isEnrolled").checked = true;
    } else {
      document.getElementById("modal-isEnrolled").checked = false;
    }
    studentToChange =
      event.target.parentNode.previousElementSibling.previousElementSibling
        .previousElementSibling.previousElementSibling.previousElementSibling
        .previousElementSibling.previousElementSibling.textContent;
  } else if (event.target.classList.contains("delete__btn")) {
    deleteStudent(
      event.target.parentNode.previousElementSibling.previousElementSibling
        .previousElementSibling.previousElementSibling.previousElementSibling
        .previousElementSibling.previousElementSibling.textContent
    );
  }
});

document
  .getElementById("add-student-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const obj = {
      name: document.getElementById("name").value.trim(),
      age: document.getElementById("age").value.trim(),
      course: document.getElementById("course").value.trim(),
      skills: document
        .getElementById("skills")
        .value.trim()
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
      email: document.getElementById("email").value.trim(),
      isEnrolled: document.getElementById("isEnrolled").checked,
    };
    await addStudentsApi(obj);
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
    document.getElementById("skills").value = "";
    document.getElementById("email").value = "";
    document.getElementById("isEnrolled").checked = false;
    await getStudentsApi().then((students) => createLayout(students));
  });

document
  .querySelector(".cross")
  .addEventListener("click", (event) =>
    document.querySelector(".backdrop").classList.add("is-hidden")
  );

document
  .getElementById("change-student-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const obj = {
      name: document.getElementById("modal-name").value.trim(),
      age: document.getElementById("modal-age").value.trim(),
      course: document.getElementById("modal-course").value.trim(),
      skills: document
        .getElementById("modal-skills")
        .value.trim()
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
      email: document.getElementById("modal-email").value.trim(),
      isEnrolled: document.getElementById("modal-isEnrolled").checked,
    };
    await updateStudentsApi(`${studentToChange}`, obj);
    document.querySelector(".backdrop").classList.add("is-hidden");
    await getStudentsApi().then((students) => createLayout(students));
  });
