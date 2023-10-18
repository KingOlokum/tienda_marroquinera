import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
<Navbar/>
<ItemListContainer greeting={"Bienvenidos a mi tienda"}/>
    </div>
  );
}

export default App;
