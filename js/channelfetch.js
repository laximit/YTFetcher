const YT_API = { key: "AIzaSyBENmxxOHjkvUYUaGsUR8NO1m64aB52HKQ", };

  async function fetchChannelFromUrl() {
    const handle = document.getElementById("youtubeChannelUrl").value;
  
    let apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&forHandle=${handle}&key=${YT_API.key}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const channel = data.items[0];
        const snippet = channel.snippet;
        const stats = channel.statistics;

        document.getElementById("ytChannelPic").src = snippet.thumbnails.high.url;
        document.getElementById("ytChannelProfileName").textContent = snippet.title;
        document.getElementById("ytChannelTag").textContent = (snippet.customUrl || "N/A");
        document.getElementById("ytChannelSubs").textContent = formatSubs(stats.subscriberCount);
        document.getElementById("ytChannelVideos").textContent = `${formatNumber(stats.videoCount)} vídeos`;
      } else {
        alert("Channel not found.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Failed to fetch channel info.");
    }
  }

  // Format subscriber count (e.g., "1.2 mi inscritos")
  function formatSubs(count) {
    count = Number(count);
    if (count >= 1e6) return (count / 1e6).toFixed(1) + " mi inscritos";
    if (count >= 1e3) return (count / 1e3).toFixed(1) + " mil inscritos";
    return count + " inscritos";
  }

  function formatNumber(n) {
    return Number(n).toLocaleString("pt-BR");
  }