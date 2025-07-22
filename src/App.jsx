import React from 'react';
import ComponenteLista from './components/ComponenteLista';
import { useState, useEffect } from 'react';

function useProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchProductos() {
      try {
        const response = await fetch('JSON/productos.json');
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo JSON');
        }
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
        setProductos([]);
      }
    }
    fetchProductos();
  }, []);

  return productos;
}
/*
async function fetchProductos() {
  try {
    const response = await fetch('/productos.json');
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return [];
  }
}
*/

function App() {
  // const items = ['Item 1', 'Item 2', 'Item 3'];
  const productos = [{
    id: 1,
    name: 'Item 1',
    precio: 200
  }, {
    id: 2,
    name: 'Item 2',
    precio: 300
  }, {
    id: 3,
    name: 'Item 3',
    precio: 400
  }, {
    id: 4,
    name: 'Item 4',
    precio: 500
  }, {
    id: 5,
    name: 'Item 5',
    precio: 600
  }];
  console.log('app.jsx');

  const productos2 = useProductos();

  return (
    <div className="container">
      <h1 className="mt-5">Lista de Items</h1>
      <ComponenteLista items={productos2} />
    </div>
  );
}

export default App;

// <ComponenteLista items={items} />