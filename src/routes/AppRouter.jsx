import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../components/common/loading';
import NotFound from '../components/common/notFound';

const JobContainer = Loadable({
  loader: () => import(/* webpackChunkName: "JobsContainer" */'../containers/'),
  loading: Loading
});


const AppRouter = ({ ...rest }) => {
  return (
    <Switch>
      <Route
        {...rest}
        exact={true}
        path={`${rest.match.path}`}
        render={props => <JobContainer {...props} />}
      />
      <Route component={NotFound} />
    </Switch>);
};

export default AppRouter;