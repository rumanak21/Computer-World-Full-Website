
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewItem from './components/AddNewItem/AddNewItem';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import InventoryList from './components/InventoryList/InventoryList';
import ManageItem from './components/ManageItem/ManageItem';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';


function App() {
  return (
    <div>
      <Header></Header>
    <Routes>
      <Route path='/' element= {<Home></Home>} ></Route>
      <Route path='/home' element= {<Home></Home>} ></Route>
      <Route path='/inventory' element= {<InventoryList></InventoryList> } ></Route>
      <Route path='/manageitem/:itemId' element= {<ManageItem></ManageItem>} ></Route>
      <Route path='/blog' element= {<Blog></Blog>} ></Route>
      <Route path='/addnewitem' element= {<AddNewItem></AddNewItem>} ></Route>
      <Route path='/signup' element= {<SignUp></SignUp>} ></Route>
      <Route path='/signin' element= {<SignIn></SignIn>} ></Route>
    </Routes>

      
      <Footer></Footer>
    </div>
  );
}

export default App;
