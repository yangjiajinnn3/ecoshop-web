import { useState } from 'react';

function Carret() {
  // FIX: recuperar carret de localStorage al recarregar
  const initialItems = JSON.parse(localStorage.getItem('carret') || '[]');
  const [items, setItems] = useState(initialItems);

  const afegir = (producte) => {
    const nouItems = [...items, producte];
    setItems(nouItems);
    localStorage.setItem('carret', JSON.stringify(nouItems));
  };

  const eliminar = (id) => {
    const nouItems = items.filter(i => i.id !== id);
    setItems(nouItems);
    localStorage.setItem('carret', JSON.stringify(nouItems));
  };

  return { items, afegir, eliminar, total: items.length };
}
export default Carret;
