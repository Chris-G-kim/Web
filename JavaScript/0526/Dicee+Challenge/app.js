// 테스트

// alert('테스트'); 연결 확인
// 1. 이미지 태그 선택
// 2. 주소 src 속성에 사진 6의 주소 입력. 

var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');
var h1 = document.querySelector('h1');

var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;
console.log(random1);
console.log(random2);

img1.setAttribute('src', 'images/dice' + random1 + '.png')
img2.setAttribute('src', 'images/dice' + random2 + '.png')


if (random1 == random2) {
    h1.textContent = 'draw';
} else if (random1 > random2) {
    h1.textContent = '🎉Player 1 Wins!';    
} else { 
    h1.textContent = 'Player 2 Wins!🎉';
}
