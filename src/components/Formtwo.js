import React, { useState } from "react";

export default function FormTwo() {
  const user = { username: "", password: "" };
  const [account, setAccount] = useState(user);
  const [accountList, setAccountList] = useState([]);

  return (
    <div>
      {/* <p>#Debug {JSON.stringify(account)}</p> */}
      <form>
        <h3>Form</h3>
        <input
          type="text"
          value={account.username}
          placeholder="username"
          onChange={(e) => setAccount({ ...account, username: e.target.value })}
        />
        <br />
        <input
          type="text"
          value={account.password}
          placeholder="password"
          onChange={(e) => setAccount({ ...account, password: e.target.value })}
        />
        <br />
        <div style={{ marginTop: "10px" }}>
          <button
            onClick={(e) => {
              e.preventDefault();
              setAccountList([...accountList, account]);
            }}
          >
            Submit
          </button>
          <button
            style={{ marginLeft: "8px" }}
            onClick={(e) => {
              e.preventDefault();
              setAccount(user);
            }}
          >
            Clear
          </button>
        </div>
      </form>
      <ul>
        {accountList.map((item, index) => (
          <li key={index}>
            Username: {item.username} , Password: {item.password}
          </li>
        ))}
      </ul>
    </div>
  );
}
