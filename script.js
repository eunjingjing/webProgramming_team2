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
        // INPUT 또는 SELECT 요소 처리
        if (inputElement.tagName === 'INPUT' || inputElement.tagName === 'SELECT') {
            userAnswer = inputElement.value.trim();
        } 
        // Radio Button 그룹 처리 (4번 문제)
        else if (inputElement.id === 'q4-input') {
            // q4-input은 div이므로, 그 안의 선택된 radio 버튼을 찾습니다.
            const selectedRadio = inputElement.querySelector('input[name="team_num"]:checked');
            userAnswer = selectedRadio ? selectedRadio.value : ''; // 선택된 값이 없으면 빈 문자열
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


//색상 버튼 클릭 시 클릭된 버튼에 selected 유지
document.querySelectorAll('.color-select').forEach(btn => {
    btn.addEventListener('click', () => {
        // 다른 선택 해제
        document.querySelectorAll('.color-select')
            .forEach(b => b.classList.remove('selected'));

        // 현재 버튼 선택
        btn.classList.add('selected');

        // hidden input에 값 저장
        document.getElementById('q3-input').value = btn.dataset.color;
    });
});

// 랜덤 음식 추천 시스템
const foods = [
    "떡볶이",
    "라면",
    "연어"
];

const recommendButton = document.getElementById('recommend-button');
const recommendedFoodDisplay = document.getElementById('recommended-food');

recommendButton.addEventListener('click', () => {
    // 1. 배열의 길이 (8)를 사용하여 0부터 7까지의 난수를 생성합니다.
    const randomIndex = Math.floor(Math.random() * foods.length); 
    
    // 2. 생성된 인덱스로 배열에서 음식을 선택합니다.
    const selectedFood = foods[randomIndex];
    
    // 3. DOM 요소를 조작하여 결과를 화면에 표시합니다.
    recommendedFoodDisplay.textContent = `오늘의 추천 메뉴는 바로... "${selectedFood}" 입니다! 😋`;
    recommendedFoodDisplay.style.color = '#ff5722'; // 색상 변경으로 강조
});