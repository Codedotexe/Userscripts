// ==UserScript==
// @name          Redirect to old Reddit
// @description   Redirect to old Reddit site if the user is not logged in
// @match         *://www.reddit.com/*
// @match         *://old.reddit.com/*
// @author        Codedotexe
// @grant         none
// @run-at        document-idle
// @icon          https://www.google.com/s2/favicons?domain=reddit.com
// @version       1.3
// @downloadURL   https://raw.githubusercontent.com/Codedotexe/Userscripts/main/RedirectToOldReddit
// @updateURL     https://raw.githubusercontent.com/Codedotexe/Userscripts/main/RedirectToOldReddit
// ==/UserScript==

(function() {
    const isLoggedIn = !(document.querySelector(".user") == null || document.querySelector(".user a").classList.contains("login-required"));
    const curHostname = window.location.hostname;
    const curPathname = window.location.pathname;

	console.log("User is logged in", isLoggedIn);

    // If on new reddit, not logged and not on gallery page (only supported on new reddit) go back to old reddit
    if(curHostname == "www.reddit.com" && !isLoggedIn && !curPathname.includes("/gallery/")) {
        window.location.hostname = curHostname.replace("www","old");
		return;
    }
	if(curHostname == "old.reddit.com" && isLoggedIn) { // If on old reddit and logged in go back to new reddit
        window.location.hostname = curHostname.replace("old","www");
		return;
    }
})();
