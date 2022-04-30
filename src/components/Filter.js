import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilters } from '../store/products';
import Checkbox from './Checkbox';

const Filter = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeFilters({
        name: 'prices',
        value: {
          max: +maxPrice,
          min: +minPrice,
        },
      }),
    );
  }, [minPrice, maxPrice]);

  return (
    <div>
      <input
        type="number"
        placeholder="Min"
        value={minPrice}
        onChange={({ target }) => setMinPrice(target.value)}
      />
      <input
        type="number"
        placeholder="Max"
        value={maxPrice}
        onChange={({ target }) => setMaxPrice(target.value)}
      />

      <Checkbox />
    </div>
  );
};

export default Filter;
