import Link from "next/link";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
        <div>
          <Link className="border-2 border-solid" href="/signin">
            sign in
          </Link>
        </div>
        <br />
        <div>
          <Link className="border-2 border-solid" href="/signup">
            sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
