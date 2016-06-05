(function () {
    "use strict";
    var getScore = function (e) {
        var answers = document.getElementsByClassName('answer'),
            ans = null,
            correct = [],
            i = 0,
            score = 0;
        for (i = 0; i < answers.length; i += 1) {
            ans = answers[i];
            if (ans.getAttribute('data-correct') === "true") {
                correct.push(ans.value);
                if (ans.checked) {
                    score += 1;
                }
            }
        }
        document.getElementById('percentage').value = Math.round(score / correct.length * 100) + '%';
        document.getElementById('solutions').value = correct.join('\r\n');
    };
    window.onload = function () {document.getElementById('calc').onclick = getScore;}
}());