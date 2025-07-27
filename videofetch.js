const apiKey = "AIzaSyBENmxxOHjkvUYUaGsUR8NO1m64aB52HKQ"; // Replace with your actual YouTube Data API v3 key

function getVideoId(url) {
  const regExp = /(?:youtube\.com.*(?:\/|v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

function formatDuration(isoDuration) {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const [, h = 0, m = 0, s = 0] = isoDuration.match(regex).map(v => v ? parseInt(v) : 0);
  return [h, m, s]
    .filter((unit, i, arr) => unit > 0 || i > 0)
    .map(unit => String(unit).padStart(2, '0'))
    .join(":");
}

async function updateYTFrame() {
  const url = document.getElementById("youtubeUrl").value;
  const videoId = getVideoId(url);

  if (!videoId) {
    alert("Invalid YouTube URL");
    return;
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${apiKey}`
    );
    const data = await res.json();

    if (!data.items || data.items.length === 0) {
      alert("Video not found.");
      return;
    }

    const video = data.items[0];

    // Extract data
    const thumbnail = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
    const title = video.snippet.title;
    const channel = video.snippet.channelTitle;
    const views = parseInt(video.statistics.viewCount).toLocaleString() + " Views";
    const duration = formatDuration(video.contentDetails.duration);

    // Select target container
    const ytFrame = document.querySelector(".ytFrame");

    if (!ytFrame) {
      console.error("ytFrame not found");
      return;
    }

    // Fill in elements
    ytFrame.querySelector(".ytThumb").src = thumbnail;
    ytFrame.querySelector(".ytTimestamp").textContent = duration;
    ytFrame.querySelector(".ytTitle").textContent = title;
    ytFrame.querySelector(".ytChannelName").textContent = channel;
    ytFrame.querySelector(".ytViews").textContent = views;

  } catch (err) {
    console.error("Error fetching YouTube data:", err);
    alert("Something went wrong.");
  }
}