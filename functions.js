

$(document).on('mousemove', function(e){
    let bugX = 0;
    let bugY = 0;
    $('.bug').css({
       left:  e.pageX,
       top:   e.pageY
    });
    $('.light').css({
       left:  e.pageX - 100,
       top:   e.pageY - 100
    });

    function getCenter(element) {
        const {left, top, width, height} = element.getBoundingClientRect();
        return {x: left + width / 2, y: top + height / 2}
    }

    const bug = document.querySelector(".bug");
    const bugCenter = getCenter(bug);
    addEventListener("mousemove", ({clientX, clientY}) => {
        const angle = Math.atan2(clientY - bugCenter.y, clientX - bugCenter.x);
        bug.style.transform = `rotate(${angle}rad)`;
    });

    const moth = document.querySelector(".moth");
    const mothCenter = getCenter(moth);
    addEventListener("mousemove", ({clientX, clientY}) => {
        const angle = Math.atan2(clientY - mothCenter.y, clientX - mothCenter.x);
        moth.style.transform = `rotate(${angle}rad)`;
    });
});
