document.getElementById('submit-quiz').addEventListener('click', function() {
    let score = 0;
    const totalQuestions = 3; 

    // Respuestas correctas
    const answers = {
        'Pregunta1': 'd',
        'Pregunta2': 'a',
        'Pregunta3': 'b'
    };

    // Verificar respuestas
    const selectedAnswers = {
        'Pregunta1': document.querySelector('input[name="Pregunta1"]:checked'),
        'Pregunta2': document.querySelector('input[name="Pregunta2"]:checked'),
        'Pregunta3': document.querySelector('input[name="Pregunta3"]:checked')
    };

   
    for (let question in answers) {
        if (selectedAnswers[question] && selectedAnswers[question].value === answers[question]) {
            score++;
        }
    }


    const result = document.getElementById('result');
    let resultText = `Has obtenido ${score} de ${totalQuestions} respuestas correctas.<br>`;
    
 
    resultText += '<h5>Respuestas correctas:</h5>';
    resultText += '<ul>';
    
    for (let question in answers) {
        resultText += `<li>${question}: ${answers[question]}</li>`;
    }
    
    resultText += '</ul>';
    
    result.innerHTML = resultText;
});
