import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="text-red-500">
        Axios and React Router has been installed....
      </h1>
      <Link to="/profile">profile</Link>
    </div>
  );
}
