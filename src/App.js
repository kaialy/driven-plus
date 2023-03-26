import { BrowserRouter, Routes, Route } from "react-router-dom"
import DataProvider from "./context/UserContext"
import Login from "./components/authentication/Login"
import SignUp from "./components/authentication/SignUp"
import PlanInfo from "./components/onboard/subscription/PlanInfo"
import Home from "./components/onboard/homepage/Home"
import Subscription from "./components/onboard/subscription/Subscription"

export default  function App() {
  return (
    <div >
      driven plus
    </div>
  );
}