var jsonfile = "resources/slides/snapsvg/main.json",
    fps = 50,
    container = "#svg",
    AJAX_req,
    slide;

AJAX_req = new XMLHttpRequest();
AJAX_req.open("GET", jsonfile, true);
AJAX_req.setRequestHeader("Content-type", "application/json");
AJAX_req.onreadystatechange = function handle_AJAX_Complete() {
    if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
    {
        json = JSON.parse(AJAX_req.responseText);
        comp = new SVGAnim(json, container, fps, null, fps);
        slide = comp.mc;
        
    }
};
AJAX_req.send();

