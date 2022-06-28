import { useState } from "react";
import { CANDIDATE_STATUS, Personal } from "../interfaces";
import { getPersonalInfo } from "../services";
import { findCandidate, getCandidates, setCandidate } from "../utils";

export const usePersonalData = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<Personal[]>(() => {
        const candidates = getCandidates()
        return candidates
    });

    const fetchAPI = async () => {
        setLoading(true)
        let response = await getPersonalInfo()

        const tmpData: Personal[] = [];
        (response!.results ?? []).forEach((candidate: Personal) => {
            if (!findCandidate(data, candidate.login.uuid)) {
                const candidateTmp = { ...candidate, applicationStatus: CANDIDATE_STATUS.PANDDING, description: '' }
                setCandidate(candidateTmp);
                tmpData.push(candidateTmp);
            }
        });

        if (tmpData.length >= 1) {
            setData([...tmpData, ...data]);
        }
        setLoading(false)
    }

    return {
        data, loading, fetchAPI
    }
}