let home = document.querySelector("#home");
let about = document.querySelector("#about-me");
let project = document.querySelector("#projects");
let exp = document.querySelector("#experience");

let input = document.querySelector("input");

input.addEventListener("change", function(){
    if(input.value == "About" || "about" || "About Me" || "about-me"){
        window.scroll({
            top:700,
            behavior : "smooth",
        })
    }

    else if(input.value == "Projects" || "projects" || "Project"){
        window.scroll({
            top:1350,
            behavior : "smooth",
        })

    }
})

home.addEventListener("click", function(event){
    event.preventDefault();
    window.scroll({
        top:0,
        behavior : "smooth",
    })
})


about.addEventListener("click", function(event){
    event.preventDefault();
    window.scroll({
        top:700,
        behavior : "smooth",
    })
})

project.addEventListener("click", function(event){
    event.preventDefault();
    window.scroll({
        top:1350,
        behavior : "smooth",
    })
})

exp.addEventListener("click", function(event){
    event.preventDefault();
    window.scroll({
        top:2100,
        behavior : "smooth",
    })
})