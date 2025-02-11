//3秒或直到加载完成的动画
window.addEventListener('load', function() {
    var loadingOverlay = document.querySelector('.loading-overlay');
    setTimeout(function() {
        loadingOverlay.classList.add('hidden');
    }, 3000);
});


// svg滚动条
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollRatio = scrollTop / (scrollHeight - windowHeight);

    const bar = document.querySelector('.bar');
    const maxBarHeight = 100; 

    bar.style.height = `${scrollRatio * maxBarHeight}%`;
});

function setSvgViewBoxHeight() {
    const svg = document.getElementById('scroll-bar');
    const pageHeight = document.documentElement.scrollHeight;
    svg.setAttribute('viewBox', `0 0 10 ${pageHeight}`);
}

window.addEventListener('load', setSvgViewBoxHeight);
window.addEventListener('resize', setSvgViewBoxHeight);


// 背景虚化
const imgElement = document.querySelector('.img1 img');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
        imgElement.classList.add('blur');
    } else {
        imgElement.classList.remove('blur');
    }
});

