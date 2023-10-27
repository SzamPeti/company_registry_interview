import React, { ChangeEvent } from "react";
import SubmitButton from "./SubmitButton/SubmitButton";
import "./EmployeeData.css";
import { useState } from "react";

import { BsUpload } from "react-icons/bs";

const EmployeeData: React.FC = () => {
  const [email, setEamil] = useState("");
  const [error, setError] = useState(null);
  const [age, setAge] = useState(0);
  const [errorAge, setErrorAge] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleValidEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isValidEmail((event.target as HTMLInputElement).value)) {
      setError("Email is invalid, please provide a valid email address!");
    } else {
      setError(null);
    }
    setEamil((event.target as HTMLInputElement).value);
  };

  const isValidAge = (event: ChangeEvent<HTMLInputElement>) => {
    const enteredAge = parseInt((event.target as HTMLInputElement).value);
    setAge(enteredAge);

    if (age > 18) {
      setAge(parseInt((event.target as HTMLInputElement).value));
      setErrorAge("Employee must be at least 18 years old.");
    } else {
      setErrorAge(null);
    }
  };

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = (event.target as HTMLInputElement).files[0];

    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      console.log("File uploaded.");
    } else {
      console.log("Please upload a PDF file.");
    }
  };

  return (
    <div className="EmployeeData app__bg">
      <span className="app__subtitle SubTitle">Employee Data</span>
      <form className="EmployeeForm app__wrapper">
        <div className="EmplName">
          <label htmlFor="EmplName" className="Empl__name">
            Employee Name
          </label>
          <input type="text" name="EmployeName" id="EmployeName" required />
        </div>
        <div className="EmplEmail">
          <label htmlFor="EmplEmail" className="Empl__email">
            Employee Email {error && <p className="app__error">{error}</p>}
          </label>
          <input
            type="email"
            name="EmployeeEmail"
            id="EmployeeEmail"
            value={email}
            onChange={handleValidEmailChange}
            required
          />
        </div>
        <div className="EmplTitle">
          <label htmlFor="EmplTitle" className="Empl__title">
            Employee Job Title
          </label>
          <input list="jobs" name="EmployeeTitle" id="EmployeeTitle" required />
          <datalist id="jobs">
            <option value="Accountant" />
            <option value="Software Developer" />
            <option value="Software Tester" />
            <option value="Manager" />
          </datalist>
        </div>
        <div className="EmplAge">
          <label htmlFor="EmployeeAge" className="EmployeeAge">
            Employee Age
          </label>
          <input
            type="number"
            name="EmployeeAge"
            id="EmployeAge"
            value={age}
            onChange={isValidAge}
            required
          />
          {errorAge && <p className="app__error NumError">{errorAge}</p>}
        </div>
        <div className="CV">
          <p>Only PDFs.</p>
          <label htmlFor="file_upload" className="EmplCV">
            <BsUpload className="Icon" /> <b>Employee CV</b>
          </label>
          <input
            type="file"
            name="file_upload"
            id="EmployeeCV"
            accept=".pdf"
            value={selectedFile}
            onChange={handleUpload}
          />
        </div>
        <div className="Submit">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default EmployeeData;
