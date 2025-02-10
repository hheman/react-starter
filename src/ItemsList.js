import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemsService from './../services/items';

const ItemsList = ({ count }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const itemsService = new ItemsService();
      const items = await itemsService.fetchItems({ count });
      setItems(items);
    };
    fetchItems();
  }, []);

  return (
    <>
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

ItemsList.propTypes = {
  count: PropTypes.number.optional,
};

export default ItemsList;
