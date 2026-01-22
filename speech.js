const textDisplay = document.getElementById('overlay');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US';


recognition.interimResults = true;
recognition.continuous = true;

let silenceTimer;

textDisplay.textContent = '';


recognition.onresult = function(event) {

    textDisplay.textContent = 'be quiet';
    textDisplay.classList.add('active');


    
    clearTimeout(silenceTimer);
    silenceTimer = setTimeout(() => {
    textDisplay.classList.remove('active');
  }, 600);
};



recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
};


recognition.start();


