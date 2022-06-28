import { FC } from "react";
import { Personal, CANDIDATE_STATUS } from "../interfaces";
import { getFullAddress, getFullName } from "../utils";

interface PersonalInfo extends Personal {
    handleClick(status: CANDIDATE_STATUS): void;
}

export const PersonalCardSection: FC<PersonalInfo> = ({
    picture,
    gender,
    name,
    location,
    email,
    dob,
    phone,
    applicationStatus,
    description,
    handleClick,
}) => {
    return (
        <div>
            <section>
                <button
                    className="right"
                    onClick={() => handleClick(CANDIDATE_STATUS.APPROVE)}
                >
                    Approve
                </button>
                <div className={applicationStatus}>
                    <img src={picture.large} alt="Profile" />
                </div>
                <button
                    className="left"
                    onClick={() => {
                        return handleClick(CANDIDATE_STATUS.REJECT);
                    }}
                >
                    Reject
                </button>
            </section>
            <dl>
                <dt>gender</dt>
                <dd>{gender}</dd>
            </dl>
            <dl>
                <dt>Full name Title</dt>
                <dd>{getFullName(name)}</dd>
            </dl>
            <dl>
                <dt>Address</dt>
                <dd>{getFullAddress(location)}</dd>
            </dl>
            <dl>
                <dt>Email</dt>
                <dd>{`${email}`}</dd>
            </dl>
            <dl>
                <dt>age</dt>
                <dd>{`${dob.age}`}</dd>
            </dl>
            <dl>
                <dt>Phone</dt>
                <dd>{`${phone}`}</dd>
            </dl>
            <dl>
                <dt>Description</dt>
                <dd>{`${description}`}</dd>
            </dl>
        </div>
    );
};
