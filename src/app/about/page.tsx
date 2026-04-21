export default function About() {
  return (
    <div className="container mx-auto px-6 py-12 md:p-8 max-w-4xl md:pt-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
        About Me
      </h1>
      <div className="prose dark:prose-invert max-w-none text-base sm:text-lg">
        <p className="leading-7 sm:leading-8 [&:not(:first-child)]:mt-6">
          Hello! I'm Daniel Mutinda. Welcome to my personal slice of the internet.
        </p>
        <p className="leading-7 sm:leading-8 [&:not(:first-child)]:mt-6">
          I'm passionate about building great software and sharing what I learn along the way.
        </p>
      </div>
    </div>
  );
}
