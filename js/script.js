document.addEventListener('DOMContentLoaded', () => { 
    console.log('Portfolio của Mai Thị Thảo Vy đã load xong!');
alert("Chào mừng bạn đến với portfolio thật trên Internet của mình!");
});
const btn = document.getElementById("themeBtn");

if(btn){
    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}
