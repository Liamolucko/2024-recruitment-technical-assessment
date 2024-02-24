import { StarSolid } from "preact-heroicons";

export function Stars({ stars, reviews }: { stars: number; reviews: number }) {
  return (
    <div>
      <div>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <StarSolid
              className={`inline h-6 w-6 ${stars >= i + 0.5 ? "text-purple-400" : "text-gray-300"}`}
            />
          ))}
      </div>
      <p className="text-xs font-light text-gray-500">{reviews} reviews</p>
    </div>
  );
}
