function editStudent(t){alert(`\u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438} \u{441}\u{442}\u{443}\u{434}\u{435}\u{43D}\u{442}\u{430} \u{437} ID ${t}`)}function deleteStudent(t){alert(`\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438} \u{441}\u{442}\u{443}\u{434}\u{435}\u{43D}\u{442}\u{430} \u{437} ID ${t}`)}document.addEventListener("DOMContentLoaded",function(){let t=document.querySelector("#students-table tbody");fetch("https://681738fd26a599ae7c39acb9.mockapi.io/students/students").then(t=>t.json()).then(u=>{u.forEach(u=>{let e=document.createElement("tr");e.innerHTML=`
            <td>${u.id}</td>
            <td>${u.name}</td>
            <td>${u.age}</td>
            <td>${u.course}</td>
            <td>${u.skills.join(", ")}</td>
            <td>${u.email}</td>
            <td>${u.isEnrolled?"Зараховано":"Не зараховано"}</td>
            <td>
              <button onclick="editStudent(${u.id})">\u{270F}\u{FE0F}</button>
              <button onclick="deleteStudent(${u.id})">\u{1F5D1}\u{FE0F}</button>
            </td>
          `,t.appendChild(e)})}).catch(t=>{console.error("Помилка при завантаженні студентів:",t)})});
//# sourceMappingURL=students-list-practice.7b7b3d01.js.map
