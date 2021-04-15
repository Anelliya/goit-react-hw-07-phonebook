import { Button, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { connect } from 'react-redux'
import authOperations from "../../redux/auth/auth-operations";

import authSelectors from '../../redux/auth/auth-selectors'


const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        color: 'black',
        fontSize: '16px',
         '& p': {
             marginRight: '10px',
             fontSize: '18px',
        }
    },
    button: {
        height: '50%',
        color: 'lightcoral',
        backgroundColor: 'rgb(233, 229, 229)',
    }

})

const UserMenu = ({logout, user, authentificated}) => {
    const classes = useStyles();

    const handleLogout = (e) => {
        e.preventDefault();
        logout()
    }

    return (

        <div className={classes.wrapper}>
            <p>Welcome, {user.name}</p>
            <Button
                className={classes.button}
                variant="contained"
                endIcon={<Icon>logout</Icon>}
                onClick={handleLogout}
            >Logout
            </Button>
        </div>
     );
}

const mapStateToProp = (state) => ({
    user: authSelectors.getUser(state),
})

const mapDispatchToProp = dispatch =>({
     logout: token => dispatch(authOperations.logout(token))
})
 
export default connect(mapStateToProp, mapDispatchToProp)(UserMenu);