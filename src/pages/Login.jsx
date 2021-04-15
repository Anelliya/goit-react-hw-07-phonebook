import { NavLink } from 'react-router-dom';
import { useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from "@material-ui/styles";
import { FormControl, Input, InputLabel, Button, Icon } from "@material-ui/core";

import { operations } from '../redux/auth/index'

const useStyles = makeStyles({
    login: {
        margin: 'auto',
       fontSize: '24px',
        textAlign: 'center',
   },
    button: {
        color: 'lightcoral',
        backgroundColor: 'rgb(233, 229, 229)'
    },
    link: {
      // fontSize: '24px',
       color: 'lightcoral'
    },
   span: {
      fontSize: '22px',
      fontStyle: 'italic'
    }

})

const INITIAL_USER = {
   email: '',
   password: ''
}

const Login = ({ login }) => {
   const classes = useStyles();
   const [user, setUser] = useState(INITIAL_USER);

   const handleChange = ({target:{name, value}}) => {
      setUser({...user, [name]:value })
   }

   const onSubmit = (e) => {
      e.preventDefault();
      login(user);
      setUser(INITIAL_USER)
   }


   
   return (
      <div className={classes.login}>
         <h1>Sign in <span className={classes.span}>or</span> <NavLink to="/registration" className={classes.link}>Create an account</NavLink>  </h1>
            {/* <button><NavLink to="/registration"> Create an account</NavLink></button> */}
         <form
            action="submit"
            autoComplete="off"
            className={classes.form}
             onSubmit={onSubmit}
         >
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
            <br />
            <div>
               <Button
                  className={classes.button}
                  variant="contained"
                  endIcon={<Icon>login</Icon>}
                  onClick={onSubmit}
               >Login
               </Button>
            </div>
         </form>
      </div>
        
   )
}

  const mapDispatchToProps = dispatch => ({
   login: user => dispatch(operations.login(user)),
  })

 export default connect(null, mapDispatchToProps)(Login);
