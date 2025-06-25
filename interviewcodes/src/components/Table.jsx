import React, { useEffect } from 'react';

const Table = ({ contentList, arrayData }) => {
    const namesArray = ["Alice", "Bob", "Charlie", "David", "Eve"];
    
  useEffect(() => {
    arrayData(namesArray);
  }, [arrayData]);

  return (
    <>
      <h2>Child Component (Table)</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '80px' }}>
        {contentList.map((val, index) => (
          <div
            key={index}
            style={{
              width: '200px',
              height: '300px',
              border: '1px solid red',
              marginTop: '20px',
              marginRight: '20px'
            }}
          >
            <img src={val.image} alt={val.name} style={{ width: '100%', height: 'auto' }} />
            <p>{val.title}</p>
            <h1>{val.name}</h1>
            <p>{val.subtitle}</p>
            <p>{val.narration}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Table;
