console.log("oauth"),document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("google-drive-connect-btn").addEventListener("click",(()=>{console.log("click"),chrome.identity.getAuthToken({interactive:!0},(function(e){console.log(e)}))}))}));