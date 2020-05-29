/* Import statements */
import * as React from "react";
import { Link, Route, Switch } from "react-router-dom";
import About from "./about/About";
import { Products } from "./products/Products";
import PrivateRoute from "./admin/PrivateRoute";
import Admin from "./admin/Admin";
import Login from "./admin/Login";

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);


export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
      </nav>
      /* Route components are rendered if the path prop matches the current URL */
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/products" component={Products}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/:id" render = {()=> (<p> I want this text to show up for all routes other than '/', '/products' and '/category' </p>)}/>
      </Switch>
    </div>
  );
}