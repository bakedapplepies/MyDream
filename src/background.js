const color_dark1     = [63, 47, 53];
const color_dark2     = [96, 77, 68];
const color_dark3     = [120, 121, 99];
const color_primary   = [146, 177, 162];
const color_highlight = [197, 236, 253];

function lerp(a, b, t)
{
    return (1 - t) * a + t * b;
}

function rgb_to_string(color)
{
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

const backgroundStyle = document.querySelector("body");
// const parallaxStyle = document.querySelector("div.block")
// parallaxStyle.style.addEventListener(() => {

// });

window.onload = () => {
    // backgroundStyle.style.backgroundColor = rgb_to_string(color_dark2);
}

window.addEventListener("scroll", () => {
    // const [r1, g1, b1] = [209, 79, 62];
    // const [r2, g2, b2] = [105, 41, 60];
    const parallax = document.querySelector("div.block")
    parallax.style.marginTop = `${window.scrollY * -0.3}px`;
    console.log(parallax.style.marginTop);
    
    // const limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight; 
    // console.log(limit)
    // const currentY = window.scrollY;
    // const threshold = limit / 3.0;
    // const percentage = ((Math.max(threshold, currentY) / limit) - (1.0/3.0)) * 1.5;

    // const [r, g, b] = [
    //     lerp(r1, r2, percentage),
    //     lerp(g1, g2, percentage),
    //     lerp(b1, b2, percentage)
    // ];
    
    // backgroundStyle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})