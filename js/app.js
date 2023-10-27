let sidebarBtn = document.querySelector(".sidebarBtn");
let sidebar = document.querySelector('.sidebar')

function openSidebar () {
    sidebar.classList.add('on')

}
sidebarBtn.addEventListener("click", openSidebar);


let crossBtn = document.querySelector(".crossBtn");

function closeSidebar (event) {
    if (
        event.target.classList.contains("sidebar")|| 
        event.target.classList.contains("crossBtn")
    ) {
    sidebar.classList.remove('on');
  }
    
}


crossBtn.addEventListener("click", closeSidebar);

sidebar.addEventListener("click", closeSidebar );