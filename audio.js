
var audioCtx;

var bikeSource;

var churchIR;

var source;

async function loadBuffer(bufferURL) {
  //better to have a try/catch block here, but for simplicity...
  const response = await fetch(bufferURL);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  return audioBuffer;
}


document.addEventListener("DOMContentLoaded", function(event) {
    playFarAwayAudio();
})

async function playFarAwayAudio(){
    audioCtx = new AudioContext()

    var biquadFilter = audioCtx.createBiquadFilter();

    var lowpass = audioCtx.createBiquadFilter();

    lowpass.type = "lowpass";
    lowpass.frequency.setValueAtTime(900, audioCtx.currentTime);

    biquadFilter.type = "highshelf";
    biquadFilter.frequency.setValueAtTime(50, audioCtx.currentTime);
    biquadFilter.gain.setValueAtTime(50, audioCtx.currentTime);

    globalGain = audioCtx.createGain();
    globalGain.gain.value = 0.02;

    bikeSource = await loadBuffer('./samples/bicyclette.mp3');
    source = audioCtx.createBufferSource();
    source.connect(globalGain).connect(audioCtx.destination);
    source.buffer = bikeSource;
    source.start();

    
    churchIR = await loadBuffer('./samples/big-church.mp3');
    reverb = audioCtx.createConvolver();
    reverb.buffer = churchIR;
    
    dry = audioCtx.createGain();
    wet = audioCtx.createGain();
    dry.gain.value = 0.1;
    wet.gain.value = 0.9;

    

    var compressor = audioCtx.createDynamicsCompressor();
    compressor.threshold.setValueAtTime(-50, audioCtx.currentTime);
    compressor.knee.setValueAtTime(40, audioCtx.currentTime);
    compressor.ratio.setValueAtTime(12, audioCtx.currentTime);

    source.connect(dry).connect(lowpass).connect(globalGain).connect(audioCtx.destination);
    source.connect(biquadFilter);
    //lowpass.connect(biquadFilter);
    biquadFilter.connect(reverb).connect(wet).connect(globalGain).connect(audioCtx.destination); 

}

