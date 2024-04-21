import Image from "next/image";
import MainCard from '@/components/main'
import Fact from '@/components/fact'

export default function Home() {
  return (
    // <main className="bg-[#ffeade] flex min-h-screen flex-col items-center justify-between p-24">
    <main className="bg-[#ffeade] text-black flex min-h-screen flex-col mt-30">
      <Fact/>
      <MainCard/>
    </main>
  );
}
