import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Home, SignIn, Todo } from './pages';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/todo" component={Todo} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
