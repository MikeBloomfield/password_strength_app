import React from 'react';

const MyInput = ({ value, setValue }) => {
  return (
    <input
      type="password"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border-[2px] w-full  border-black-400 block mx-auto px-2"
    />
  );
};

export default MyInput;
