(function() {
var AJAX_req = new XMLHttpRequest();
AJAX_req.open("GET", "resources/slides/snapsvg/main.json", true);
AJAX_req.setRequestHeader("Content-type", "application/json");
AJAX_req.send();
AJAX_req.onreadystatechange = function handle_AJAX_Complete() {
    if( AJAX_req.readyState == 4 && AJAX_req.status == 200 ) {

        var comp = new SVGAnim(JSON.parse(AJAX_req.responseText), "#svg", null, 50);
        var slide = comp.mc;
        var text = "";
        var textElement = document.getElementById('text');
        var prevElement = document.getElementById('prevBtn');
        var nextElement = document.getElementById('nextBtn');
        var textVisible = false;
        
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
        }, 1000);
    }
}
})()