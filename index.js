var text_count = 0;
var speed = 30;
var isRunning = true;
var chat = [1]; /* Wir setzen den Chatverlauf als Zahlenfolge */
var text1 = 'Ich weiß was du hier willst ... nämlich mehr über Samuel Schmidt erfahren, stimmts?';
var answer11 = 'Genau !';
var answer12 = 'Das war ja jetzt auch nicht wirklich schwer.';

var text11 = 'Freut mich! Die Faszination, wie Technologien Unternehmen und ganze Gesellschaften verändern können, führten zur Wirtschaftsinformatik. Als Selbstarter setzt er seine eigenen Ideen um. Andere Interessen sind Politik und Biologie, außerdem spielt er gerne Tennis oder geht Inlineskaten.';
var answer111 = 'Schön und gut. Aber was soll diese Website?';
var answer112 = 'Wirtschaftsinformatik? Puhh';

var text1121 = 'Ich finde neue Technologien einfach faszinierend. Außerdem macht es mir Spaß Prozesse zu optimieren.'
var answer11211 = ' Zum Beispiel? '

var text11211 = 'Ich beschäftige mich viel damit, wie ich meinen Lernprozess optimieren kann. Karteikarten zum Beispiel sind sehr effektiv, allerdings bleiben Zusammenhänge auf der Strecke. Mein Programmm, baut auf der Idee auf, alles Wissen in Konzepte zu unterteilen. Ein Konzept kann ein Hund genauso wie Test Driven Development sein. Mit meinem Programmm kann ich diese Konzepte wie mit Karteikarten lernen und gleichzeitig Verbindungen darstellen. So kann man langfristig eine Wissensbasis aufbauen. ';
var answer1121 = 'Cool. Lass uns in Persona einmal darüber sprechen. ';

var text111 = 'Nun, ich gehe davon aus, dass du meinen Lebenslauf schon kennst. Warum soll ich also nochmal das Bekannte aufzählen. Vermutlich bist du hier, um zu sehen, ob ich 1. technisches etwas kann und 2. wie ich menschlich so bin. Dafür bietet sich dieser "Chatbot" an.';
var answer1111 = 'Menschlich? Naja ob man das hier schon feststellen kann...';
var answer1112 = 'Was sind denn deine technischen Fähigkeiten?';

var text1112 = 'Programmiersprachen sind für mich ein Werkzeug um meine Ideen umzusetzen. Für kleinere Skripte und mein "persönliches Wikipedia" habe ich mir etwa Python beigebracht.';
var answer11122 = 'Was ist dieses "Persönliche Wikipedia"? ';

var text11122 = 'Ich beschäftige mich viel damit, wie ich meinen Lernprozess optimieren kann. Karteikarten zum Beispiel sind sehr effektiv, allerdings bleiben Zusammenhänge auf der Strecke. Mein Programmm, baut auf der Idee auf, alles Wissen in Konzepte zu unterteilen. Ein Konzept kann ein Hund genauso wie Test Driven Development sein. Mit meinem Programmm kann ich diese Konzepte wie mit Karteikarten lernen und gleichzeitig Verbindungen darstellen. So kann man langfristig eine Wissensbasis aufbauen. ';
var answer111221 = 'Cool. Lass uns doch einmal persönlich darüber sprechen. ';

var text1111 = 'Wahrscheinlich nicht. Am besten wir lernen uns im persönlichen Gespräch einmal kennen ;)';

var text12 = 'Stimmt. Viele Antwortmöglichkeiten hattest du ja auch nicht ';
var answer121 = 'Haha...';

var text1212 = 'Vieleicht wäre es besser, wenn wir uns persönlich kennenlernen.';


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