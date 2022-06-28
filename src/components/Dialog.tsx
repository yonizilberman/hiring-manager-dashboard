import { FC, ReactNode } from "react";
import "./Dialog.css";

interface DialogProps {
    children: ReactNode;
    title?: string;
    open: boolean;
    handleToggle(value: boolean): void;
}

export const Dialog: FC<DialogProps> = ({
    title,
    open,
    handleToggle,
    children,
}) => {
    return (
        <div
            className="dialogBackground"
            style={open ? {} : { display: "none" }}
        >
            <div className="dialogBody">
                <div className="dialogHeader">
                    <span>{title ?? "Title"}</span>
                    <span className="close" onClick={() => handleToggle(false)}>
                        X
                    </span>
                </div>
                <section>{children}</section>
            </div>
        </div>
    );
};
