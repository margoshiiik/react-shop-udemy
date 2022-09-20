import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Navigation from "./routes/navigation";
import SignIn from "./routes/sign-in";
import Shop from "./routes/shop";

function App() {

  return(
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/sign-in" element= {<SignIn />}></Route>
      </Route>
    </Routes>
  )
}

export default App;
