
import './App.css';
import Banner from './components/Header/Banner/Banner';
import Header from './components/Header/Header';
import HomeInventory from './components/HomeInventory/HomeInventory';
import InventoryList from './components/InventoryList/InventoryList';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <HomeInventory></HomeInventory>
    </div>
  );
}

export default App;
