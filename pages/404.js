import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div>
      <h2>Oops...</h2>
      <h3>That page cannot be found.</h3>
      <p>
        Go back to the
        <Link href="/">
          <a> Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
