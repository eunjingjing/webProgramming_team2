// 팀원 상세 정보 토글 기능
document.querySelectorAll('.team-member').forEach(memberSection => {
    const nameHeader = memberSection.querySelector('.member-name');
    const detailsDiv = memberSection.querySelector('.member-details');
    const detailButton = memberSection.querySelector('.detail-button');

    // 이름 클릭 시 토글
    nameHeader.addEventListener('click', () => {
        detailsDiv.classList.toggle('hidden');
    });

    // 버튼 클릭 시 토글
    detailButton.addEventListener('click', () => {
        detailsDiv.classList.toggle('hidden');
    });
});


// 퀴즈 정답 확인 기능
document.querySelectorAll('.submit-quiz').forEach(button => {
    button.addEventListener('click', function() {
        const questionContainer = this.closest('.question');
        const correctAnswer = questionContainer.dataset.answer;
        const inputId = this.dataset.questionId;
        const inputElement = document.getElementById(inputId);
        const feedbackElement = document.getElementById(inputId.replace('-input', '-feedback'));

        let userAnswer;
        if (inputElement.tagName === 'INPUT') {
            userAnswer = inputElement.value.trim();
        } else if (inputElement.tagName === 'SELECT') {
            userAnswer = inputElement.value;
        }

        // 정답 비교
        if (userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            feedbackElement.textContent = '🌟 정답입니다! 축하합니다!';
            feedbackElement.style.color = 'green';
        } else {
            feedbackElement.textContent = `❌ 오답입니다. 정답은 ${correctAnswer}입니다.`;
            feedbackElement.style.color = 'red';
        }
    });
});