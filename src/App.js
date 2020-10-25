//this component calls other componets based on the url path. PageHeader component is rendered on each page.
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PageHeader from "./components/pageHeader/PageHeader";
import Detail from "./pages/detail/Detail";
import Homepage from "./pages/homepage/Homepage";
import Error from './pages/error/Error';
import "./app.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <PageHeader />
        <Switch>
          {/* render home component */}
          <Route exact path="/" component={Homepage} />
          {/* render coin detail component */}
          <Route exact path="/coindetail/:id" component={Detail} />
          {/* render 404 error component */}
          <Route path="*" component={Error} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
