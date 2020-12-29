function scrollAppear(item){
    var item = document.querySelector(item);
    var introPosition = item.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if(introPosition < screenPosition){
        item.classList.add('item-appear')
    }
    console.log('h')
    // item.forEach(element => {
    //     element.classList.add('item-appear')
    // });
}

window.addEventListener('scroll',function(){
    var items = document.querySelectorAll('.item');
    var screenPosition = window.innerHeight;
    items.forEach(item => {
        var introPosition = item.getBoundingClientRect().top;
        if(introPosition < screenPosition){
            item.classList.add('item-appear')
        }
    });
    
})






// function smoothScroll(target, duration){
//     var target = document.querySelector(target);
//     var targetPosition = target.getBoundingClientRect().top
//     var startPosition = window.pageYOffset;
//     var distance = targetPosition - startPosition;
//     var startTime = null;
//     function animation(currentTime){
//         if(startTime === null) startTime= currentTime;
//         var timeElapsed = currentTime - startTime;
//         var run = ease(timeElapsed, startPosition, distance, duration);
//         window.scrollTo(0, run);
//         if(timeElapsed < duration) requestAnimationFrame(animation);
//     }
//     function ease(t, b, c, d){
//         return c*Math.sin(t/d*(Math.PI/2))+b;
//     }
//     requestAnimationFrame(animation)
// }

