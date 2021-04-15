import { useState } from 'react';
import { connect } from 'react-redux'
import { makeStyles } from "@material-ui/styles";
import { FormControl, Input, InputLabel, Button, Icon } from "@material-ui/core";
// import { Icon } from '@material-ui/icons'

import { operations } from '../redux/auth/index'

const useStyles = makeStyles({
    registration: {
        margin: 'auto',
        fontSize: '26px',
        textAlign: 'center',
    },

    button: {
        color: 'lightcoral',
        backgroundColor: 'rgb(233, 229, 229)'
    }

})
  
const initialUser = {
    name: '',
    password: '',
    email: ''
    }

const Registration = ({ registration }) => {
    const classes = useStyles();
    const [user, setUser] = useState(initialUser);

    const onSubmit = (e) => {
        e.preventDefault();
        registration(user)
        setUser(initialUser)
            
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value})
    }
     
    return (

        <div className={classes.registration}>
            
            <h1>Sign up</h1>
            <form
                action="submit"
                autoComplete="off"
                className={classes.form}
            >
                <div>
                <FormControl className={classes.imput}>
                    <InputLabel>Name</InputLabel>
                    <Input
                        type="name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </FormControl>
                </div>
                <div>
                <FormControl className={classes.imput}>
                    <InputLabel htmlFor="component-simple">Email</InputLabel>
                    <Input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </FormControl>
                </div>
                <div>
                <FormControl className={classes.imput}>
                     <InputLabel htmlFor="component-simple">Password</InputLabel>
                    <Input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </FormControl>
                </div>
                <br/>
                <div>
                    <Button
                        className={classes.button}
                        variant="contained"
                        endIcon={<Icon>create</Icon>}
                        onClick={onSubmit}
                    >Create
                    </Button>
                </div>
            </form>
        </div>
        
    )
}

const mapDispatchToProps = dispatch => ({
    registration: user => dispatch(operations.registration(user)),
})

export default connect(null, mapDispatchToProps)(Registration);