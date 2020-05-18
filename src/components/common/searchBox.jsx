import React from 'react';

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      onChange={(e) => onChange(e.currentTarget.value)}
      name="query"
      value={value}
      placeholder="Search..."
      type="text"
      className="form-control my-3"
    />
  );
};

export default SearchBox;
