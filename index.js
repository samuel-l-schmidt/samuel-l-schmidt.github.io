var text_count = 0;
var speed = 30;
var isRunning = true;
var chat = [1]; 

var text1 = 'I know what you want here ... learn more about Samuel Schmidt, right?';
var answer11 = 'Right!';
var answer12 = 'That was not really hard to guess...';

var text11 = 'Nice! The fascination of how technologies can change companies and whole societies has led me to study business informatics. I implement my ideas and projects on my own initiative, for example this website ;)';
var answer111 = 'Okay. But what is this website about?';
var answer112 = 'Business Informatics? Phew';

var text112 = 'I am really interested in start up culture. I find new technologies simply fascinating.'
var answer1121 = ' For example? '

var text1121 = 'I spend a lot of time on how to optimise my learning process. My programme is based on the idea of dividing all knowledge into concepts. A concept can be a dog as well as Test Driven Development. Then I can learn these concepts as with index cards and at the same time show connections.  ';
var answer11211 = 'Cool. Let us talk about this in person. ';

var text111 = 'Well, I assume you already know my resume. So why should I enumerate the known again. I suppose you are here to see if I can do 1. something technical and 2. see what I am like. That is what this website is for.';
var answer1111 = 'Well and you think it is possible to understand what you are like with this "chatbot"?';
var answer1112 = 'So...what are your technical abilities?';

var text1112 = 'Programming languages are for me a tool to realise my ideas. For example, for smaller scripts and my "personal Wikipedia" I taught myself Python';
var answer11122 = 'What is this "personal Wikipedia"? ';

var text11122 = 'I spend a lot of time on how I can optimise my learning process. My programme is based on the idea of dividing all knowledge into concepts. A concept can be a dog as well as Test Driven Development. Then I can learn these concepts as with index cards and visualize connections. ';
var answer111221 = 'Cool. Let us talk about this in person. ';

var text1111 = 'Probably not. It would be way easier to speak in person... ';

var answer112 = 'Business Informatics? Phew';

var text112 = 'I am really interested in start up culture and find new technologies simply fascinating. I also try to constantly optimise my workflow.'
var answer1121 = ' For example? '

var text1121 = 'I spend a lot of time on how to optimise my learning process. My programme is based on the idea of dividing all knowledge into concepts. A concept can be a dog as well as Test Driven Development. Then I can learn these concepts as with index cards and at the same time show connections.  ';
var answer11211 = 'Cool. Let us talk about this in person. ';

var text111 = 'Well, I assume you already know my resume. So why should I enumerate the known again. I suppose you are here to see if I can do 1. something technical and 2. how I am human. That is what this "chatbot" is for.';
var answer1111 = 'Human? Well, if you can already determine that here...';
var answer1112 = 'What are your technical abilities?';

var text1112 = 'Programming languages are for me a tool to realise my ideas. For example, for smaller scripts and my "personal Wikipedia" I taught myself Python';
var answer11122 = 'What is this "personal Wikipedia"? ';

var text11122 = 'I spend a lot of time on how I can optimise my learning process. My programme is based on the idea of dividing all knowledge into concepts. A concept can be a dog as well as Test Driven Development. Then I can learn these concepts as with index cards and at the same time show connections. ';
var answer111221 = 'Cool. Let us talk about this in person. ';

var text1111 = 'Probably not. After all the best option is to get to know each other in a personal conversation ;)';
var text12 = 'Right. You did not have many options for answers either ';
var answer121 = 'Haha...';

var text121 = 'Perhaps it would be better if we got to know each other personally.';


var TextWriter = function(text_count) {
  console.log("text" + chat.join(''))
  txt = window["text" + chat.join('')]
  if(txt == undefined){
    console.log("Ende")
    isRunning = false;
  }
  else if(text_count < txt.length){
    document.getElementById("text").innerHTML += txt.charAt(text_count);
  }
  else if (text_count == txt.length){
    loadAnswerButtons();
    isRunning = false;
  }
};

var slowTextWriter = function() {
  if(isRunning == true){
    TextWriter(text_count);
    text_count += 1;
    setTimeout(function() {
        slowTextWriter();
    }, speed);
  }
}

function loadAnswerButtons() {
  var firstButton = document.getElementById("firstButton");
  var secondButton = document.getElementById("secondButton");


  // Set Button text according to chat
  firstButton.innerHTML = window["answer" + chat.join("") + "1"]
  secondButton.innerHTML = window["answer" + chat.join("") + "2"]
  console.log(secondButton.innerHTML)


  // Set display stye to hide/show buttons
  var display = getStyle("firstButton","Display");
  if (display == 'none') {
    firstButton.style.display = "inline-block";
    secondButton.style.display = "inline-block";
    addButtonFunctionality();} 
  else {
    firstButton.style.display = "none";
    secondButton.style.display = "none";}
  if(secondButton.innerHTML == "undefined"){
    secondButton.style.display = "none";
  }
  if(firstButton.innerHTML == "undefined"){
    firstButton.style.display = "none";
  }
}

function addButtonFunctionality(){
  const el1 = document.getElementById("firstButton");
  el1.innerHTML
  el1.addEventListener("click", resetUI, false);
  el1.addEventListener("click", setChatPath, false)
  el1.addEventListener("click", slowTextWriter, false);
  el1.bn = 1; //Button Number

  const el2 = document.getElementById("secondButton");
  el2.addEventListener("click", resetUI, false);
  el2.addEventListener("click", setChatPath, false)
  el2.addEventListener("click", slowTextWriter, false);
  el2.bn = 2; //Button Number
}

function setChatPath(buttonNumber){
  chat.push(buttonNumber.currentTarget.bn)
}

function resetUI(){
  document.getElementById("text").innerHTML = '';
  document.getElementById("firstButton").style.display = "none";
  document.getElementById("secondButton").style.display = "none";
  isRunning = true;
  text_count = 0;
}

function getStyle(id, name){
  // To get the actual style from css file)
    var element = document.getElementById(id);
    return element.currentStyle ? element.currentStyle[name] : window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(name) : null;
}
