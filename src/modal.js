const modal = document.getElementById('modal');
const closeElement = document.getElementById('close');
const caption = document.getElementById('caption');
const content = document.getElementById('modal-content');

const images = document.getElementsByTagName('img');
for (const image of images) {
    image.onclick = function () {
        modal.style.display = 'block';
        content.src = this.src;
        caption.innerHTML = this.alt;
    };
}

closeElement.onclick = function () {
    modal.style.display = 'none';
};
