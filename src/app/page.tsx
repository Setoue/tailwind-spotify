import { Footer } from "@/components/molecules/Footer";
import { Main } from "@/components/molecules/Main";
import { Sidebar } from "@/components/molecules/Sidebar";
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
