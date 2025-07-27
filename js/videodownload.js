let currentMode = "thumb";

document.getElementById("modeThumb").addEventListener("click", () => {
  currentMode = "thumb";
  console.log("changed to thumb");
});

document.getElementById("modeChannel").addEventListener("click", () => {
  currentMode = "channel";
  console.log("changed to channel");
});

document.getElementById("ytDownloadBtn").addEventListener("click", () => {
  const videoFrame = document.getElementById("ytFrame");
  const channelFrame = document.getElementById("ytChannelFrame");

  if (currentMode == "thumb") {
    html2canvas(videoFrame, {
      useCORS: true,
      allowTaint: false,
      backgroundColor: null
    }).then(canvas => {
      const link = document.createElement("a");
      link.download = "youtube_frame.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }).catch(err => {
      console.error("Failed to generate image:", err);
    });
  } else if (currentMode == "channel") {
    html2canvas(channelFrame, {
      useCORS: true,
      allowTaint: false,
      backgroundColor: null
    }).then(canvas => {
      const link = document.createElement("a");
      link.download = "youtube_frame.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }).catch(err => {
      console.error("Failed to generate image:", err);
    });
  } else {
    console.error("ok something failed...", err);
  }

});