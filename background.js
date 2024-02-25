chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed!");
});

// Example of running a task every minute
setInterval(() => {
  console.log("Running background task...");
}, 60000);

command = "Ctrl+C";
chrome.commands.onCommand.addListener(async function (command) {
  console.log("Command: ${command}");

  // Send a message to the content script
});
