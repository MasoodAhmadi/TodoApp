import React from "react";
import "../App";
import FirstPage from "../HomePage/Homepage";
import { Switch, Route } from "react-router-dom";
import Headers from "../Components/1_Header_Com/Header";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Headers />
        {/* <Switch>
          <Route path="/firstpage" component={FirstPage} exact />
        </Switch> */}
      </div>
    );
  }
}
export default Home;
