
const mal = document.getElementById("falso");
const bien = document.getElementById("verdadero");
const siii = document.getElementById("otra");
siii.disabled = true;

mal.addEventListener("click", function() {
    alert("estas mal hijo,vuelve a intentarlo");
    siii.disabled = true;
});


bien.addEventListener("click", function() {
    alert("Esta bien aprobaste uwu likeeeee guapooo ganadorrr ");
    siii.disabled = false;
});
