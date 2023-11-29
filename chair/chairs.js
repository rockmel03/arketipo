document.querySelector('#menu').addEventListener('click', () => {
    gsap.to('#sidenav', {
        x: 0,
        opacity: 1,
        duration: .5
    })
})
document.querySelector('#sidenav-close-btn').addEventListener('click', () => {
    gsap.to('#sidenav', {
        x: "100%",
        opacity: 0,
        duration: .5
    })
})


const chairImg = document.querySelectorAll(".chair");

chairImg.forEach((container) => {
    container.addEventListener('click', (e) => {
        const detailsBox = container.querySelector(".about-chair")
        detailsBox.style.display = 'flex'
        detailsBox.querySelector('#popup-close-btn').addEventListener('click', () => {
            gsap.to(detailsBox, {
                display: 'none',
                duration: .1
            })
        })
    })
})