import React, { useState, useEffect } from 'react';
import Description from './Description';
import MyInput from './MyInput';
import Sections from './Sections';

const Main = () => {
  const [value, setValue] = useState('');
  const [bg, setBG] = useState({
    one: 'bg-gray-400',
    two: 'bg-gray-400',
    three: 'bg-gray-400',
  });

  const checkLetters = (str) => {
    return /[a-z]/gi.test(str);
  };
  const checkSymbols = (str) => {
    return /[!,%,@,#,$,^,*,?,_,~]/g.test(str);
  };
  const checkDigits = (str) => {
    return /[0-9]/gi.test(str);
  };

  const GlobalCheck = (item) => {
    const arr = [checkLetters(item), checkDigits(item), checkSymbols(item)];
    const filtered = arr.filter((item) => item === true);
    return filtered.length;
  };

  useEffect(() => {
    if (value.length === 0) {
      setBG({
        one: 'bg-gray-400',
        two: 'bg-gray-400',
        three: 'bg-gray-400',
      });
      return;
    }
    if (value.length < 8) {
      setBG({
        one: 'bg-red-400',
        two: 'bg-red-400',
        three: 'bg-red-400',
      });
      return;
    }
    if (GlobalCheck(value) === 1) {
      setBG({
        one: 'bg-red-400',
        two: 'bg-gray-400',
        three: 'bg-gray-400',
      });
    }
    if (GlobalCheck(value) === 2) {
      setBG({
        one: 'bg-yellow-400',
        two: 'bg-yellow-400',
        three: 'bg-gray-400',
      });
    }
    if (GlobalCheck(value) === 3) {
      setBG({
        one: 'bg-green-400',
        two: 'bg-green-400',
        three: 'bg-green-400',
      });
    }
  }, [value]);

  return (
    <main className="px-10 mx-auto m-w-[500px]">
      <Description />
      <MyInput value={value} setValue={setValue} />
      <Sections bg={bg} />
    </main>
  );
};

export default Main;
