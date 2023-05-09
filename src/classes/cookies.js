export default class Cookies {
    static async get() {
        return new Promise((resolve, reject) => {
            chrome.cookies.getAll({},
                (result, error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    }
}