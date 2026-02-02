
const elements = document.querySelectorAll('.scritor');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            typeText(entry.target);
            observer.unobserve(entry.target); // só anima uma vez
        }
    });
}, { threshold: 0.5 });

elements.forEach(el => observer.observe(el));

function typeText(element) {
    const text = element.getAttribute("data-text");
    let index = 0;

    element.innerHTML = ""; // garante que comece vazio

    function type() {
        if(index < text.length){

            // Se encontrar uma tag HTML (<br>, <strong>, etc.)
            if(text[index] === "<") {
                const closeTag = text.indexOf(">", index);
                element.innerHTML += text.slice(index, closeTag + 1);
                index = closeTag + 1;
            } else {
                element.innerHTML += text[index];
                index++;
            }

            // Velocidade da digitação
            setTimeout(type, 40);
        }
    }

    type();
}
