import React, { useState } from "react";

const User = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};

export default User;
