const imagePathArr = ["/images/down1.jpg", "/images/image.png", "/images/down2.jpg"]

const thirdPageCard = document.querySelectorAll(".third-page-second-card")
const thirdPageImage = document.querySelector(".image-container img")

thirdPageCard.forEach((input, index) => {
    input.addEventListener("click", () => {
      thirdPageCard.forEach(card => card.classList.remove("active"));
      input.classList.add("active");
      thirdPageImage.src = imagePathArr[index];
    })
});