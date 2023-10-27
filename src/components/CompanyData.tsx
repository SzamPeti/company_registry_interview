import React, { useState, ChangeEvent } from "react";
import EmployeeData from "./EmployeeData";
import "./CompanyData.css";

const CompanyData: React.FC = () => {
  const [numEmployees, setNumEmployees] = useState(0);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [errorNum, setErrorNum] = useState(null);

  const handleNumEmployeeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const employeNumber = (event.target as HTMLInputElement).value;
    const number = parseInt(employeNumber);
    if (Number.isInteger(number) && number >= 1 && number <= 100) {
      setNumEmployees(number);
      setErrorNum(null);
    } else {
      setErrorNum("Please provide a valid number between 1 and 100!!");
    }
  };

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleValidEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isValidEmail((event.target as HTMLInputElement).value)) {
      setError("Email is invalid, please provide a valid email address!");
    } else {
      setError(null);
    }
    setEmail((event.target as HTMLInputElement).value);
  };

  return (
    <div className="CompanyData app__bg">
      <header className="title">Company register</header>
      <span className="app__subtitle">Company Data</span>
      <form className="CompanyForm app__wrapper">
        <div className="CompName">
          <label htmlFor="CompName" className="Comp__name">
            Company Name
          </label>
          <input type="text" name="CompanyName" id="CompanyName" required />
        </div>
        <div className="CompEmail">
          <label htmlFor="CompEmail" className="Comp__email">
            Company Email {error && <p className="app__error">{error}</p>}
          </label>
          <input
            type="email"
            name="CompanyEmail"
            id="CompanyEmail"
            value={email}
            onChange={handleValidEmailChange}
            required
          />
        </div>
        <div className="NmbEmpl">
          <label htmlFor="Employees" className="CompEmploy">
            Number of Employees{" "}
          </label>
          <input
            type="number"
            name="CompanyNumber"
            id="CompanyNumber"
            value={numEmployees}
            onChange={handleNumEmployeeChange}
            required
          />
          {errorNum && <p className="app__error NumError">{errorNum}</p>}
        </div>
        <div className="Descr">
          <label htmlFor="Description" className="CompDescr">
            Company Description
          </label>
          <textarea
            name="CompanyDescription"
            cols={40}
            rows={5}
            id="CompanyDescription"
          />
        </div>
      </form>
      <div className="EmployeeForm">
        {Array.from({ length: numEmployees }, (_, index) => (
          <EmployeeData key={index} />
        ))}
      </div>
    </div>
  );
};

export default CompanyData;
