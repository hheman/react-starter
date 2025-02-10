import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import ItemsService from './../services/items';

const ItemsList = ({ count }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const handleClick = ({ id }) => {
    navigate(`/items/${id}`);
  };

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
            <li key={item.id} onClick={() => handleClick(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items found</p>
      )}
    </>
  );
};

ItemsList.propTypes = {
  count: PropTypes.number,
};

export default ItemsList;
