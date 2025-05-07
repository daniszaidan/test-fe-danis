const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 35 },
  { name: 'Diana', age: 28 },
];

export default function Age() {
  const minPerson = people.reduce((min, p) => (p.age < min.age ? p : min));
  const maxPerson = people.reduce((max, p) => (p.age > max.age ? p : max));

  const sortedByMin = [...people].sort((a, b) => a.age - b.age);
  const sortedByMax = [...people].sort((a, b) => b.age - a.age);

  return (
    <div className="flex justify-center items-center w-full h-screen flex-col gap-[30px]">
      <h1 className="text-2xl">The Age</h1>

      <div className="flex flex-col items-center">
        <p className="text-[17.5px]">
          Min Age:{' '}
          <span>
            {minPerson.name}, {minPerson.age}
          </span>
        </p>
        <p className="text-[17.5px]">
          Max Age:{' '}
          <span>
            {maxPerson.name}, {maxPerson.age}
          </span>
        </p>
      </div>

      <div className="flex gap-[30px]">
        <div className="bg-[#20232A] p-[20px] rounded-[10px]">
          <h2 className="text-[20px] font-bold mb-[15px]">
            Sorted by Min Age (Ascending)
          </h2>
          <ul>
            {sortedByMin.map((person, i) => (
              <li className="text-[17.5px]" key={i}>
                {person.name}, {person.age}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#20232A] p-[20px] rounded-[10px]">
          <h2 className="text-[20px] font-bold mb-[15px]">
            Sorted by Max Age (Descending)
          </h2>
          <ul>
            {sortedByMax.map((person, i) => (
              <li className="text-[17.5px]" key={i}>
                {person.name}, {person.age}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
