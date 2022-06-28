import { Info, Personal } from "../interfaces";
import { https } from "../utils";

export const getPersonalInfo = async () => {
    try {
        const result = await https.get<{ results: Personal[], info: Info }>("api/")
        return result.data
    } catch (e) {
        console.error(e)
    }

}