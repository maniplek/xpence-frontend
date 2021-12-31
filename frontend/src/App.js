import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Signup from "./components/signup/Signup";
import Sidebar from "./components/Home/sidebar/Sidebar";
import Main from "./components/Home/Main/main";
import Preference from "./components/Preference/Preference";
import MyProfileInfo from "./components/myProfile/MyProfileInfo";
import NewAccount from "./components/newAccount/NewAccount";
import Login from "./components/login/Login";
import PrefCategolies from "./components/prefCategory/PrefCategolies";
import NewIncome from "./components/NewIncame/NewIncome";
import NewCategory from "./components/newCategory/NewCategory";
import NewExpense from "./components/NewExpense/NewExpense";
import MainNavbar from "./components/shared/MainNavbar";
import HomeNavbar from "./components/shared/homenavbar/HomeNavbar";
import configureStore from "./redux/store";
import MainCenter from "./components/Home/center/mainCenter/mainCenter";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="content">
            <Switch>
              <Route exact path="/si">
                <Signup />
              </Route>
              <Route path="/main">
                <Main />
              </Route>
              <Route path="/sidebar">
                <Sidebar />
              </Route>
              <Route path="/pref">
                <Preference />
              </Route>
              <Route path="/myprof">
                <MyProfileInfo />
              </Route>
              <Route path="/NewAccount">
                <NewAccount />
              </Route>
              <Route path="/main">
                <Main />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/NewAccount">
                <NewAccount />
              </Route>
              <Route path="/categories"></Route>
              <Route path="/PrefCategolies">
                <PrefCategolies />
              </Route>
              <Route path="/NewIncome">
                <NewIncome />
              </Route>
              <Route path="/NewCategory">
                <NewCategory />
              </Route>
              <Route path="/NewExpense">
                <NewExpense />
              </Route>
              <Route path="/MainNavbar">
                <MainNavbar />
              </Route>
              <Router path="/HomeNavbar">
                <HomeNavbar />
              </Router>
              <Router path="/MainCenter">
                <MainCenter />
              </Router>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App