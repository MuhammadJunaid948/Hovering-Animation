const elem = document.querySelectorAll(".elem")
elem.forEach(function (values) {
    values.addEventListener("mouseenter", function () {
        values.childNodes[3].style.opacity = 1
    })
    values.addEventListener("mouseleave", function () {
        values.childNodes[3].style.opacity = 0
    })
    values.addEventListener("mousemove",function(mousedets){
    values.childNodes[3].style.left = mousedets.x+"px"
    // values.childNodes[3].style.top = mousedets.y+"px"
    })

})




