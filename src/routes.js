//https://github.com/evedes/ReactRouter_Boilerplate_01

import { BrowserRouter as Router } from "react-router-dom";
import React from 'react';
import { Home } from './views/Home';
import { NoMatch } from './views/NoMatch';
import { Classes } from './views/Classes'
import { CreateClass } from './views/CreateClass'
import { EditClass } from './views/EditClass'
import { MyAccount } from './views/MyAccount'
import { ClassHistory } from './views/ClassHistory'
import { NavBar } from './components/NavBar';
import { Login } from './views/Login';
import { Register } from './views/Register';
import { Route, Switch, Redirect } from 'react-router-dom';
import ClassDetail from './views/ClassDetail/ClassDetail';
import { Provider } from "react-redux";
import { store } from "./store";

export const Routes = () => {
	return (
		<Provider store={store}>
		<Router>
		<div>
			<NavBar />
			<Switch>
				<Route exact path="/home" component={Home} />
				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
				<Route exact path="/classes" component={Classes} />
				<Route exact path="/classes/:classId" component={ClassDetail} />
				<Route exact path="/create-class/:instructorId" component={CreateClass} />
				<Route exact path="/edit-class/:classId" component={EditClass} />
				<Route exact path="/my-account/:userId" component={MyAccount} />
				<Route exact path="/class-history/:userId" component={ClassHistory}/>
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route component={NoMatch} />
			</Switch>
		</div>
		</Router>
		</Provider>
	);
};
