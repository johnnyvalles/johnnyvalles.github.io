let projs = document.querySelectorAll(".proj-card");
projs.forEach(function(curr) {
    curr.classList.add("hide");
    curr.classList.remove("hide");
    curr.classList.add("show");
});