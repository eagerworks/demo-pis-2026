import ItemsList from "./_components/ItemsList";
import { Suspense } from "react";
import Header from "./_components/Header";
import Loading from "~/app/_components/Loading";

export default async function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={<Loading />}>
        <Header />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <ItemsList />
      </Suspense>
    </div>
  );
}
