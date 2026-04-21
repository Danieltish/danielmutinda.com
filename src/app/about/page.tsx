export default function About() {
  return (
    <div className="container mx-auto p-8 max-w-4xl pt-20">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
        About Me
      </h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg leading-7 [&:not(:first-child)]:mt-6">
          Hello! I'm Daniel Mutinda. Welcome to my personal slice of the internet.
        </p>
        <p className="text-lg leading-7 [&:not(:first-child)]:mt-6">
          I'm passionate about building great software and sharing what I learn along the way.
        </p>
      </div>
    </div>
  );
}
