const StatsLoader = () => (
  <div className="flex justify-center w-full p-8 pt-10 animate-pulse">
    <svg viewBox="0 0 175 200" className="hidden text-purple-500 lg:block h-36 h-xl:h-44">
      <polyline
        fill="currentColor"
        id="hexagon"
        points="87,0 174,50 174,150 87,200 0,150 0,50 87,0"
      />
    </svg>
  </div>
);

export default StatsLoader;
