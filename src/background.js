const color_dark1  = [11, 12, 21];
const color_dark2  = [21, 18, 30];
const color_dark3  = [36, 27, 40];
const color_dark4  = [55, 38, 50];
const color_light1 = [79, 52, 61];
const color_light2 = [105, 71, 73];
const color_light3 = [135, 95, 88];
const color_light4 = [165, 124, 105];

function lerp(a, b, t)
{
    return (1 - t) * a + t * b;
}

function rgb_to_string(color)
{
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

const backgroundStyle = document.querySelector("body");

window.onload = () => {
    // backgroundStyle.style.backgroundColor = rgb_to_string(color_dark2);
}

window.addEventListener("scroll", () => {
    // BACKGROUND PARALLAX EFFECT - DOESN'T WORK YET
        // const parallax = document.querySelector("div.block")
        // parallax.style.marginTop = `${window.scrollY * -0.3}px`;
        // console.log(parallax.style.marginTop);

    // BACKGROUND COLOR LERPING
        // const [r1, g1, b1] = [209, 79, 62];
        // const [r2, g2, b2] = [105, 41, 60];
        
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