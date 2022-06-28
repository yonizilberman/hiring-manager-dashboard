import { SetStateAction } from "react";

import { CANDIDATE_STATUS } from "../../interfaces";
import { findCandidate, getCandidates, setCandidate } from "../../utils";

interface HandleSubmit {
    uuid: string,
    comment: string,
    formStatus: CANDIDATE_STATUS,
    setIsDialog(value: SetStateAction<boolean>): void
}

export const handleSubmit = ({ uuid, comment, formStatus, setIsDialog }: HandleSubmit): void => {
    const candidatesList = getCandidates();
    const candidate = findCandidate(candidatesList, uuid)!;

    setCandidate({
        ...candidate,
        description: comment,
        applicationStatus: formStatus,
    });
    setIsDialog(false);
};
