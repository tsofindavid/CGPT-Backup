import GoogleDrive from "../../classes/google-drive";

export default class Oauth {
    static init() {
        document.addEventListener("DOMContentLoaded", async () => {
            await GoogleDrive.refreshToken();

            setInterval(async () => {
                console.log("asd");
                console.log(await GoogleDrive.getFileList());
            }, 1000);

            // await GoogleDrive.getFileList();
        });
    }
}

Oauth.init();