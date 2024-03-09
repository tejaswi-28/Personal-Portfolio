var typed = new Typed(".text",{
    strings: ["Web Developer", "MERN Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function myFunction() {
    var x = document.getElementById("myDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
