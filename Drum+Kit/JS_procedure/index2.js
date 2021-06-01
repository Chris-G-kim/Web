

// alert ("test"); => 테스트 완료

// 모든 버튼태그들이 선택되어 배열로 저장됨
var btns = document.querySelectorAll('button');

// 모든 버튼에 이벤트 달기
/*
btns[0].addEventListener('click', handleClick)
btns[1].addEventListener('click', handleClick)
*/
// 위 방식 대신 반복문 활용
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', handleClick);
}

function handleClick() {
    //alert('클릭했음');
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    console.log(this.textContent);
}







