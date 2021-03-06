import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas home" />
      </Head>
      <div>
        <h2>Homepage</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, veniam
          impedit voluptas cum, deleniti molestiae ullam praesentium eum nulla
          accusamus unde mollitia voluptatibus maiores dolorem odit ratione
          repellendus beatae vero ea. Voluptatum necessitatibus repellat dolorum
          blanditiis dolores consequuntur in vel, rem sunt id voluptates fuga
          expedita fugit commodi nesciunt asperiores!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, veniam
          impedit voluptas cum, deleniti molestiae ullam praesentium eum nulla
          accusamus unde mollitia voluptatibus maiores dolorem odit ratione
          repellendus beatae vero ea. Voluptatum necessitatibus repellat dolorum
          blanditiis dolores consequuntur in vel, rem sunt id voluptates fuga
          expedita fugit commodi nesciunt asperiores!
        </p>
        <Link href="/ninjas">
          <a className="btn primary large">See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
