function changeToThumb () {
  const modeSelector = document.getElementById("currentMode");
  const byLinkArea = document.getElementById("byLink");
  const byManualArea = document.getElementById("byManual");
  const channelInputsArea = document.getElementById("channelInputs");
  
  const thumbArea = document.getElementById("ytFrame");
  const channelArea = document.getElementById("ytChannelFrame");
  
  
  modeSelector.style.marginLeft = "0px";
  byLinkArea.classList.remove("hidden");
  byManualArea.classList.remove("hidden");
  channelInputsArea.classList.add("hidden");
  thumbArea.classList.remove("hidden");
  channelArea.classList.add("hidden");
  
  console.log("thumb");
}

function changeToChannel () {
  const modeSelector = document.getElementById("currentMode");
  const byLinkArea = document.getElementById("byLink");
  const byManualArea = document.getElementById("byManual");
  const channelInputsArea = document.getElementById("channelInputs");
  
  const thumbArea = document.getElementById("ytFrame");
  const channelArea = document.getElementById("ytChannelFrame");
  
  modeSelector.style.marginLeft = "160px";
  byLinkArea.classList.add("hidden");
  byManualArea.classList.add("hidden");
  channelInputsArea.classList.remove("hidden");
  thumbArea.classList.add("hidden");
  channelArea.classList.remove("hidden");
  
  console.log("channel");
}