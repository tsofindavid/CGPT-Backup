import Cookies from "./classes/cookies";
import Storage, {Storages} from "./classes/storage";

async function background() {
    setInterval(async () => {
        const data = await Cookies.get();

        const dataForStore = data.reduce((result, {name, value}) => ({...result, [name]: value}), {});

        await Storage.set(Storages.COOKIE, dataForStore);

        console.log("____Cookies updated by interval!____");
    }, 5000);
}

background();