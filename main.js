let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/arduino-img.png') {
        myImage.setAttribute('src','images/arduino-2.png');
    } else {
        myImage.setAttribute('src','images/arduino-img.png');
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
    myHeading.textContent='Robotopia , '+storedName;
}
}
myButton.onclick = function() {
    setUserName();
  }