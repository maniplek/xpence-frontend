import "./App.css";
import Login from "./components/Login";
import MyProfileInfo from "./components/MyProfileInfo";
import NewAccount from "./components/NewAccount";
import NewCategory from "./components/NewCategory";
import NewExpense from "./components/NewExpense";
import NewIncome from "./components/NewIncome";
import PrefCategolies from "./components/PrefCategolies";
import Preference from "./components/Preference";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route path="/">
              <Signup />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
          </Switch>

          {/* <MyProfileInfo />
          <NewAccount />
          <Preference />
          <PrefCategolies />
          <NewIncome />
          <NewCategory />
          <NewExpense /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
