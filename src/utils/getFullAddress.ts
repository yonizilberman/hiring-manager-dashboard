import { Location } from "../interfaces"

export const getFullAddress = ({ street: { number, name }, city, state, country, postcode }: Location): string =>
    `${number} ${name}, ${city} ${state} ${country} ${postcode}`