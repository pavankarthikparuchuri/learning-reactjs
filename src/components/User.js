import { useEffect, useState } from "react";
const User = ({ name }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(1);
  useEffect(() => {
    userInfo();
  }, []);
  async function userInfo() {
    const res = await fetch(
      "https://api.github.com/users/pavankarthikparuchuri"
    );
    const json = await res.json();
    console.log(json, "::json");
  }
  return (
    <div className="user-card">
      <button onClick={() => setCount1((data) => data + 1)}>{count1}</button>
      <button onClick={() => setCount2((data) => data + 1)}>{count2}</button>
      <h2>Name: {name}</h2>
      <h3>Location: Bengaluru,Karnataka</h3>
      <h4>Contact: pavankarthikparichuri2001@gmail.com</h4>
    </div>
  );
};

export default User;