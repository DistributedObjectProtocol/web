
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