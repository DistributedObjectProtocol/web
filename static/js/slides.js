(function() {
var AJAX_req = new XMLHttpRequest();
AJAX_req.open("GET", "js/slides.json", true);
AJAX_req.setRequestHeader("Content-type", "application/json");
AJAX_req.send();
AJAX_req.onreadystatechange = function handle_AJAX_Complete() {
    if( AJAX_req.readyState == 4 && AJAX_req.status == 200 ) {

        var comp = new SVGAnim(JSON.parse(AJAX_req.responseText), "#svg", null, 50);
        var slide = comp.mc;
        var textElement = document.getElementById('text');
        var prevElement = document.getElementById('prevBtn');
        var nextElement = document.getElementById('nextBtn');
        var claimElement = document.getElementById('claim');
        
        prevElement.addEventListener('click', function(){
            slide.prev();
        });
        nextElement.addEventListener('click', function(){
            slide.next();
        });

        window.addEventListener("keydown", function(e){
            if (e.keyCode === 39)
                slide.next();
            else if (e.keyCode === 37)
                slide.prev();
        });

        // We need to delay it, if not SVGAnim will overwrite
        setTimeout(function(){
            var timeout, 
                claimvisible=true, 
                textVisible=false,
                pause = slide.pause,
                text = "";
                
            //console.log(slide)
            slide.pause = function() {
                //console.log(slide.getDuration, slide.m_currentFrameNo);
                pause()
            }
            slide.changeText = function(t) {
                if (t!==text) {
                    text = t;
                    textElement.innerHTML = text;
                }
            }
            slide.showText = function() {
                if (!textVisible) {
                    textVisible = true;
                    textElement.style.opacity = .9;
                }
            }
            slide.hideText = function() {
                if (textVisible) {
                    textVisible = false;
                    textElement.style.opacity = 0;
                }
            }
            
            slide.showClaim = function() {
                if (!claimvisible) {
                    claimvisible = true;
                    claimElement.style.opacity = 1;
                    claimElement.style.display = 'block';
                    clearTimeout(timeout);
                }
            }
            slide.hideClaim = function() {
                if (claimvisible) {
                    claimvisible = false;
                    claimElement.style.opacity = 0;
                    timeout = setTimeout(function(){
                        claimElement.style.display = 'none';
                    }, 1000)
                }
            }
        }, 1000);
    }
}
})()