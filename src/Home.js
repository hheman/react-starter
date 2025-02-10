import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import ItemsService from './../services/items';

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const itemsService = new ItemsService();
      const items = await itemsService.fetchItems();
      setItems(items);
    };
    fetchItems();
  }, []);

  return (
    <>
      <Heading />
      <p>
        Welcome to React App thats build using Webpack and Babel separately.
      </p>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No items found</p>
      )}
    </>
  );
};

export default Home;
