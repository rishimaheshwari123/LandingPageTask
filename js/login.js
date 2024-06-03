const labels = document.querySelectorAll(".form-control label");

labels.forEach(label => {

    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay: ${idx * 20}ms">${letter}</span>`)
    .join('')
})


const inputs0= document.querySelectorAll(".form-control input");

// inputs0.forEach((input, index) => {
//     input.addEventListener("click", () => {
//         console.log("inputs0")
//         labels0[index].style.display = "block";
//     })
// })

labels.forEach(label => {
    
})

inputs0.forEach((input) => {
    input.addEventListener("click", () => {
        console.log(input);

        // Find the corresponding label by matching the 'for' attribute
        const label = Array.from(labels).find(label => label.getAttribute('for') === input.id);
        if (label) {
            label.style.color = "red";
            console.log("label", label)
        }
    });
});