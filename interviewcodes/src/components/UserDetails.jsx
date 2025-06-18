import React from 'react';

const UserDetails = () => {
  const user = {
    name: "Gnanashekar",
    email: "gnana@example.com",
    location: "Bangalore",
    age: 30
  };

  return (
    <div>
      <h2>User Details:</h2>
      <ul>
        {Object.entries(user).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
