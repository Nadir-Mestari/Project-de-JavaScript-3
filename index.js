
const mouse = document.querySelectorAll(".mouse")

window.addEventListener("mousemove", (e) => {

    mouse.forEach((mousee) => {

        mousee.style.top = e.pageY + "px"
        mousee.style.left = e.pageX + "px"
    })

})
