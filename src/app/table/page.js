'use client';
import { useMemo, useState } from 'react';

const allUsers = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  age: 20 + (i % 15),
  occupation: ['Engineer', 'Designer', 'Manager', 'Doctor'][i % 4],
}));

export default function Table() {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [search, setSearch] = useState('');

  const filteredUsers = useMemo(() => {
    return allUsers.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalPages = Math.ceil(filteredUsers.length / perPage);
  const start = (currentPage - 1) * perPage;
  const currentUsers = filteredUsers.slice(start, start + perPage);

  const handlePageChange = (dir) => {
    setCurrentPage((prev) => {
      if (dir === 'prev') return Math.max(prev - 1, 1);
      if (dir === 'next') return Math.min(prev + 1, totalPages);
      return prev;
    });
  };

  const handlePerPageChange = (e) => {
    setPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen flex-col gap-[30px]">
      <h1 className="text-2xl">The Table</h1>

      <div className="flex flex-col gap-[15px] max-w-[90%]">
        <input
          type="text"
          placeholder="Search by Name..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border p-[10px] mb-[30px]"
        />

        <table className="border-collapse">
          <thead className="text-[#989898]">
            <tr className="text-left">
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Occupation</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr className="border-b border-[#989898] " key={user.id}>
                <td className="pr-[15px] py-[15px]">{user.id}</td>
                <td className="pr-[15px] py-[15px]">{user.name}</td>
                <td className="pr-[15px] py-[15px]">{user.age}</td>
                <td className="pr-[15px] py-[15px]">{user.occupation}</td>
              </tr>
            ))}
            {currentUsers.length === 0 && (
              <tr className="border-b border-[#989898]">
                <td className="pr-[15px] py-[15px]">No users found</td>
              </tr>
            )}
          </tbody>
        </table>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '15px',
          }}
        >
          <div className="flex gap-[15px] items-center">
            <button
              className="bg-white text-black py-[10px] px-[20px] cursor-pointer rounded-[10px]"
              onClick={() => handlePageChange('prev')}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="bg-white text-black py-[10px] px-[20px] cursor-pointer rounded-[10px]"
              onClick={() => handlePageChange('next')}
              disabled={currentPage === totalPages}
            >
              Next
            </button>

            <div className="flex gap-[5px]">
              <div>
                Page {currentPage} of {totalPages}
              </div>
              <div className="border">
                <select value={perPage} onChange={handlePerPageChange}>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
