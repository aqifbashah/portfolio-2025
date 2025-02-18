export default function Experience() {
  const experiences = [
    { year: "2020" },
    { year: "2021" },
    { year: "2022" },
    { year: "2024" },
    { year: "current" },
  ];

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h1 className="text-5xl">Experience</h1>
      <div className="relative z-0 w-full max-w-4xl">
        {/* Horizontal Line */}
        <div className="h-1 w-full rounded-full bg-primary"></div>
        {/* Markers */}
        <div className="absolute inset-0 flex w-full items-center justify-between">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="h-4 w-4 rounded-full bg-secondary"></div>
              <span className="absolute left-1/2 top-6 -translate-x-1/2 text-sm">
                {exp.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
