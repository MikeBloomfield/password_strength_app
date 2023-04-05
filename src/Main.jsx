import React, { useState, useEffect } from 'react';
import Description from './Description';
import MyInput from './MyInput';
import Sections from './Sections';

const Main = () => {
  const GRAY = 'bg-gray-400';
  const RED = 'bg-red-400';
  const YELLOW = 'bg-yellow-400';
  const GREEN = 'bg-green-400';

  const [value, setValue] = useState('');
  const [bg, setBG] = useState({
    one: GRAY,
    two: GRAY,
    three: GRAY,
  });

  const checkLetters = (str) => {
    return /[a-z]/gi.test(str);
  };
  const checkSymbols = (str) => {
    return /[!,%,@,#,$,^,*,?,_,~]/g.test(str);
  };
  const checkDigits = (str) => {
    return /[0-9]/g.test(str);
  };

  const GlobalCheck = (item) => {
    const arr = [checkLetters(item), checkDigits(item), checkSymbols(item)];
    const filtered = arr.filter((item) => item);
    return filtered.length;
  };

  useEffect(() => {
    if (value.length === 0) {
      setBG({
        one: GRAY,
        two: GRAY,
        three: GRAY,
      });
      return;
    }
    if (value.length < 8) {
      setBG({
        one: RED,
        two: RED,
        three: RED,
      });
      return;
    }
    if (GlobalCheck(value) === 1) {
      setBG({
        one: RED,
        two: GRAY,
        three: GRAY,
      });
    }
    if (GlobalCheck(value) === 2) {
      setBG({
        one: YELLOW,
        two: YELLOW,
        three: GRAY,
      });
    }
    if (GlobalCheck(value) === 3) {
      setBG({
        one: GREEN,
        two: GREEN,
        three: GREEN,
      });
    }
    // eslint-disable-next-line
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
