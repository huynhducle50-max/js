function upDate(previewPic) {
    console.log("Mouse over image triggered");

    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    // Change the text in the preview area
    document.getElementById("image").innerHTML = previewPic.alt;

    // Change the background image
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function undo() {
    console.log("Mouse left the image");

    // Restore the original background
    document.getElementById("image").style.backgroundImage = "url('')";

    // Restore the original text
    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}