import { NavLink } from 'react-router-dom';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    list: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        listStyle: 'none',
        textDecoration: 'none',
        '& li': {
            textAlign: 'center',
                marginRight: '20px',
            fontSize: '20px'
        },
        "& svg": {
                height: '15px'
            }
        
            
    },
});

export const AppNav = () => {
    const classes = useStyles();

    return (
            <ul className={classes.list}>
                <li><NavLink to="/registration"  exact>Create my account</NavLink></li>
                <li><NavLink to="/login" exact><LockOpenIcon/>Sign in</NavLink></li>
            </ul>     
   )
}