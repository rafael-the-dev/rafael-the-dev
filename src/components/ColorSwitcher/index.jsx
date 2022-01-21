import { useStyles } from './styles'
import classNames from 'classnames';
import { useDisplay, useTypography } from '../../styles';
import spinnerImage from '../../assets/images/spinner-image.png';
import './styles.scss'
import { useCallback, useState } from 'react';

const ColorSwitcher = () => {
    const classes = useStyles();
    const display = useDisplay();

    const [ open, setOpen ] = useState(false);
    const openHandler = useCallback(() => setOpen(true), []);
    const closeHandler = useCallback(() => setOpen(false), []);

    return (
        <div className={classNames(classes.container)}>
            <div className={classNames(display.relative)}>
            <button onClick={openHandler} className={classNames(classes.spinner, display.borderNone, display.outlineNone, 
                display.relative, 'spinner', {[classes.spinnerHide]: open})} aria-label="color switcher"></button>
                <div className={classNames(classes.buttonsContainer, {[classes.buttonsContainerDisplay]: open})}>
                    <button onClick={closeHandler}  className={classNames(classes.blueTheme, display.borderNone, display.outlineNone)}></button>
                    <button onClick={closeHandler}  className={classNames(classes.lightPinkTheme, display.borderNone, display.outlineNone)}></button>
                </div>
            </div>
        </div>
    );
};

export default ColorSwitcher;


/*
 <img 
                    src={spinnerImage} 
                    alt="" 
                    className={classNames(display.block, display.h100, display.w100, classes.spinnerImage)}
                />
*/