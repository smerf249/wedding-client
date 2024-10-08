function onSubmit() {
    const loader = document.getElementById('loader')
    loader.style.opacity = "1"

    let wishesInput = document.getElementById("wishes")
    let signatureInput = document.getElementById("signature")
    let imagesInput = document.getElementById("images-input")

    const content = document.getElementById("content")
    content.style.opacity = "0.2"

    var inputs = document.getElementsByTagName('input');
    var len = inputs.length;

    for (var i = 0; i < len; i++) {
        inputs[i].disabled = true;
    }
    wishesInput.disabled = true;

    var data = new FormData()
    data.append('wishes', wishesInput.value)
    data.append('user', signatureInput.value)

    for (const file of imagesInput.files) {
        data.append('images', file, file.name);
    }

    const URL = "https://wedding-app-server.onrender.com/wedding-wishes"
    fetch(URL, {
        method: "POST",
        body: data
    }).then(res => {     
        loader.style.opacity = "0"
        for (var i = 0; i < len; i++) {
            inputs[i].disabled = false;
        }
        wishesInput.disabled = false;
        content.style.opacity = "1"
        wishesInput.value = ''
        signatureInput.value = ''
        imagesInput.value = ''
        document.getElementById("image-input-label").innerHTML = 'Dodaj zdjęcia (Maks. 10)'    
    })
}