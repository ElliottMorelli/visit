async function loadBuffer(bufferURL) {
    //better to have a try/catch block here, but for simplicity...
    const response = await fetch(bufferURL);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
    return audioBuffer;
  }
  
  
  document.addEventListener("DOMContentLoaded", function(event) {
      playAudio();
  })
  
  async function playAudio(){
      audioCtx = new AudioContext()
      globalGain = audioCtx.createGain();
      globalGain.gain.value = 0.9;
  
      bikeSource = await loadBuffer('./samples/bicyclette.mp3');
      source = audioCtx.createBufferSource();
      source.connect(globalGain).connect(audioCtx.destination);
      source.buffer = bikeSource;
      source.start();
  
  }