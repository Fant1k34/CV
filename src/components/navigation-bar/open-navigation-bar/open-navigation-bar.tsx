import React from "react";
import styles from './open-navigation-bar.module.css';
import { IconMain } from "../icons/icon-main";
// @ts-ignore
import photo from '../../../resources/pictures/logoCVCropped5.jpg';
import { cn } from "../../../api/common";

type props = {
    platform: string;
    children: React.ReactNode;
};

export const OpenNavigationBar = ({ platform, children }: props) => {
    return (
        <main className={styles.main}>
            <nav className={cn(styles.sidePanel, styles.main__sidePanel)}>
                <header className={styles.sidePanel__logoHeader}>
                    <img src={photo} className={styles.sidePanel__logoIcon}/>
                    <div className={cn(styles.sidePanel__contactInfo, styles.contactInfo)}>
                        <section className={styles.contactInfo__element}>
                            <article className={styles.contactInto__logo}>
                            </article>
                            <article className={styles.contactInfo__network}>
                                TG:
                            </article>
                        </section>
                        <section className={styles.contactInfo__element}>
                            <article className={styles.contactInto__logo}>
                            </article>
                            <article className={styles.contactInfo__network}>
                                LinkedIN:
                            </article>
                        </section>
                    </div>
                </header>
                <section className={cn(styles.sidePanel__menuElement, styles.menuElement)}>
                    <IconMain/>
                    <span className={styles.menuElement__text}>
                        Главная
                    </span>
                </section>
                <section className={cn(styles.sidePanel__menuElement, styles.menuElement)}>
                    <IconMain/>
                    <span className={styles.menuElement__text}>
                        Опыт работы
                    </span>
                </section>
                <section className={cn(styles.sidePanel__menuElement, styles.menuElement)}>
                    <IconMain/>
                    <span className={styles.menuElement__text}>
                        Проекты
                    </span>
                </section>
            </nav>
            <main>
                { children }
            </main>
        </main>
    );
};