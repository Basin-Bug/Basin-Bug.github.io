let myImage = document.querySelector('img');

//画像の切り替え
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/basin.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}


//これは新しいボタンと見出しへの参照を変数に格納します。
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//名前入力
function setUserName() {
  let myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla はすばらしいよ、' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla はすばらしいよ、' + storedName;
}

//名前変更
myButton.onclick = function() {
  setUserName();
}

//名前が空白かをチェック
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}
