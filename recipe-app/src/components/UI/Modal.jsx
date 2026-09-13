import PropTypes from "prop-types";
import styles from "./UI.module.css";
import { useEffect } from "react";

const Modal = ({title, onClose, children}) => {

    // close on escape key, clean up when unmounting
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.key === "Escape") onClose();
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modalBody} onClick={e => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose} aria-label="Close">X</button>
                {title && <h3>{title}</h3>}
                {children}
            </div>
        </div>
    );
}

Modal.propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

Modal.defaultProps = {title: ""}

export default Modal;