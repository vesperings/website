# iphone message template ♡

an interactive, fully responsive iphone-style template with a fake imessage
interface. visitors see a phone home screen with a dock of app icons — tapping
one opens a full-screen "chat" that slides up, just like an actual phone.

## files

- `index.html` — the page structure and all your text content
- `style.css` — all the styling, organized into labelled sections
- `script.js` — the clock, open/close animation, and background music logic
- `images/` — placeholder icon, avatar, and wallpaper images (replace with your own!)

## quick start

1. unzip everything into one folder, keeping the folder structure intact.
2. open `index.html` in a browser to preview it.
3. replace the placeholder images in `images/` with your own (same file names,
   or update the paths in `index.html` / `style.css` to match new names).
4. edit the chat text directly inside the `.message-bubble` divs in `index.html`.
5. upload the whole folder to your host (neocities, github pages, etc).

## customizing

every section of `index.html` and `style.css` has a comment explaining what it
does, and lines marked `📝 EDIT ME` are the ones you'll most likely want to
change first: avatar/icon images, wallpaper, chat names, and bubble text.

**to add more chats:** duplicate one whole `<div class="app-screen" id="...">`
block in `index.html`, give it a new unique `id`, then add a matching dock icon
further down with `onclick="openApp('your-new-id')"`.

**to remove the background music:** delete the `<audio>` tag near the bottom
of `index.html` and the matching block at the bottom of `script.js`.

## browser support

works in all modern browsers (chrome, firefox, safari, edge). fully responsive
— the phone automatically scales to fit any screen size, from desktop monitors
to small phones.

## license

you may use and modify this template for personal or client project pages.
please don't resell or redistribute the template files themselves as-is. ♡
