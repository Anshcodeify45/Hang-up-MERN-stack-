import './App.css';
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from './Components/Home/Home';
import Chat from './Components/Chat/Chat';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/chats" element={<Chat/>}></Route>
          {/* <Route path="/settings" element={<Settings/>}></Route>
          <Route path="/analytics" element={<Analytics/>}></Route>
          <Route path="/products" element={<Products/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
