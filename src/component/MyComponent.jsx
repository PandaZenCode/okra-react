import React, { useContext } from "react";

import { dataContext } from "../pages/hello";

// const MyComponent = ({ data: { name, description } }) => {
//   return (
//     <div>
//       <h1>Hello,{name}!</h1>
//       <p>{description}</p>
//     </div>
//   );
// };

const MyComponent = () => {
  const { data, setData } = useContext(dataContext);

  const changeName = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  return (
    <div>
      <h1>Hello,{data.name}</h1>
      <p>{data.description}</p>
      <input />
      <button onClick={changeName} />
    </div>
  );
};

export default MyComponent;
