import React, { useState } from 'react';
import { NavigationBar } from "../components/navigation-bar/navigation-bar";

export const Header = () => {
    let [open, setOpen] = useState(true);

    let handleClick = () => {
        setOpen(!open);
        console.log('Inverte');
    };

    return (
        <NavigationBar open={ open } onOpen={ handleClick }/>
    );
}