import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-[calc(100vh-60px)] grid place-items-center">
      <div className="p-10 rounded-xl flex flex-col space-y-4 items-center justify-center text-muted-foreground bg-gradient text-white">
        <h1 className="text-4xl flex">⚠️404</h1>
        <p>We couldn&apos;t found the resource you&apos;re looking for!</p>
        <Link
          to="/"
          replace
          className="px-4 py-2 bg-gray-300 text-black rounded-md"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
