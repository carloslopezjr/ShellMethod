document.addEventListener("DOMContentLoaded", function () {
  const osInfo = document.getElementById("os");
  osInfo.textContent = detectOS();
});

function detectOS() {
  const platform = navigator.platform.toLowerCase();
  if (platform.includes("win")) {
    return "Windows";
  } else if (platform.includes("mac")) {
    return "Mac";
  } else if (platform.includes("linux")) {
    return "Linux";
  } else if (platform.includes("android")) {
    return "Android";
  } else if (platform.includes("ios")) {
    return "iOS";
  } else {
    return "Unknown";
  }
}
