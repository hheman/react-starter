import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemsService from './../services/items';

const ItemNote = () => {
  const { itemId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await new ItemsService().fetchItemById(itemId);
        setData(res);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (itemId) fetchData();
  }, [itemId]);

  return <div>{data ? <p>{data.name}</p> : <p>Loading...</p>}</div>;
};

export default ItemNote;
