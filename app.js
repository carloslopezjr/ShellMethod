document.addEventListener("keydown", async function (event) {
  // Check if Ctrl key and C key are pressed
  if (event.ctrlKey && event.key === "c") {
    // Ctrl+C is pressed
    const data = await navigator.clipboard.readText();
    console.log("Ctrl+C was pressed: " + data);
    chrome.runtime.sendMessage({ data: data }),
      function (response) {
        console.log("Data Res: response");
      };
    // Your code to handle Ctrl+C event here

    // Prevent default behavior (copying to clipboard)
    // event.preventDefault();
  }
});
