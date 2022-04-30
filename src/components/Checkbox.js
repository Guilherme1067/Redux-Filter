import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFilters, selectUniqueColors } from '../store/products';

const Checkbox = () => {
  const colors = useSelector(selectUniqueColors);

  const [selectedColors, setSelectedColors] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilters({ name: 'colors', value: selectedColors }));
  }, [selectedColors, dispatch]);

  function handleChange({ target }) {
    if (target.checked) {
      setSelectedColors([...selectedColors, target.value]);
    } else {
      setSelectedColors(
        selectedColors.filter((color) => color !== target.value),
      );
    }
  }
  function handleChecked(color) {
    return selectedColors.includes(color);
  }

  return (
    <>
      {colors.map((color) => (
        <label key={color}>
          <input
            type="checkbox"
            value={color}
            onChange={handleChange}
            checked={handleChecked(color)}
          />
          {color}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
