import React from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

export default function EmployeeTable({ employees, setEmployees, setShowForm, setSelectedEmployee, onViewEmployee }) {
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      const updatedEmployees = employees.filter((e) => e.id !== id);
      setEmployees(updatedEmployees);

      if (updatedEmployees.length > 0) {
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      } else {
        localStorage.removeItem("employees");
      }
    }
  };

  return (
    <div className="table-wrapper">
      <table className="employee-table">
        <thead>
          <tr>
            {[
              "Employee Name", "City", "State", "Email ID", "Job Title", "Payment Method",
              "Language", "Vacation Days", "Sick Days", "Birth Date", "Joining Date", "Actions"
            ].map((header) => (
              <th key={header} className="employee-th">{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="border-b hover:bg-gray-100 transition">
              <td className="employee-td">{employee.name || "N/A"}</td>
              <td className="employee-td">{employee.city || "N/A"}</td>
              <td className="employee-td">{employee.state || "N/A"}</td>
              <td className="employee-td">{employee.emailid || "N/A"}</td>
              <td className="employee-td">{employee.jobTitle || "N/A"}</td>
              <td className="employee-td">{employee.paymentMethod || "N/A"}</td>
              <td className="employee-td">{employee.language || "N/A"}</td>
              <td className="employee-td text-center">{employee.paidVacationDays || "0"}</td>
              <td className="employee-td text-center">{employee.paidSickDays || "0"}</td>
              <td className="employee-td">{employee.dateofbirth || "N/A"}</td>
              <td className="employee-td">{employee.dateofjoining || "N/A"}</td>
              <td className="employee-td flex space-x-1 justify-center">
                <button className="icon-btn bg-blue-500 text-white hover:bg-blue-600" onClick={() => { setSelectedEmployee(employee); setShowForm(true); }}>
                  <FaEdit />
                </button>
                <button className="icon-btn bg-red-500 text-white hover:bg-red-600" onClick={() => handleDelete(employee.id)}>
                  <FaTrash />
                </button>
                <button className="icon-btn bg-green-500 text-white hover:bg-green-600" onClick={() => onViewEmployee(employee)}>
                  <FaEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
