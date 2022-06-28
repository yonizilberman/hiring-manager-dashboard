import { Personal } from "../../interfaces";

export const setCandidate = (candidate: Personal) => {
    localStorage.setItem(`c-${candidate.login.uuid}`, JSON.stringify(candidate))
}