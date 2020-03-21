// https://helpx.adobe.com/animate/kb/as-to-html5.html

let isLoaded = false
function configureSlides(movie) {
    if (!isLoaded) {

        // Setup
        isLoaded = true
        window.movie = movie
        let currentSlideIndex = 0
        const totalFrames = movie.totalFrames
        const slidesFrames = Object.keys(movie.timeline._labels).map(label=>movie.timeline._labels[label])
        const textElement = document.getElementById('text')
        const prevElement = document.getElementById('prevBtn')
        const nextElement = document.getElementById('nextBtn')
        const claimElement = document.getElementById('claim')
        const slidesPercentageElement = document.getElementById('slides-percentage')
        const slidesCountElement = document.getElementById('slides-count')


        // Events
        prevElement.addEventListener('click', next)
        nextElement.addEventListener('click', prev)
        movie.showmehow.addEventListener("click", next)
        movie.addEventListener("tick", () =>{
            slidesPercentageElement.style.width = Math.round(((currentSlideIndex+1)*100)/slidesFrames.length)+'%'
            const slide = getIndexSlide()
            if (frameIsInStop()) {
                currentSlideIndex = slide
                movie.stop()
            }
            if (slide === 0) {
                showClaim()
                hideText()
            }
        })


        window.addEventListener("keydown", function(e){
            if (e.keyCode === 39)
                next()
            else if (e.keyCode === 37)
                prev()
        })

        function getIndexSlide() {
            return slidesFrames.indexOf(movie.currentFrame)
        }

        function frameIsInStop() {
            return getIndexSlide() > -1
        }

        function next() {
            hideClaim()
            showText()
            console.log(currentSlideIndex, slidesFrames.length)
            if (movie.currentFrame+1 < totalFrames) {
                if (frameIsInStop()) {
                    movie.play()
                } else {
                    movie.gotoAndStop(slidesFrames[currentSlideIndex+1])
                }
            }
        }
        function prev() {
            if (currentSlideIndex-1 >= 0) {
                movie.gotoAndStop(slidesFrames[currentSlideIndex-1])
            }
        }

        function changeText(t) {
            if (t!==text) {
                text = t
                textElement.innerHTML = text
            }
        }

        function showText() {
            textElement.style.opacity = .9
        }

        function hideText() {
            textElement.style.opacity = 0
        }
    
        function showClaim() {
            claimElement.style.opacity = 1
            claimElement.style.pointerEvents = 'initial'
        }
        function hideClaim() {
            claimElement.style.opacity = 0
            claimElement.style.pointerEvents = 'none'
        }
        function learnMore() {
            location.href = '/guide/javascript'
        }

    }
}
