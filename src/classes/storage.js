import Crypto from "crypto-js";

const STORAGE_KEY = "U2FsdGVkX18cwq3S7v2bT+E9T9XkTfH4D4Gp+gWZFok=";

export const Storages = {
    DATA: "crypto-store-cgpt-data",
    COOKIE: "crypto-store-cgpt-cookie",
    DRIVE: "crypto-store-cgpt-drive"
};

export default class Storage {
    static async set(store, data) {
        await chrome.storage.local.set({
            [store]: Crypto.AES.encrypt(JSON.stringify(data), STORAGE_KEY)
        });
    }

    static async get(store) {
        const result = await chrome.storage.local.get([store]);

        if (!result[store]) {
            return;
        }

        return JSON.parse(Crypto.AES.decrypt(result[store], STORAGE_KEY).toString(Crypto.enc.Utf8));
    }
}
