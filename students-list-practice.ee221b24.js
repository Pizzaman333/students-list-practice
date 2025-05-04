const e=()=>fetch("https://681738fd26a599ae7c39acb9.mockapi.io/students/students").then(e=>e.json()),t=e=>fetch(`https://681738fd26a599ae7c39acb9.mockapi.io/students/students/${e}`,{method:"DELETE"}).then(t=>{if(!t.ok)throw Error(`Failed to delete student with ID: ${e}`);return t.json()}),n=e=>fetch("https://681738fd26a599ae7c39acb9.mockapi.io/students/students",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json());document.getElementById("get-students-btn").addEventListener("click",function(){e().then(e=>(function(e){let t=document.querySelector("#students-table tbody");t.innerHTML="",e.forEach(e=>{let n=document.createElement("tr");n.innerHTML=`
      <td>${e.id}</td>
      <td>${e.name}</td>
      <td>${e.age}</td>
      <td>${e.course}</td>
      <td>${e.skills.join(", ")}</td>
      <td>${e.email}</td>
      <td>${e.isEnrolled?"Зараховано":"Не зараховано"}</td>
      <td>
        <button class="edit__btn">\u{270F}\u{FE0F}</button>
        <button class="delete__btn">\u{1F5D1}\u{FE0F}</button>
      </td>
    `,t.appendChild(n)})})(e)).catch(e=>{console.error("Помилка при завантаженні студентів:",e)})}),document.getElementById("students-table").addEventListener("click",e=>{if(e.target.classList.contains("edit__btn")){var n;n=e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent,alert(`\u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438} \u{441}\u{442}\u{443}\u{434}\u{435}\u{43D}\u{442}\u{430} \u{437} ID ${n}`)}else e.target.classList.contains("delete__btn")&&t(e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent)}),document.getElementById("add-student-form").addEventListener("submit",e=>{e.preventDefault(),n({name:document.getElementById("name").value.trim(),age:document.getElementById("age").value.trim(),course:document.getElementById("course").value.trim(),skills:document.getElementById("skills").value.trim().split(",").map(e=>e.trim()).filter(e=>""!==e),email:document.getElementById("email").value.trim(),isEnrolled:document.getElementById("isEnrolled").checked}),document.getElementById("name").value="",document.getElementById("age").value="",document.getElementById("course").value="",document.getElementById("skills").value="",document.getElementById("email").value="",document.getElementById("isEnrolled").checked=!1});
//# sourceMappingURL=students-list-practice.ee221b24.js.map
