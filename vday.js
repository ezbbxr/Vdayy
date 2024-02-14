function submitAnswer() {
    var valentineAnswer = document.querySelector('input[name="valentineAnswer"]:checked');
    if (valentineAnswer && valentineAnswer.value === "yes") {
        document.getElementById("valentineForm").style.display = "none";
        document.getElementById("animationContainer").style.display = "block";
    } else {
        document.getElementById("noResponse").style.display = "block";
    }
}
