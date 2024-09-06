import React, { useState } from "react";
import "./NameForm.css"; // Optional, for styling

const NameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName) {
      setError("Both fields are required.");
      return;
    }
    setFullName(`${firstName} ${lastName}`);
    setError("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {fullName && <h2>Full Name: {fullName}</h2>}
    </div>
  );
};

export default NameForm;
