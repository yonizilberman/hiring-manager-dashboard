import { FC, FormEvent, useState } from "react";
import "./personalCard.css";
import { CANDIDATE_STATUS, Personal } from "../interfaces";
import { Dialog } from "../components";
import { getFullName } from "../utils";
import { PersonalCardSection } from "./PersonalCardSection";
import { handleSubmit } from "./utils";

export const PersonalCard: FC<Personal> = (personal) => {
    const {
        name,
        applicationStatus,
        description,
        login: { uuid },
    } = personal;
    const [isDialog, setIsDialog] = useState(false);
    const [dialogTitle, setDialogTitle] = useState<string>("");
    const [comment, setComment] = useState<string>(description);
    const [formStatus, setFormStatus] =
        useState<CANDIDATE_STATUS>(applicationStatus);

    const handleRejectOrApproveClick = (
        candidateStatus: CANDIDATE_STATUS
    ): void => {
        setIsDialog(true);
        if (candidateStatus === CANDIDATE_STATUS.APPROVE) {
            setDialogTitle(`Approve is candidate`);
            setFormStatus(CANDIDATE_STATUS.APPROVE);
        }
        if (candidateStatus === CANDIDATE_STATUS.REJECT) {
            setDialogTitle(`Reject is candidate`);
            setFormStatus(CANDIDATE_STATUS.REJECT);
        }
    };

    const handaletextChange = (e: FormEvent<HTMLTextAreaElement>) => {
        setComment(e.currentTarget.value);
    };

    return (
        <div className="personalCard">
            <PersonalCardSection
                {...personal}
                description={comment}
                applicationStatus={formStatus}
                handleClick={handleRejectOrApproveClick}
            />
            <Dialog
                open={isDialog}
                handleToggle={setIsDialog}
                title={dialogTitle}
            >
                <p>
                    Do you want to add comment to your decision on{" "}
                    <b>{getFullName(name)}</b>:
                </p>
                <textarea onChange={handaletextChange} value={comment} />
                <button
                    onClick={() =>
                        handleSubmit({ uuid, comment, formStatus, setIsDialog })
                    }
                >
                    submit
                </button>
            </Dialog>
        </div>
    );
};
