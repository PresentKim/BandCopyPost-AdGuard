// ==UserScript==
// @name Band CopyPost by AdGuard
// @namespace AdGuard
// @description Show hidden "Copy post to other band" option in BAND
// @description:ko BAND에서 숨겨진 "다른 밴드에 올리기" 옵션을 표시합니다
// @version 0.0.6-DEV
// @license LGPL-3.0; https://github.com/PresentKim/BandCopyPost-AdGuard/blob/master/LICENSE
// @downloadURL https://github.com/PresentKim/BandCopyPost-AdGuard/blob/master/bandCopyPost.user.js?raw=true
// @updateURL https://github.com/PresentKim/BandCopyPost-AdGuard/blob/master/bandCopyPost.meta.js?raw=true
// @supportURL https://github.com/PresentKim/BandCopyPost-AdGuard/issues
// @homepageURL https://github.com/PresentKim/BandCopyPost-AdGuard
// @match http://band.us/*
// @match https://band.us/*
// @run-at document-start
// ==/UserScript==
console.log("[Band CopyPost] Init Band CopyPost by AdGuard v0.0.5-DEV");

window.addEventListener("load", function () {
    console.log("[Band CopyPost] Run Band CopyPost");
    document.body.addEventListener("click", function (event) {
        var target = event.path[0];
        if (target.classList.value === "postSet _btnPostMore") {
            var options = target.nextSibling.firstChild.children;
            console.debug(options);
            //TODO: Fix a problem that was run before options were loaded
            if (options.length > 0) {
                var exists = false;
                for (var i = 0; i < options.length; i++) {
                    console.debug(options[i].firstChild);
                    if (options[i].firstChild.dataset.menueventname === "postMoreAction:copyPost") {
                        exists = true;
                        console.debug("[Band CopyPost] Already exists copyPost option");
                        break;
                    }
                }
                if (!exists) {
                    console.debug("[Band CopyPost] Not exists copyPost option");
                }
            }
        }
    }, true);
});
