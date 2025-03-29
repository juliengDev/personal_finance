import Login from "@/components/Login";

function Page() {
  return (
    <section className="flex min-h-screen flex-1 flex-col items-center">
      <header className="py-6 bg-grey-900 w-full mb-[2.625rem]">
        <img className="mx-auto" src="/images/logo/logo-large.svg" alt="logo finance" width={121} height={22} />
      </header>
      <main className="min-w-[343px] bg-white">
        <Login />
      </main>
    </section>
  );
}

export default Page;
