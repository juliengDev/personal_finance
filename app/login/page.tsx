import type { Metadata } from "next";
import Login from "@/components/Login";
import { getBalance, getBudget, getTransactions, getUsers } from "../_lib/data-service";
// import ErrorTest from "./ErrorTest";

export const metadata: Metadata = {
  title: "Login",
};

async function Page() {
  const [balance, budget, transactions, users] = await Promise.all([getBalance(), getBudget(), getTransactions(), getUsers()]);
  
  console.log(balance, budget, transactions, users);

  return (
    <section className="flex  flex-1 flex-col items-center">
      {/* <ErrorTest /> */}
      <header className="py-6 bg-grey-900 w-full mb-[10.5rem] rounded-b-lg">
        <img className="mx-auto" src="/images/logo/logo-large.svg" alt="logo finance" width={121} height={22} />
      </header>
      <main className="min-w-[343px] bg-white rounded-xl">
        <Login />
      </main>
    </section>
  );
}

export default Page;
