import * as React from "react";
import { Link, Route } from "react-router-dom";

const About = (props: any) => {
  return (
    <div>
      {" "}
      <ul>
          {/* sub route example */}
        <li>
          <Link to={`${props.match.url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/boots`}>Boots</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/footwear`}>Footwear</Link>
        </li>
      </ul>
        {/* render route example */}
      <Route
        path={`${props.match.path}/:name`}
        render={({ match }) => (
          <div>
            {" "}
            <h3> {match.params.name} </h3>
          </div>
        )}
      />
    </div>
  );
};
export default About;