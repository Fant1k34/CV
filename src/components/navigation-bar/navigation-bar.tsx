import React from 'react';
import styles from './index.module.css';
import { ClosedNavigationBar } from "./closed-navigation-bar/closed-navigation-bar";
import { OpenNavigationBar } from "./open-navigation-bar/open-navigation-bar";

type props = {
    open: boolean;
    onOpen: () => void;
};

export const NavigationBar = ({ open, onOpen }: props) => {
    let main_element = <span className={styles.headerTitle}>Дукин Никита</span>;

    if (open) {
        return <OpenNavigationBar platform="mobile" children={main_element}/>;
    }
    return <ClosedNavigationBar platform="mobile"/>;
};
