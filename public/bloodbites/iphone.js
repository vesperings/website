/* =============================================================
   IPHONE MESSAGE TEMPLATE — SCRIPT
   -------------------------------------------------------------
   this file does three things:
   1. keeps a live real-world clock in the status bar
   2. opens/closes the chat "apps" when dock icons are tapped
   3. starts background music after the visitor's first click
      (browsers block autoplaying sound until the user interacts
      with the page, so we wait for a click first)
============================================================= */

/* -------------------------------------------------------------
   1. LIVE CLOCK
   updates the #real-time element every second with the current
   local time of whoever is viewing the page.
------------------------------------------------------------- */
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12; // convert 24h to 12h format
  document.getElementById("real-time").textContent =
    `${hours}:${minutes} ${ampm}`;
}

setInterval(updateClock, 1000); // refresh every second
updateClock(); // run once immediately so it doesn't show blank for the first second

/* -------------------------------------------------------------
   2. OPENING & CLOSING CHATS
   openApp(appId) is called from the onclick="" attribute on each
   dock icon in index.html, e.g. onclick="openApp('app-chat-a')"
------------------------------------------------------------- */
function openApp(appId) {
  const chatPages = {
    "seiken-habukawa": "/bloodbites/seiken-habukawa.html",

  };

  const chatPage = chatPages[appId];
  if (chatPage) window.location.href = chatPage;
}

function closeActiveApp() {
  const dockContainer = document.getElementById("iphoneDockContainer");
  const statusBar = document.querySelector(".ipad-status-bar");
  const notification = document.querySelector(".win-window");
  const activeAppId = localStorage.getItem("activeApp");

  // bring the dock back
  if (dockContainer) dockContainer.classList.remove("app-is-open");

  // restore the "frosted glass over wallpaper" status bar style
  if (statusBar) {
    statusBar.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    statusBar.style.color = "#ffffff";
    statusBar.style.backdropFilter = "blur(5px)";
  }

  // bring the notification popup back when returning to the homescreen
  if (notification) notification.style.display = "";

  if (!activeAppId) return; // nothing is open, nothing to close

  const app = document.getElementById(activeAppId);
  if (!app) return;

  app.classList.remove("is-open"); // triggers the slide-down transition
  localStorage.removeItem("activeApp");

  setTimeout(() => {
    if (!app.classList.contains("is-open")) {
      app.style.display = "none";
    }
  }, 500);
}

/* -------------------------------------------------------------
   3. BACKGROUND MUSIC
   if you deleted the <audio> tag in index.html, you can also
   delete this whole block safely.
------------------------------------------------------------- */
document.addEventListener(
  "click",
  function () {
    const audio = document.getElementById("bg-music");
    if (audio) {
      audio.play().catch(() => {
        // autoplay can still fail silently in some browsers — that's fine,
        // it just means no music, the rest of the page still works
      });
    }
  },
  { once: true },
); // only needs to run on the very first click
