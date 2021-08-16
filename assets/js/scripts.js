/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
// window.onscroll = function() {
//     scrollFunction();
//     scrollFunctionBTT(); // back to top button
// };

window.onload = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 30) {
        document.getElementById("navbar").classList.add("top-nav-collapse");
    } else if (document.documentElement.scrollTop < 30) {
        document.getElementById("navbar").classList.remove("top-nav-collapse");
    }
}

// Navbar on mobile
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", () => {
        document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
    document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// Hover on desktop
function toggleDropdown(e) {
    const _d = e.target.closest(".dropdown");
    let _m = document.querySelector(".dropdown-menu", _d);

    setTimeout(
        function() {
            const shouldOpen = _d.matches(":hover");
            _m.classList.toggle("show", shouldOpen);
            _d.classList.toggle("show", shouldOpen);

            _d.setAttribute("aria-expanded", shouldOpen);
        },
        e.type === "mouseleave" ? 300 : 0
    );
}

// On hover
const dropdownCheck = document.querySelector('.dropdown');

if (dropdownCheck !== null) {
    document.querySelector(".dropdown").addEventListener("mouseleave", toggleDropdown);
    document.querySelector(".dropdown").addEventListener("mouseover", toggleDropdown);

    // On click
    document.querySelector(".dropdown").addEventListener("click", (e) => {
        const _d = e.target.closest(".dropdown");
        let _m = document.querySelector(".dropdown-menu", _d);
        if (_d.classList.contains("show")) {
            _m.classList.remove("show");
            _d.classList.remove("show");
        } else {
            _m.classList.add("show");
            _d.classList.add("show");
        }
    });
}


/* Code for changing active 
           link on clicking */
var btns = $("#navbar .navbar-nav .nav-link");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

/* Code for changing active 
link on Scrolling */
$(window).scroll(function() {
    var distance = $(window).scrollTop();
    $('.session').each(function(i) {
        if ($(this).position().top <= distance + 100) {
            $('.navbar-nav a.active').removeClass('active');
            $('.navbar-nav a').eq(i).addClass('active');
        }
    });
}).scroll();

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}
