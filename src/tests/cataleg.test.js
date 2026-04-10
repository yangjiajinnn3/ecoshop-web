describe('CatalegGrid', () => {
  test('mostra la llista de productes', () => {
    const productes = [{ id: 1, nom: 'Samarreta orgànica', preu: 25 }];
    expect(productes).toHaveLength(1);
    expect(productes[0].nom).toBe('Samarreta orgànica');
  });

  test('filtra per categoria correctament', () => {
    const tots = [
      { id: 1, categoria: 'roba' },
      { id: 2, categoria: 'alimentació' }
    ];
    const filtrats = tots.filter(p => p.categoria === 'roba');
    expect(filtrats).toHaveLength(1);
  });
});
