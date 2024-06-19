import React, { useState } from 'react';
import Dropdown from './Dropdown';
import './App.css';

const App = () => {
  const options = [
    { label: 'Yes', value: 'ok' },
    { label: 'No', value: 'I will not use' },
    { label: 'Maybe', value: 'Maybe' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='container'>
      <h1 className='text-danger text-center'>Dropdown using React</h1>
      <h2 className='fw-bold text-bg-secondary text-center p-2'>Do you want to use dropdown</h2>
      <Dropdown options={options} onSelect={handleOptionSelect} />
      {selectedOption && (
        <h2 className='fw-bold text-primary text-center p-2'>
          My Answer = ( {selectedOption.label} )
        </h2>
      )}
    </div>
  );
};

export default App;
