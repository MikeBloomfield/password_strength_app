import React from 'react';

const Description = () => {
  return (
    <div className="w-full mx-auto mb-5">
      <div>
        {' '}
        1. Only letters/digits/symbols - the password is{' '}
        <span className="text-red-400 font-bold" style={{ textShadow: ' 0.5px 0.5px 0.5px #000' }}ы>
          easy
        </span>
      </div>
      <br />
      <div>
        2. Combination of letters-symbols/letters-digits/digits-symbols - the password is{' '}
        <span
          className="text-yellow-400 font-bold "
          style={{ textShadow: ' 0.5px 0.5px 0.5px #000' }}>
          medium
        </span>
        ;
      </div>
      <br />
      <div>
        {' '}
        3. Has letters, symbols and numbers - the password is{' '}
        <span
          className="text-green-400 font-bold"
          style={{ textShadow: ' 0.5px 0.5px 0.5px #000' }}>
          strong
        </span>
        ;
      </div>
      <br />
      <div>
        4. Note: password should be at least 8 characters (otherwise bars will be painted red)
      </div>
    </div>
  );
};

export default Description;
