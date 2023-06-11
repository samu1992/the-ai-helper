import React, { useState, useEffect } from 'react';

const Search = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Simulación de llamada a la API y recuperación de categorías
    const fetchCategories = async () => {
      try {
        // Aquí realizarías la llamada a tu API para obtener las categorías
        // Por ahora, simularemos los datos con un retraso de 1 segundo
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Supongamos obtengo las categorías como un array de objetos
        const categoriesData = [
          { id: 1, name: 'All' },
          { id: 2, name: 'Trending' },
          { id: 3, name: 'Writing' },
          { id: 4, name: 'Design' },
          { id: 5, name: 'Assistant' },
          { id: 6, name: 'Image' },
          { id: 7, name: 'Code' },
          { id: 8, name: 'Video' },
          { id: 9, name: 'Audio' },
          { id: 10, name: 'Productivity' },
        ];

        setCategories(categoriesData);
      } catch (error) {
        console.error('Error al obtener las categorías:', error);
      }
    };

    fetchCategories();
  }, []); // El array vacío [] me asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <div className='container-input'>
      <input type='text' placeholder='Search AI Tool' />

      <div className='categories'>
        {categories.map(category => (
          <button key={category.id}>{category.name}</button>
        ))}
      </div>
    </div>
  );
};

export default Search;
