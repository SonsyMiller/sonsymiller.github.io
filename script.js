const reveals = document.querySelectorAll('.reveal');
const revealsr = document.querySelectorAll('.revealr');
const revealProj = document.querySelectorAll('.revealProj');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.5
});

reveals.forEach(reveal => {
    observer.observe(reveal);
});
revealsr.forEach(revealr => {
    observer.observe(revealr);
})
revealProj.forEach(revealProj =>{
    observer.observe(revealProj);
})
