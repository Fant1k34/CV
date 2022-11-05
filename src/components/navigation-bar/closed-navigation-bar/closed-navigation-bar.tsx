import React from "react";
import { IconMain } from "../icons/icon-main";
import styles from './closed-navigation-bar.module.css';

type props = {
    platform: string;
};

export const ClosedNavigationBar = ({ platform }: props) => {
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