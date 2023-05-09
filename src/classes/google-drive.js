import Storage, {Storages} from "./storage";

export default class GoogleDrive {
    static retry = 0;

    static async refreshToken() {
        return new Promise((resolve, reject) => {
            chrome.identity.getAuthToken({interactive: true}, (token) => {
                if (token) {
                    resolve(token);
                } else {
                    reject("Google Drive authentication failed.");
                }
            });
        });
    }

    static async getAccessToken() {
        const driveStore = await Storage.get(Storages.DRIVE);

        if (driveStore?.token) {
            return driveStore.token;
        }

        const token = await GoogleDrive.refreshToken();

        await Storage.set(Storages.DRIVE, {token});

        return token;

    }

    static async request(options) {
        console.log(options)
        const token = await GoogleDrive.getAccessToken();

        options.headers.append("Authorization", `Bearer ${token}`);

        try {
            return await fetch(options).then(response => response.text());
        } catch (error) {
            if (GoogleDrive.retry > 5) {
                throw error;
            } else {
                await GoogleDrive.refreshToken();
                return await GoogleDrive.request(options);
            }
        }
    }

    static async getFileList() {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        const data = await GoogleDrive.request(requestOptions);

        console.log(data);
    }

    static async update() {
    }

    static async upload() {
    }

    static async download() {
    }
}