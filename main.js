window.onload = projAnimate;

function projAnimate() {
    let projs = document.querySelectorAll(".proj-card");
    projs.forEach(function(curr) {
        curr.classList.remove("hide");
        curr.classList.add("show");
    });
}