import { Personal } from "../../interfaces"

export const getCandidates = (): Personal[] => {
    const result: Personal[] = []
    const listOfCandidate = Object.keys(localStorage).filter(id => id.startsWith('c-'))

    listOfCandidate.forEach(item => {
        const personal = localStorage.getItem(item)!
        result.push(JSON.parse(personal))
    })

    return result
}