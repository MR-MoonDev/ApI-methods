import React, { useEffect, useState } from 'react';

const ApiCalling_lec50 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((response) => setData(response));
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">API Calling</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((val) => (
                <tr key={val.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{val.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{val.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{val.username}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{val.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{val.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApiCalling_lec50;
