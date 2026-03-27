// 상품 이미지 자동 변경
document.querySelectorAll(".item_img_wrap[data-images]").forEach(wrap => {
    const img = wrap.querySelector("img");

    const images = wrap.dataset.images
    .split(",")
    .map(src => src.trim());

    let index = 0;

    images.forEach(src => {
        const i = new Image();
        i.src = src;
    });

    setInterval(() => {
        index = (index + 1) % images.length;
        img.src = images[index];
    }, 1500);
});




