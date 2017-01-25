// Menu
var headerMenu = document.getElementById('header-menu');
var headerMenuButton = document.getElementById('header-menu-button');
var headerMenuOpen = false;
headerMenuButton.addEventListener('click', function(e) {
    if (!headerMenuOpen) {
        headerMenu.style.display = 'block';
        headerMenuOpen = true;
        e.stopPropagation()
    }
})
headerMenu.addEventListener('click', function(e) {
    e.stopPropagation()
})

// Sidebar
var sidebarMenu = document.getElementById('sidebar');
var sidebarButton = document.getElementById('sidebar-button');
if (sidebarMenu) {
    var sidebarOpen = false;
    sidebarButton.addEventListener('click', function(e) {
        if (!sidebarOpen) {
            sidebarMenu.classList.add('open');
            sidebarButton.classList.add('open');
            sidebarOpen = true;
            e.stopPropagation()
        }
    })
    sidebar.addEventListener('click', function(e) {
        e.stopPropagation()
    })
}
else
    sidebarButton.style.display = 'none';


// Closing open menus
document.addEventListener('click',function(){
    if (headerMenuOpen) {
        headerMenu.style.display = 'none';
        headerMenuOpen = false;
    }
    if (sidebarOpen) {
        sidebarMenu.classList.remove('open');
        sidebarButton.classList.remove('open');
        sidebarOpen = false;
    }
})







// Autoselect
// document.querySelectorAll('a[class^="autoselect"]')
var elements = document.getElementsByClassName('autoselect');
var currentPath = location.href.split('/').slice(3);
Array.prototype.forEach.call(elements, function(element, i){
    var path = element.href.split('/').slice(3);
    var autoselect = element.getAttribute("autoselect");
    var slice = (autoselect === null) ? 
        [0]
    :
        autoselect.split(',').map(function(n){ return Number(n) });

    if (compareArray(currentPath.slice.apply(currentPath, slice), path.slice.apply(path, slice)))
        element.className += ' selected';
});

function compareArray(array1, array2) {
    if (array1.length === 0 || array1.length!== array2.length)
        return false;
    for (var index=0,total=array1.length; index<total; ++index)
        if (array1[index].toLowerCase() !== array2[index].toLowerCase())
            return false;
    return true;
}