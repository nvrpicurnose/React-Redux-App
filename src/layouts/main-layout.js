import React from 'react';
import { Link } from 'react-router';

import HomeContainer from '../components/Home/Home-Container';

// we would put <Link to='/'> routes here if we had any
export default function(props){
	return (
		<div className="app">
	      <HomeContainer />
          <li><Link to="/profile" activeClassName="active">Profile</Link></li>
          <li><Link to="/chefs" activeClassName="active">Chefs</Link></li>
	      <main>
	        {props.children}
	      </main>
	    </div>
	);
}