import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from '../layouts/main-layout';
import SearchLayoutContainer from '../layouts/search-layout/search-layout-container';

// Components
import SearchBarContainer from '../components/Search-Bar/Search-Bar-Container';
import ChefListContainer from '../components/Chef-List/Chef-List-Container';
import ProfileContainer from '../components/Profile/Profile-Container';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={MainLayout}>

        <Route path="chefs">
          <Route component={SearchLayoutContainer}>
            <IndexRoute component={ChefListContainer} />
          </Route>
        </Route>

        <Route path="profile">
          <IndexRoute component={ProfileContainer} />
        </Route>

    </Route>
  </Router>
);
