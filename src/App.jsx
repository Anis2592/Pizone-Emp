import React, { useState, useEffect } from "react";
import EmployeeTable from "./EmployeeTable";
import AddEmp from "./Addemp";
import EmployeeDetails from "./EmployeeDetails";
import "./index.css";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [viewEmployee, setViewEmployee] = useState(null);

 
  useEffect(() => {
    const savedData = localStorage.getItem("employees");
    if (savedData) {
      setEmployees(JSON.parse(savedData)); 
    }
  }, []);
 
  useEffect(() => {
    if (employees.length > 0) {
      localStorage.setItem("employees", JSON.stringify(employees));
    }
  }, [employees]);

  const addEmployee = (newEmployee) => {
    if (selectedEmployee) {
      const updatedEmployees = employees.map((emp) =>
        emp.id === selectedEmployee.id ? { ...emp, ...newEmployee } : emp
      );
      setEmployees(updatedEmployees);
    } else {
      setEmployees([...employees, { id: Date.now(), ...newEmployee }]);
    }
    handleCloseModal();
  };

  const handleOpenModal = () => {
    console.log("Button Click: Open Add Emp");
    
    setSelectedEmployee(null);  
    setShowForm(true);
console.log("showForm state After Click:",showForm);


  };

  const handleCloseModal = () => {
    setShowForm(false);
  };

  const handleViewEmployee = (employee) => {
    setViewEmployee(employee); 
  };

  const handleCloseDetails = () => {
    setViewEmployee(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={handleOpenModal}
        >
          Add Employee
        </button>
        <EmployeeTable
          employees={employees}
          setEmployees={setEmployees}
          setShowForm={setShowForm}
          setSelectedEmployee={setSelectedEmployee}
          onViewEmployee={handleViewEmployee} 
        />
        {showForm && (
          <AddEmp
            setShowForm={handleCloseModal}
            addEmployee={addEmployee}
            selectedEmployee={selectedEmployee}
          />
        )}
        {viewEmployee && (
          <EmployeeDetails employee={viewEmployee} onClick={handleCloseDetails} />
        )}
      </div>
    </div>
  );
}
