function showLearningHoursGraph() {
    document.getElementById("learning-hours-option").style.opacity = 1;
    document.getElementById("tests-option").style.opacity = 0.4;

    document.getElementById("learning-hours").style.display = "block";
    document.getElementById("tests").style.display = "none";
}

function showTestsGraph() {
    document.getElementById("learning-hours-option").style.opacity = 0.4;
    document.getElementById("tests-option").style.opacity = 1;

    document.getElementById("learning-hours").style.display = "none";
    document.getElementById("tests").style.display = "block";
}

function showSubjectTests() {
    document.getElementById("subject-option").style.opacity=1;
    
    document.getElementById("newest-option").style.opacity=0.4;
    document.getElementById("favourites-option").style.opacity=0.4;
    document.getElementById("newest-option").style.opacity=0.4;
}

function showNewstTests() {

}

function showFavorites() {

}

function showHighestMarks() {

}