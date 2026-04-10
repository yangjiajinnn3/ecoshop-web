function CatalegGrid({ productes }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {productes.map(p => (
        <div key={p.id} className="card">
          <img src={p.imatgeUrl} alt={p.altText} />
          <h3>{p.nom}</h3>
          <p>{p.preu} €</p>
        </div>
      ))}
    </div>
  );
}
export default CatalegGrid;
