function onAddedImages(element) {
    let labelContent = '';
    if( element.files) {
        labelContent = "Dodane zdjęcia: " + element.files.length;
        document.getElementById("image-input-label").innerHTML = labelContent;
    }
}