import React from 'react';
import Aux from '../../hoc/Wrapper'
import classes from './Layout.module.css'
import './styles.css'

const layout = (props) => (
    <Aux>
        <div className="main-wrapper">toolbar, SideDrawer, Backdrip</div>
        <main className={classes.Content} >
            {props.children}
        </main>
    </Aux>
);

export default layout;