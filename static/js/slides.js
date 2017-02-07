(function() {
// var AJAX_req = new XMLHttpRequest()
// AJAX_req.open("GET", "js/slides.json", true)
// AJAX_req.setRequestHeader("Content-type", "application/json")
// AJAX_req.send()
// AJAX_req.onreadystatechange = function handle_AJAX_Complete() {
    // if( AJAX_req.readyState == 4 && AJAX_req.status == 200 ) {
        // var slidesjson = JSON.parse(AJAX_req.responseText);
        var comp = new SVGAnim(slidesjson, "#svg", null, 50)
        var slide = comp.mc
        var textElement = document.getElementById('text')
        var prevElement = document.getElementById('prevBtn')
        var nextElement = document.getElementById('nextBtn')
        var claimElement = document.getElementById('claim')
        var slidesPercentageElement = document.getElementById('slides-percentage')
        var slidesCountElement = document.getElementById('slides-count')
        
        prevElement.addEventListener('click', function(){
            slide.prev()
        })
        nextElement.addEventListener('click', function(){
            slide.next()
        })

        window.addEventListener("keydown", function(e){
            if (e.keyCode === 39)
                slide.next()
            else if (e.keyCode === 37)
                slide.prev()
        })

        // We need to delay it, if not SVGAnim will overwrite
        setTimeout(function(){
            var timeout, 
                claimvisible=true, 
                textVisible=false,
                pause = slide.pause,
                text = "",
                labels,
                totalSlides,
                currentSlide = 0,
                percentageSlide = 0,
                lastFrame = 1
                
            labels = []
            for (var i=0; i<slide._labels.length; ++i)
                labels[i] = Number(slide._labels[i].frameNum)+1

            totalSlides = labels.length
            slide.pause = function() {
                if (lastFrame != slide.m_currentFrameNo) {
                    lastFrame = slide.m_currentFrameNo
                    currentSlide = labels.indexOf(lastFrame)
                    percentageSlide = (currentSlide*100)/(totalSlides-1)
                    // slidesPercentageElement.style.width = percentageSlide + '%'
                    slidesCountElement.innerHTML = currentSlide + '/' + (totalSlides-1)
                }
                pause()
            }

            var next = slide.next
            slide.next = function() {
                slide.hideClaim()
                // slide.showText()
                next()
            }


            slide.changeText = function(t) {
                if (t!==text) {
                    text = t
                    textElement.innerHTML = text
                }
            }
            slide.showText = function() {
                if (!textVisible) {
                    textVisible = true
                    textElement.style.opacity = .9
                }
            }
            slide.hideText = function() {
                if (textVisible) {
                    textVisible = false
                    textElement.style.opacity = 0
                }
            }
            
            slide.showClaim = function() {
                if (!claimvisible) {
                    claimvisible = true
                    claimElement.style.opacity = 1
                    claimElement.style.display = 'block'
                    clearTimeout(timeout)
                }
            }
            slide.hideClaim = function() {
                if (claimvisible) {
                    claimvisible = false
                    claimElement.style.opacity = 0
                    timeout = setTimeout(function(){
                        claimElement.style.display = 'none'
                    }, 1000)
                }
            }
        }, 1000)
    // }
// }
})()