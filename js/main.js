const links = document.querySelector('.links');
const mobile = document.querySelector(".mobile");

mobile.addEventListener('click', () => {
    const visibility = links.getAttribute('data-visible');
    if(visibility === "false"){
        links.setAttribute("data-visible", true);
        mobile.setAttribute('aria-expanded', true);
    }else if(visibility === "true"){
        links.setAttribute("data-visible", false)
        mobile.setAttribute('aria-expanded', false);
    }
});