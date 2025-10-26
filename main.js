const staticBounce = document.getElementById("bounce1");
let x = staticBounce.style.bottom;
let y = staticBounce.style.left;

function clickButton() {
    for (let i=0; i<=480; i++) {
        staticFromBottomToLeft(i);
    }
}

function staticFromBottomToLeft(i) {

    setTimeout(() => {
        if (staticBounce.style.left > "0px") {
            staticBounce.style.bottom = `${i}px`;
            staticBounce.style.left = `${100 + (-2 * i)}px`;
        } else if (staticBounce.style.left = "0px") {
            staticBounce.style.bottom = `${2 * i}px`;
            staticBounce.style.left = `${(2 * i)}px`;
        }
    }, 10 * i);

}