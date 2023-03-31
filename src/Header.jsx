import React from 'react';

const Header = () => {
  return (
    <header className="py-10 bg-green-400  ">
      <div className="wrapper max-w-[1440px] px-10">
        <div className="flex justify-center tablet:flex-col tablet:items-center tablet:gap-2">
          <div className="font-bold text-xl">Password Strength App</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
