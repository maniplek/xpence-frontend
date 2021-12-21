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

function App() {
  return (
    <div className="App">
      <div className='content'>
      <Login/>
      <Signup/>
      <MyProfileInfo/>
      <NewAccount/>
      <Preference/>
      <PrefCategolies/>
      <NewIncome/>
      <NewCategory/>
      <NewExpense/>
      </div>
      
    </div>
  );
}

export default App;
