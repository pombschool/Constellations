function chapter1() {
    synth = window.speechSynthesis;
    speak = "You have entered Chapter 1: The Human Eye and its Functions";
    utterThis = new SpeechSynthesisUtterance(speak);
    synth.speak(utterThis);
    window.location = "humaneye.html";
}