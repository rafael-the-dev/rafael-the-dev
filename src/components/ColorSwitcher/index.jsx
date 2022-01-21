import { useStyles } from './styles'
import classNames from 'classnames';
import { useDisplay, useTypography } from '../../styles';
import spinnerImage from '../../assets/images/spinner-image.png';
import './styles.scss'

const ColorSwitcher = () => {
    const classes = useStyles();
    const display = useDisplay();

    return (
        <div className={classNames(classes.container)}>
            <button className={classNames(classes.spinner, display.borderNone, display.outlineNone, 
            display.relative, 'spinner')} aria-label="color switcher"></button>
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