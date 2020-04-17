import React from "react";

const UserForm = props => {
  return (
    <form onSubmit={props.getPlate}>
      <input
        style={{ margin: "20px auto", display: "block" }}
        type="text"
        name="licensePlate"
      />
      <button>Submit</button>
    </form>
  );
};

export default UserForm;
