import { Stars } from "../components/Stars.tsx";

type Course = {
  course_prefix: string;
  course_code: number;
  course_title: string;
  average_stars: number;
  total_reviews: number;
  offered_terms: string[];
};

export function Card({ course }: { course: Course }) {
  return (
    <div className="w-84 flex h-52 flex-col rounded-xl p-6 shadow-lg">
      <header className="mb-2 flex justify-between text-2xl font-bold">
        <h3>{course.course_prefix + course.course_code}</h3>
        <Stars stars={course.average_stars} reviews={course.total_reviews} />
      </header>
      <p className="text-sm">{course.course_title}</p>
      <div className="mt-auto inline-flex gap-2">
        {course.offered_terms.map((name) => (
          <span className="rounded-xl bg-cyan-100 px-2 py-1 text-xs">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
