
// DarkMode:
function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "#fff";
    hideD();
    show();
}
function lightMode() {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "black";
    hideL();
}

const hideDark = document.querySelector(".dark");
const hideLight = document.querySelector(".light");

function hideD() {
    hideDark.classList.add("hide");
    hideLight.classList.remove("hide");
}
function hideL() {
    hideLight.classList.add("hide");
    hideDark.classList.remove("hide");
}

function show() {
    hideLight.classList.add("show");
}


// Sign in:
const signIn = document.querySelector(".sign-in-card");

function showSignIn() {
    signIn.classList.add("showSignIn");
    showOverlay();
}
function hideSignIn() {
    signIn.classList.remove("showSignIn");
    hideOverlay();
}


// Share:
const share = document.querySelector(".share");

function showShare() {
    share.classList.add("showShare");
    showOverlay();
}
function hideShare() {
    share.classList.remove("showShare");
    hideOverlay();
}


// Download:
const download = document.querySelector(".download-card");

function showDownload() {
    download.classList.add("show_download");
    showOverlay();
}
function hideDownload() {
    download.classList.remove("show_download");
    hideOverlay();
}


// SideBar:
const sideBar = document.querySelector(".sidebar");

function showSidebar() {
    sideBar.classList.add('open');
    showOverlay();
}
function hideSidebar() {
    sideBar.classList.remove('open');
    hideOverlay();
}



// Overlay:
const overlay = document.querySelector(".overlay");

function showOverlay() {
    overlay.classList.add("show");
}
function hideOverlay() {
    overlay.classList.remove("show");
}

function closeAllPopup() {
    hideSignIn();
    hideShare();
    hideSidebar();
    hideDownload()
}





