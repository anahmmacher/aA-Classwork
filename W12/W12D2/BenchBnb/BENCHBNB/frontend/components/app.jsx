import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Link, Switch } from 'react-router-dom'
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SearchContainer from './search/search_container'
import BenchFormContainer from './bench_form/bench_form_container'
import BenchShowContainer from './bench_show/bench_show_container'

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>Bench BnB</h1>
            </Link>
            <GreetingContainer />
        </header>
        <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path='/benches/new' component={BenchFormContainer} />
        <Route path="/benches/:benchId" component={BenchShowContainer} />
        <Route exact path="/" component={SearchContainer} />
        </Switch>
    </div>
);

export default App;