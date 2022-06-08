class JJPipButon extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    this.wrapper = document.createElement("div");
    this.wrapper.setAttribute("id", "jj-pip-modal");
    this.wrapper.setAttribute("clas", "wrapper");

    const style = document.createElement("style");
    console.log(style.isConnected);
    style.textContent = `
    #jj-pip-modal {
        position: absolute;
        top: 20px;
        left: 48vw;
        z-index: 99999;
    }
    `;

    shadow.appendChild(this.wrapper);
    shadow.appendChild(style);
  }

  connectedCallback() {
    this._fetchVideos();
  }

  _fetchVideos() {
    this.videos = document.getElementsByTagName("video");
    if ("pictureInPictureEnabled" in document) {
      const btn = document.createElement("button");
      btn.id = "PIP";
      btn.innerHTML = "PIP HERE";
      this.wrapper.appendChild(btn);
      this._addClickHandler(btn);
    } else {
      console.log("Picture in picture not enabled");
    }
  }

  _addClickHandler(button) {
    button.addEventListener("click", () => {
      if (this.videos.length > 0) {
        for (let i = 0; i < this.videos.length; i++) {
          console.log("processing: ", this.videos[i]);
          const getTry = confirm(`video ${i}`);
          if (getTry) {
            this.videos[i]
              .requestPictureInPicture()
              .catch((e) => console.error(e));
          }
        }
      }
    });
  }
}

customElements.define("pip-modal", JJPipButon);

const pip = document.createElement("pip-modal");
document.body.appendChild(pip);
