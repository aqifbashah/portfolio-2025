export default function About() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-10 py-20">
      <h1 className="text-5xl">About</h1>
      <div className="flex h-full w-5/6 gap-20 px-20">
        <div className="h-full w-full rounded-xl bg-primary"></div>
        <div className="h-full w-full rounded-xl bg-secondary"></div>
      </div>
    </div>
  );
}
