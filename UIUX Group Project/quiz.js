function calculateScore() {
    var score = 0;
    var totalQuestions = 12;
    var isAllAnswered = true;

    // Validation to check if all questions are answered
    for (var i = 1; i <= totalQuestions; i++) {
        var isAnswered = document.querySelector('input[name="question' + i + '"]:checked');
        if (!isAnswered) {
            alert('Please answer all questions before submitting.');
            isAllAnswered = false;
            break;
        }
    }

    // Calculate score only if all questions are answered
    if (isAllAnswered) {
        for (var i = 1; i <= totalQuestions; i++) {
            var selectedOption = document.querySelector('input[name="question' + i + '"]:checked');
            if (selectedOption) {
                score += parseInt(selectedOption.value);
            }
        }

        document.getElementById('result').innerText = "Your score is: " + score;

        if(score <= 7){
            document.getElementById('desc').innerText = "You are most likely colorblind, seek an eyecare professional to get the correct diagnosis.";
        }
        else {
            document.getElementById('desc').innerText = "You are not colorblind.";
        }
    }
}
