import React, { useState } from "react";

export default function Form() {
  const user = { username: "", password: "" };
  const [account, setAccount] = useState(user);

  return (
    <div>
      {/* <p>#Debug {JSON.stringify(account)}</p> */}
      <form>
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
        <div className="btn">
          <button
            onClick={(e) => {
              e.preventDefault();
              alert(JSON.stringify(account));
            }}
          >
            Submit
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setAccount(user);
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
