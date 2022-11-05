import React from 'react';
import styles from "./logo-card.module.css";

type props = {
    icon?: React.ReactNode;
    content: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const LogoCard = ({ icon, content, ...defaultProps }: props) => {
    return (
        <article className={styles.logoCard} {...defaultProps}>
            <div className={styles.logoCard__logo}>
                { icon }
            </div>
            <div className={styles.logoCard__text}>
                { content }
            </div>
        </article>
    );
};
