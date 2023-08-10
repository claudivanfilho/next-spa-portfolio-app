export default function GenerationsLoader({ size = 9 }) {
  return (
    <div className="grid animate-pulse">
      {new Array(size).fill(0).map((_, index) => (
        <div
          key={`gen-loader-${index}`}
          className="h-16 px-3 py-4 mb-3 bg-purple-100 border-purple-200 rounded-sm shadow-md border-1"
        />
      ))}
    </div>
  );
}
