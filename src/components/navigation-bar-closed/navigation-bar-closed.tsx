import React from "react";
import { IconMain } from "../side-panel/icons/icon-main";
import styles from './navigation-bar-closed.module.css';

type props = {
    platform: string;
};

export const NavigationBarClosed = ({ platform }: props) => {
    return (
        <div className={styles.header}>
            <div>
                <IconMain/>
            </div>
            <div className={styles.headerTitle}>
                Дукин Никита
            </div>
        </div>
    );
}