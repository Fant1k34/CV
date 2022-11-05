import React from "react";
import styles from './side-panel.module.css';
// @ts-ignore
import photo from '../../resources/pictures/logoCVCropped5.jpg';
import { cn } from "../../api/common";
import { LogoCard } from "../logo-card/logo-card";
import { IconMain } from "./icons/icon-main";
import { IconExperience } from "./icons/icon-experience";
import { IconProjects } from "./icons/icon-projects";

type props = {
    onClose?: () => void;
    platform: string;
};

export const SidePanel = ({ onClose, platform }: props) => {
    let menuElementWrapper = (text: string) => <span className={styles.menuElement__text}>{ text }</span>;
    let contactInfoElementWrapper = (text: string) => <span className={styles.contactInfo__network}>{ text }</span>;

    return (
        <nav className={cn(styles.sidePanel, styles.main__sidePanel)}>
            <header className={styles.sidePanel__logoHeader}>
                <img src={photo} className={styles.sidePanel__logoIcon}/>
                <div className={cn(styles.sidePanel__contactInfo, styles.contactInfo)}>
                    <LogoCard className={styles.contactInfo__card}
                              icon={<IconMain/>}
                              content={contactInfoElementWrapper("TG")}/>
                    <LogoCard className={styles.contactInfo__card}
                              content={contactInfoElementWrapper("LinkedIN")}/>
                </div>
            </header>
            <LogoCard className={cn(styles.sidePanel__menuElement, styles.menuElement)}
                      icon={<IconMain/>}
                      content={menuElementWrapper("Главная")}/>
            <LogoCard className={cn(styles.sidePanel__menuElement, styles.menuElement)}
                      icon={<IconExperience/>}
                      content={menuElementWrapper("Опыт работы")}/>
            <LogoCard className={cn(styles.sidePanel__menuElement, styles.menuElement)}
                      icon={<IconProjects/>}
                      content={menuElementWrapper("Проекты")}/>
        </nav>
    );
};