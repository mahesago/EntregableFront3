// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
//

import Header from './components/Header';
import List  from './components/List';
import { useState } from 'react';

function App() {
  const [itemsToPurchase, setItemsToPurchase] = useState(0);

  const addItemToPurchase = () => {
    setItemsToPurchase(previous => previous + 1)
  }
  return (
    <div className="App">
      <Header itemsToPurchase={itemsToPurchase} />
      <List onAddItem={addItemToPurchase} />
    </div>
  );
}

export default App;
