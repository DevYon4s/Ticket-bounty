import Link from "next/link";
import { tickets } from "@/path";
const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Tickets</h1>
      <Link className="mt-4 text-lg" href={tickets()}>
        Go to tickets
      </Link>
    </div>
  );
}

export default Home;
