// <!-- javascript  -->


const listitems = document.querySelectorAll(".sidebar-list li");
listitems.forEach(item =>{
item.addEventListener("click", ()=>{

let IsActive =item.classList.contains("active");
listitems.forEach(el=>{
el.classList.remove("active")
})
if (IsActive) item.classList.remove("active")
else item.classList.add("active");

})
})

const togglesidebar = document.querySelector(".toggle-sidebar");
const logo = document.querySelector(".logo-box");
const sidebar = document.querySelector(".sidebar");

togglesidebar.addEventListener("click", ()=>{
sidebar.classList.toggle("close");
})

logo.addEventListener("click", ()=>{
sidebar.classList.toggle("close");
})

