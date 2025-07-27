document.getElementById("ytDownloadBtn").addEventListener("click", () => {
  const frame = document.getElementById("ytFrame");

  html2canvas(frame, {
    useCORS: true, // allows downloading images from external sources
    allowTaint: false,
    backgroundColor: null // if you want to preserve transparent backgrounds
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "youtube_frame.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }).catch(err => {
    console.error("Failed to generate image:", err);
  });
});