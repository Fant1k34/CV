import React from 'react';
import styles from "../navigation-bar/open-navigation-bar/open-navigation-bar.module.css";

type props = {
    icon: React.ReactNode;
    content: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const LogoCard = ({ icon, content, ...defaultProps }: props) => {
    return (
        <section className={styles.logoCard} {...defaultProps}>
            <article>
                { icon }
            </article>
            <article className={styles.logoCard__text}>
                { content }
            </article>
        </section>
    );
}