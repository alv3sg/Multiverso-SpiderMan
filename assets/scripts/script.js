function handleMouseEnter(){
    //console.log("ok", this)
    this.classList.add("s-card--hovered")
    document.body.id = `${this.id}--hovered`
}
function handleMouseLeave(){
    //console.log("ok", this)
    this.classList.remove("s-card--hovered")
    document.body.id = ""
}

function addEventListersToCards(){
    const cardElements = document.getElementsByClassName("s-card")
    for(let card of cardElements){
        card.addEventListener("mouseenter", handleMouseEnter)
        card.addEventListener("mouseleave", handleMouseLeave)
    }
}
document.addEventListener("DOMContentLoaded", addEventListersToCards, false)

function selectCarouselItem(selectedButtonElement){
    const selectedItem = selectedButtonElement.id
    const carousel = document.querySelector(".s-cards-carousel")
    const transform = carousel.style.transform
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i)
    const rotateYDeg = -120 * (Number(selectedItem)-1)
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`)
    carousel.style.transform = newTransform
    const activeButtonElement = document.querySelector(".s-controller__button--active")
    activeButtonElement.classList.remove("s-controller__button--active")
    selectedButtonElement.classList.add("s-controller__button--active")
}