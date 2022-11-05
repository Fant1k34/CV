import React, { useState } from 'react';
import { NavigationBarClosed } from "./navigation-bar-closed/navigation-bar-closed";
import { NavigationBarOpen } from "./navigation-bar-open/navigation-bar-open";

type props = {
    onOpen?: () => void;
};

export const SidePanel = ({ onOpen }: props) => {
    let [open, setOpen] = useState(true);

    let handleClick = () => {
        setOpen(!open);
        console.log('Inverte');
    };

    if (open) {
        return <NavigationBarOpen platform="mobile"/>;
    }
    return <NavigationBarClosed platform="mobile"/>;
};

export default SidePanel;
