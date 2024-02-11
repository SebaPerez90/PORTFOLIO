import React from 'react';

const about = () => {
  return (
    <div>
      <p>
        this is{' '}
        <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block before:z-[-1]'>
          about me
        </span>{' '}
        section
      </p>
    </div>
  );
};

export default about;
