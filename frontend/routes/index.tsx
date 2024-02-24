import courses from "../courses.json" with { type: "json" };
import { Card } from "../components/Card.tsx";
import { MagnifyingGlassOutline } from "preact-heroicons";

export default function Home() {
  return (
    <main className="mx-28 my-8 w-full">
      <p>DevSoc presents</p>
      <h1 className="my-4 text-7xl font-bold text-blue-500">unilectives</h1>
      <p className="mb-10 font-extrabold">
        Your one-stop shop for UNSW course and elective reviews.
      </p>
      <div className="my-2 flex gap-4 rounded border-2 border-indigo-400 p-1.5 text-sm text-indigo-400">
        <MagnifyingGlassOutline className="h-6 w-6" />
        <input
          type="text"
          className="grow placeholder-indigo-400"
          placeholder="Search for a course e.g. COMP1511"
        />
      </div>
      <select className="border-1 my-2 w-52 rounded-md border-gray-400 bg-white px-4 py-2 text-gray-400 shadow-md">
        <option value="">Sort by</option>
      </select>

      <div className="flex flex-wrap justify-between gap-12">
        {courses.map((course) => (
          <Card course={course} />
        ))}
      </div>
    </main>
  );
}
