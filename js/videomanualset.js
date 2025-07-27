function updateYTManual() {
  const thumbnailInput = document.getElementById("ytThumbInput").files[0];
  const titleInput = document.getElementById("ytTitleInput").value;
  const channelInput = document.getElementById("ytChannelInput").value;
  const viewsInput = document.getElementById("ytViewsInput").value;
  const durationInput = document.getElementById("ytTimeInput").value;

  const thumbnail = document.getElementById("ytThumb");
  const title = document.getElementById("ytTitle");
  const channel = document.getElementById("ytChannelName");
  const views = document.getElementById("ytViews");
  const duration = document.getElementById("ytTimestamp");

  title.textContent = titleInput
  channel.textContent = channelInput
  views.textContent = viewsInput
  duration.textContent = durationInput

  if (thumbnailInput) {
    const reader = new FileReader();
    reader.onload = function (e) {
      thumbnail.src = e.target.result;
    };
    reader.readAsDataURL(thumbnailInput);
  }
}