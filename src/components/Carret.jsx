import { useState } from 'react';

function Carret() {
  const [items, setItems] = useState([]);

  const afegir = (producte) => setItems([...items, producte]);
  const eliminar = (id) => setItems(items.filter(i => i.id !== id));

  return { items, afegir, eliminar, total: items.length };
}
export default Carret;
