import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
} from "react-router-dom";

const baseAppLink = '/mf-test'

function MainPage(props) {
  return (
    <section>
      <span>Main page from {props.name} is mounted!</span>
      <Link to={`${baseAppLink}/secondary`}>Go to {props.name} secondary page</Link>
    </section>
  );
}

function SecondaryPage(props) {
  return (
    <section>
      <span>Secondary page from {props.name} is mounted!</span>
      <Link to={`${baseAppLink}/main`}>Go to {props.name} main page</Link>
    </section>
  );
}

export default function Root(props) {
  return (
    <Router>
      <Redirect from={`${baseAppLink}/`} to={`${baseAppLink}/main`} />
      <Route path={`${baseAppLink}/main`}>
        <MainPage {...props} />
      </Route>
      <Route path={`${baseAppLink}/secondary`}>
        <SecondaryPage {...props} />
      </Route>
    </Router>
  );
}
