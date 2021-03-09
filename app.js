let openModal = document.getElementById("work-nomad-btn").addEventListener("click",
    function() {
        document.querySelector(".bg-modal").style.display = "flex"; 
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
});

let closeModal = document.querySelector('.close').addEventListener("click",
    function () {
        document.querySelector('.bg-modal').style.display = "none";
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
});


