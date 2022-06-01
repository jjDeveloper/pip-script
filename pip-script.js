const VIDEO = document.getElementsByTagName('video');
if ("pictureInPictureEnabled" in document) {
    console.log("PIP ENABLED: ", VIDEO);
    const btn = document.createElement('button');
    btn.id = "PIP";
    btn.innerHTML = "PIP HERE";
    btn.addEventListener("click", () => {
        if (VIDEO.length > 0) {
            for(let i = 0; i < VIDEO.length; i++) {
                console.log('processing: ', VIDEO[i]);
                const getTry = confirm(`video ${i}`);
                if (getTry) {
                  VIDEO[i].requestPictureInPicture().catch(e => console.error(e)); 
                }

            }
        }
    });
    document.querySelector("body").appendChild(btn);
}
