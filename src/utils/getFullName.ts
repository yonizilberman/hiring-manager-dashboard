import { Name } from "../interfaces"

export const getFullName = ({ title, first, last }: Name): string => `${title} ${first} ${last}` 