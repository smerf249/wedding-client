function onAddedImages(element) {
    let labelContent = '';
    if( element.files) {
        const filesizeExceeded = element.files.includes(file => file.size > 10000000)
        if(element.files.length > 10) {
            alert('Maksymalna liczba zdjęć to 10')
            element.value = ''
        } else if(filesizeExceeded) {
            alert('Przekroczono rozmiar pliku')
            element.value = ''
        } else {
            labelContent = "Dodane zdjęcia: " + element.files.length;
            document.getElementById("image-input-label").innerHTML = labelContent;
        }
    }
}