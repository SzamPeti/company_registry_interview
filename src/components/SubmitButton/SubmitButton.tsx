import React, { useState } from "react";
import "./SubmitButton.css";

const SubmitButton: React.FC = () => {
  return (
    <div className="Submit">
      <input
        name="submit_button"
        type="submit"
        className="btn_sub"
        value="Submit"
      />
    </div>
  );
};

export default SubmitButton;
