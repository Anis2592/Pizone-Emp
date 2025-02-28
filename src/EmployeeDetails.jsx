import React, { useEffect } from "react";
import { format } from "date-fns";

export default function EmployeeDetails({ employee, onClose }) {
  if (!employee) return null;

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const formatDate = (date) =>
    date && !isNaN(Date.parse(date)) ? format(new Date(date), "MM/dd/yyyy") : "N/A";

  return (
    <>
      {/* Overlay to Close Modal When Clicked */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => {
          console.log("Overlay clicked → Closing modal"); // Debugging
          onClose(); // Ensure this function is being passed correctly
        }}
      ></div>

      {/* Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div
          className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-auto p-6 relative"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          {/* Employee Profile */}
          <div className="flex flex-col items-center text-center mb-6">
            <img
              src={employee.avatar?.trim() ? employee.avatar : "/default-avatar.png"}
              alt={employee.name || "Employee"}
              className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-gray-200"
            />
            <h3 className="text-xl font-semibold mt-3">{employee.name || "N/A"}</h3>
            <p className="text-gray-500 text-sm">{employee.jobTitle || "N/A"}</p>
          </div>

          {/* Employee Details */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-gray-700 text-sm">
            <p className="font-semibold text-right">Cellphone:</p>
            <p>{employee.cellphone1 || employee.cellphone2 || "N/A"}</p>

            <p className="font-semibold text-right">Email:</p>
            <p>{employee.emailid || "N/A"}</p>

            <p className="font-semibold text-right">Address:</p>
            <p>{employee.address || "N/A"}</p>

            <p className="font-semibold text-right">City:</p>
            <p>{employee.city || "N/A"}</p>

            <p className="font-semibold text-right">State:</p>
            <p>{employee.state || "N/A"}</p>

            <p className="font-semibold text-right">Payment Method:</p>
            <p>{employee.paymentMethod || "N/A"}</p>

            <p className="font-semibold text-right">Language:</p>
            <p>{employee.language || "N/A"}</p>

            <p className="font-semibold text-right">Vacation Days:</p>
            <p>{employee.paidVacationDays || "0"}</p>

            <p className="font-semibold text-right">Sick Days:</p>
            <p>{employee.paidSickDays || "0"}</p>

            <p className="font-semibold text-right">Date of Birth:</p>
            <p>{formatDate(employee.dateofbirth)}</p>

            <p className="font-semibold text-right">Date of Joining:</p>
            <p>{formatDate(employee.dateofjoining)}</p>
          </div>

          {/* Close Button */}
          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={() => {
                console.log("Close button clicked → Closing modal"); // Debugging
                onClose(); // Call the parent function to close
              }}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
