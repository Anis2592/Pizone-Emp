import React, { useState, useEffect } from "react";

export default function AddEmp({ setShowForm, addEmployee, selectedEmployee }) {
  const initialFormState = {
    name: "",
    cellphone1: "",
    cellphone2: "",
    homePhone: "",
    address: "",
    city: "",
    state: "",
    emailid: "",
    jobTitle: "",
    paymentMethod: "",
    language: "",
    paidVacationDays: "",
    paidSickDays: "",
    dateofbirth: "",
    dateofjoining: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (selectedEmployee) {
      setFormData(selectedEmployee);
    } else {
      setFormData(initialFormState);
    }

    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedEmployee]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(formData);
    handleClose();
  };

  const handleClose = () => {
    setFormData(initialFormState);
    setShowForm(false);
  };

  return (
    <>
      {/* Modal Overlay (Click to Close) */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleClose}></div>

      {/* Modal Container (Centered) */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-auto p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            {selectedEmployee ? "Edit Employee" : "Add Employee"}
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="grid grid-cols-2 gap-4 items-center">
              <label htmlFor="name" className="text-right font-semibold">Name:</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="form-input" />
            </div>

            {/* Phone Numbers */}
            {["cellphone1", "cellphone2", "homePhone"].map((field, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 items-center">
                <label htmlFor={field} className="text-right font-semibold">{field.replace(/([A-Z])/g, " $1")}:</label>
                <input type="tel" name={field} id={field} value={formData[field]} onChange={handleChange} className="form-input" />
              </div>
            ))}

            {/* Address */}
            <div className="grid grid-cols-2 gap-4 items-center">
              <label htmlFor="address" className="text-right font-semibold">Address:</label>
              <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} className="form-input" />
            </div>

            {/* City & State */}
            <div className="grid grid-cols-2 gap-4 items-center">
              <label htmlFor="city" className="text-right font-semibold">City:</label>
              <input type="text" name="city" id="city" value={formData.city} onChange={handleChange} className="form-input" />
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <label htmlFor="state" className="text-right font-semibold">State:</label>
              <select name="state" id="state" value={formData.state} onChange={handleChange} className="form-input">
                <option value="">Select</option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="New York">New York</option>
              </select>
            </div>

            {/* Email */}
            <div className="grid grid-cols-2 gap-4 items-center">
              <label htmlFor="emailid" className="text-right font-semibold">Email ID:</label>
              <input type="email" name="emailid" id="emailid" value={formData.emailid} onChange={handleChange} required className="form-input" />
            </div>

            {/* Job Title */}
            <div className="grid grid-cols-2 gap-4 items-center">
              <label htmlFor="jobTitle" className="text-right font-semibold">Job Title:</label>
              <select name="jobTitle" id="jobTitle" value={formData.jobTitle} onChange={handleChange} className="form-input">
                <option value="">Select</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Office Manager">Office Manager</option>
                <option value="Secretary">Secretary</option>
              </select>
            </div>

            {/* Payment Method & Language */}
            <div className="grid grid-cols-2 gap-4 items-center">
              <label htmlFor="paymentMethod" className="text-right font-semibold">Payment Method:</label>
              <select name="paymentMethod" id="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="form-input">
                <option value="">Select</option>
                <option value="Direct Deposit">Direct Deposit</option>
                <option value="Check">Check</option>
                <option value="Cash">Cash</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <label htmlFor="language" className="text-right font-semibold">Language:</label>
              <select name="language" id="language" value={formData.language} onChange={handleChange} className="form-input">
                <option value="">Select</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="Portuguese">Portuguese</option>
              </select>
            </div>

            {/* Date of Birth & Joining Date */}
            <div className="grid grid-cols-2 gap-4 items-center">
              <label htmlFor="dateofbirth" className="text-right font-semibold">Date of Birth:</label>
              <input type="date" name="dateofbirth" id="dateofbirth" value={formData.dateofbirth} onChange={handleChange} className="form-input" />
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <label htmlFor="dateofjoining" className="text-right font-semibold">Date of Joining:</label>
              <input type="date" name="dateofjoining" id="dateofjoining" value={formData.dateofjoining} onChange={handleChange} className="form-input" />
            </div>

            {/* Buttons (Sticky at Bottom) */}
            <div className="sticky bottom-0 bg-white p-4 border-t flex justify-end space-x-2">
              <button type="button" onClick={handleClose} className="bg-gray-500 text-white px-5 py-2 rounded hover:bg-gray-600">
                Close
              </button>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded">
                {selectedEmployee ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// import React, { useState, useEffect } from "react";

// export default function AddEmp({ setShowForm, addEmployee, selectedEmployee }) {
//   const initialFormState = {
//     name: "",
//     cellphone1: "",
//     cellphone2: "",
//     homePhone: "",
//     address: "",
//     city: "",
//     state: "",
//     emailid: "",
//     jobTitle: "",
//     paymentMethod: "",
//     language: "",
//     paidVacationDays: "",
//     paidSickDays: "",
//     dateofbirth: "",
//     dateofjoining: "",
//   };

//   const [formData, setFormData] = useState(initialFormState);

//   useEffect(() => {
//     setFormData(selectedEmployee || initialFormState);
//   }, [selectedEmployee]);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addEmployee(formData);
//     handleClose();
//   };

//   const handleClose = () => {
//     setFormData(initialFormState);
//     setShowForm(false);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
//         <h2 className="text-xl font-semibold mb-4 text-gray-800">
//           {selectedEmployee ? "Edit Employee" : "Add Employee"}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name */}
//           <div>
//             <label className="block text-sm/6 font-medium text-gray-900">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Phone Numbers */}
//           {["cellphone1", "cellphone2", "homePhone"].map((field, index) => (
//             <div key={index}>
//               <label className="block text-sm font-medium text-gray-700 capitalize">
//                 {field.replace(/([A-Z])/g, " $1")}
//               </label>
//               <input
//                 type="tel"
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleChange}
//                 placeholder="eg: 40-(770)-888-444"
//                 className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           ))}

//           {/* Address */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* City & State */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">City</label>
//             <input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">State</label>
//             <select
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select</option>
//               <option value="California">California</option>
//               <option value="Texas">Texas</option>
//               <option value="New York">New York</option>
//             </select>
//           </div>

//           {/* Email ID */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email ID</label>
//             <input
//               type="email"
//               name="emailid"
//               value={formData.emailid}
//               onChange={handleChange}
//               required
//               className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Job Title */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Job Title</label>
//             <select
//               name="jobTitle"
//               value={formData.jobTitle}
//               onChange={handleChange}
//               required
//               className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select</option>
//               <option value="Supervisor">Supervisor</option>
//               <option value="Office Manager">Office Manager</option>
//               <option value="Secretary">Secretary</option>
//             </select>
//           </div>

//           {/* Payment Method */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Payment Method</label>
//             <select
//               name="paymentMethod"
//               value={formData.paymentMethod}
//               onChange={handleChange}
//               className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select</option>
//               <option value="Direct Deposit">Direct Deposit</option>
//               <option value="Check">Check</option>
//               <option value="Cash">Cash</option>
//             </select>
//           </div>

//           {/* Language */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Language</label>
//             <select
//               name="language"
//               value={formData.language}
//               onChange={handleChange}
//               className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select</option>
//               <option value="English">English</option>
//               <option value="Spanish">Spanish</option>
//               <option value="Portuguese">Portuguese</option>
//             </select>
//           </div>

//           {/* Paid Vacation Days & Paid Sick Days */}
//           {["paidVacationDays", "paidSickDays"].map((field, index) => (
//             <div key={index}>
//               <label className="block text-sm font-medium text-gray-700 capitalize">
//                 {field.replace(/([A-Z])/g, " $1")}
//               </label>
//               <input
//                 type="number"
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleChange}
//                 className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 min="0"
//               />
//             </div>
//           ))}

//           {/* Date of Birth & Date of Joining */}
//           {["dateofbirth", "dateofjoining"].map((field, index) => (
//             <div key={index}>
//               <label className="block text-sm font-medium text-gray-700 capitalize">
//                 {field.replace(/([A-Z])/g, " $1")}
//               </label>
//               <input
//                 type="date"
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleChange}
//                 className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           ))}

//           {/* Buttons */}
//           <div className="flex justify-end space-x-2">
//             <button type="button" onClick={handleClose} className="bg-gray-500 text-white px-5 py-2 rounded hover:bg-gray-600">
//               Close
//             </button>
//             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 roundedbg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
//               Add
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
