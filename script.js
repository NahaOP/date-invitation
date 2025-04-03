document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("responseMessage").innerHTML = "I loveeee youu so you have to come";
    document.getElementById("responseMessage").classList.remove("hidden");
});

document.getElementById("noButton").addEventListener("click", function() {
    document.getElementById("responseMessage").innerHTML = "You gonna say no to mee babyy? Meee lovess youu";
    document.getElementById("responseMessage").classList.remove("hidden");
});