import { Suspense } from "react";
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import routes from "../routes";
import selectors from '../redux/auth/auth-selectors'
const loader = <Loader type="Bars" color="lightcoral" height={50} width={50} className="Loader" />;

const PrivateRoute = ({ authentificated, component: Component, redirect, ...props }) => {
    return <Route
        path={props.path} key={props.key} exact={props.exact} render={
         props => authentificated
              ? <Component {...props} />
                : <Redirect to={redirect} />}
    />
}

const PublicRoute = ({ authentificated, component: Component, redirect, ...props }) => {
     return <Route path={props.path} key={props.key} exact={props.exact}  render={
         props => authentificated
             ? <Redirect to={ redirect } />
             : <Component {...props} />}
     />
}

const Routes = ({ authentificated }) => {
    return (
        <Suspense fallback={loader}>
            <Switch>
                {routes.map(route =>
                    route.private
                        ? <PrivateRoute {...route} authentificated={authentificated} />
                        : <PublicRoute {...route} authentificated={authentificated}/>)}
            </Switch>
        </Suspense>
    );
}

const mapStateToProps = state =>({       
    authentificated: selectors.isAuthentificated(state)
    })

export default connect(mapStateToProps)(Routes);