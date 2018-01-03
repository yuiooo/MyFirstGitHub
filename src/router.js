import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';

import Wrap from "~/src/routes/containers/Wrap.js";

import Login from "~/src/routes/containers/Login.js";

import App from "~/src/routes/containers/App.js";

import User from "~/src/routes/User/User.js";
import Category from "~/src/routes/User/Category/Category.js";
import Tui from "~/src/routes/User/Tui/Tui.js";
import Visit from "~/src/routes/User/Visit/Visit.js";
import Register from "~/src/routes/User/Register/Register.js";

import Analysis from "~/src/routes/Analysis/Analysis.js";
import UserVolume from "~/src/routes/Analysis/UserVolume/UserVolume.js";
import VisitRegVolume from "~/src/routes/Analysis/VisitRegVolume/VisitRegVolume.js";

import TextSetting from "~/src/routes/Setting/TextSetting/TextSetting";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Wrap}>
	      <IndexRoute component={Login} />
	      <Route component={App} >
          <Route path="/user" component={User} >
            <Route path="/user/:uid/category" component={Category} />
            <Route path="/user/:uid/tui" component={Tui} />
            <Route path="/user/:uid/visit" component={Visit} />
            <Route path="/user/:uid/register" component={Register} />
          </Route>
          <Route path="/analysis" component={Analysis} >
            <IndexRoute component={UserVolume} />
            <Route path="/analysis/visitRegVolume" component={VisitRegVolume} />
          </Route>
          <Route path="/setting">
            <Route path="/setting/text" component={TextSetting} />
          </Route>
        </Route>      	
      </Route>
    </Router>
  );
}

export default RouterConfig;
