let stars = document.getElementById('stars');
let meteorid = document.getElementById('meteorid');
let babys1 = document.getElementById("babys1");
let text = document.getElementById('text');
let button = document.getElementById('button');
let container = document.getElementById('container');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    babys1.style.top = value * -0.5 + 'px';
    text.style.marginBottom = value * 1 + 'px';
    button.style.marginBottom = value * 1 + 'px';
});

document.querySelectorAll('.video-container video').forEach(vid => {
    vid.onclick = () =>{
        document.querySelector('.popup-video').style.display = 'block';
        document.querySelector('.popup-video video').src = vid.getAttribute('src');
    }
});

document.querySelector('.popup-video span').onclick = () =>{
    document.querySelector('.popup-video').style.display = 'none';
}

document.getElementById('button').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('container').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.popup-video span').onclick = () =>{
    let videoElement = document.querySelector('.popup-video video');
    videoElement.pause(); // Memberhentikan pemutaran video
    videoElement.currentTime = 0; // Mengatur waktu pemutaran video kembali ke awal
    document.querySelector('.popup-video').style.display = 'none';
}