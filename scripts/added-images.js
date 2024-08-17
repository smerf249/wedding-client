function onAddedImages(element) {
    let labelContent = '';
    if( element.files) {
        let filesizeExceeded = 0 
        for(const file of element.files) {
            if(file.size > 10000000) {
                filesizeExceeded = 1
            }
        }
        if(element.files.length > 10) {
            alert('Maksymalna liczba zdjec to 10')
            element.value = ''
        } else if(filesizeExceeded) {
            alert('Zbyt duzy plik')
            element.value = ''
        } else {
            labelContent = "Dodane zdjęcia: " + element.files.length
            document.getElementById("image-input-label").innerHTML = labelContent 
        }
    }
}