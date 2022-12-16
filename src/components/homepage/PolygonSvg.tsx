export default function PolygonSvg() {
  return (
    <div className="sm:mr-4">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
        <svg
          className="w-12 h-12"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          />
        </svg>
      </div>
    </div>
  )
}