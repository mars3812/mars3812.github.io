let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'arduino-img.png') {
        myImage.setAttribute('src','arduino-2.png');
    } else {
        myImage.setAttribute('src','arduino-img.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please Enter Your Name');
    if (!myName){
        setUserName();
    } else {
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Robotopia , ' + myName ;
}
if (!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName=localStorage.getItem('name');
    myHeading.textContent='RoboTopia , '+storedName;
}
}
myButton.onclick = function() {
    setUserName();
  }
