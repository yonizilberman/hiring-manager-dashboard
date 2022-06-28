import { Personal } from "../interfaces";

export const findCandidate = (data: Personal[], uuid: string): Personal | undefined => data.find(c => c.login.uuid === uuid)