import React from 'react';
import classNames from 'classnames';

const Sections = ({ bg }) => {
  return (
    <div className="flex justify-center gap-2 w-full mx-auto mt-7">
      <div className={classNames('rounded-md w-1/3  h-[5px]', bg.one || 'bg-gray-400')}></div>
      <div className={classNames('rounded-md w-1/3  h-[5px]', bg.two || 'bg-gray-400')}></div>
      <div className={classNames('rounded-md w-1/3  h-[5px]', bg.three || 'bg-gray-400')}></div>
    </div>
  );
};

export default Sections;
