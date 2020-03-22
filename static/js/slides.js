// https://helpx.adobe.com/animate/kb/as-to-html5.html

let isLoaded = false

const SLIDE_TEXT = [
    'This is a node. A node is just an entity that can allocate JSON objects and can comunicate with other nodes.',
    'This is a node. A node is just an entity that can allocate JSON objects and can comunicate with other nodes.',
    'Here is another node. And we have connected them via WebSockets.',
    "The concept of node is a bit abstract. Let's turn them into Server and Client.",
    'Now imagine we have this JSON object on both sides.',
    'Client can send a <a href="https://github.com/DistributedObjectProtocol/protocol#Patches" target="_blank">Patch</a> to mutate the name.',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
]

function configureSlides(movie) {
    if (!isLoaded) {
        // Setup
        isLoaded = true
        window.movie = movie
        let currentSlideIndex = 0
        const totalFrames = movie.totalFrames
        const slidesFrames = Object.keys(movie.timeline._labels).map(
            label => movie.timeline._labels[label]
        )
        const totalSlides = slidesFrames.length
        const textElement = document.getElementById('text')
        const prevElement = document.getElementById('prevBtn')
        const nextElement = document.getElementById('nextBtn')
        const claimElement = document.getElementById('claim')
        const slidesCountElement = document.getElementById('slides-count')
        // const slidesPercentageElement = document.getElementById('slides-percentage')

        // Events
        prevElement.addEventListener('click', prev)
        nextElement.addEventListener('click', next)
        movie.showMeHow.addEventListener('click', next)
        movie.addEventListener('tick', () => {
            const slide = getIndexSlide()
            if (
                (frameIsInStop() || slide === 0) &&
                currentSlideIndex !== slide
            ) {
                console.log(frameIsInStop(), currentSlideIndex, slide)
                currentSlideIndex = slide
                slidesCountElement.innerHTML =
                    currentSlideIndex + 1 + ' / ' + totalSlides

                changeText(SLIDE_TEXT[currentSlideIndex])
                movie.stop()
            }
            if (slide === 0) {
                showClaim()
                hideText()
                movie.stop()
            }
        })

        window.addEventListener('keydown', function(e) {
            if (e.keyCode === 39) next()
            else if (e.keyCode === 37) prev()
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
            if (currentSlideIndex + 1 < slidesFrames.length) {
                if (frameIsInStop()) {
                    movie.play()
                } else {
                    movie.gotoAndStop(slidesFrames[currentSlideIndex + 1])
                }
            }
        }
        function prev() {
            if (currentSlideIndex - 1 >= 0) {
                movie.gotoAndStop(slidesFrames[currentSlideIndex - 1])
            }
        }

        function changeText(text) {
            textElement.innerHTML = text
        }

        function showText() {
            textElement.style.opacity = 1
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
