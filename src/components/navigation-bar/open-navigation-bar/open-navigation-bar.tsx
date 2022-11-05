import React from "react";
import styles from './open-navigation-bar.module.css';
import { IconMain } from "../icons/icon-main";
// @ts-ignore
import photo from '../../../resources/pictures/logoCVCropped5.jpg';
import { cn } from "../../../api/common";
import {LogoCard} from "../../logo-card/logo-card";
import {IconExperience} from "../icons/icon-experience";

type props = {
    platform: string;
    children: React.ReactNode;
};

export const OpenNavigationBar = ({ platform, children }: props) => {
    let menuElementWrapper = (text: string) => <span className={styles.menuElement__text}>{ text }</span>;

    return (
        <section className={styles.main}>
            <nav className={cn(styles.sidePanel, styles.main__sidePanel)}>
                <header className={styles.sidePanel__logoHeader}>
                    <img src={photo} className={styles.sidePanel__logoIcon}/>
                    <div className={cn(styles.sidePanel__contactInfo, styles.contactInfo)}>
                        <LogoCard icon={<IconMain/>} content="TG:"/>
                        <LogoCard content="LinkedIN:"/>
                    </div>
                </header>
                <LogoCard className={cn(styles.sidePanel__menuElement, styles.menuElement)}
                          icon={<IconMain/>}
                          content={menuElementWrapper("Главная")}/>
                <LogoCard className={cn(styles.sidePanel__menuElement, styles.menuElement)}
                          icon={<IconExperience/>}
                          content={menuElementWrapper("Опыт работы")}/>
                <LogoCard className={cn(styles.sidePanel__menuElement, styles.menuElement)}
                          icon={<IconMain/>}
                          content={menuElementWrapper("Проекты")}/>
            </nav>
            <main>
                { children }
            </main>
        </section>
    );
};