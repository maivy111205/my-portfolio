document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Mai Thị Thảo Vy đã load xong!');
});
const btn=document.getElementById("themeBtn");

if(btn){
    btn.addEventListener("click",()=>{
        document.body.classList.toggle("dark");
    });
}
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade").forEach(el=>{
    observer.observe(el);
});
