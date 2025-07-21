import Link from "next/link";
import { tickets } from "@/path";
import { Heading } from "@/components/heading";
const Home = () => {
  return (
    <>
      <Heading title="Home" description="start here" />
      <div className="flex-1 flex flex-col items-center gap-y-4">
        <Link className="mt-4 text-lg" href={tickets()}>
          Go to tickets
        </Link></div>
    </>
  );
}

export default Home;
