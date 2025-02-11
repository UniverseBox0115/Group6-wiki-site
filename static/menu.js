// 平滑过渡，逆向动画
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const submenu = item.querySelector('.submenu');
        submenu.style.display = 'block';
        setTimeout(() => submenu.style.opacity = '1', 10);
    });

    item.addEventListener('mouseleave', () => {
        const submenu = item.querySelector('.submenu');
        submenu.style.opacity = '0';
        setTimeout(() => submenu.style.display = 'none', 300);
    });
});

