import Image from "next/image";
import MainCard from '@/components/main'
import Fact from '@/components/fact'
import Card from '@/components/containers/Card'

export default function Home() {
  return (
    // <main className="bg-[#ffeade] flex min-h-screen flex-col items-center justify-between p-24">
    <main className="bg-[#ffeade] text-black flex min-h-screen flex-col mt-30">
      <Fact />
      <MainCard>
        <Card>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ipsum veritatis, repudiandae deserunt eius, praesentium doloribus ex rem, soluta corporis error maiores minus! Veniam vel ducimus natus quibusdam ipsam voluptatum doloremque neque, esse sed, deserunt unde? Ea in iure aspernatur itaque temporibus possimus distinctio pariatur dolor eligendi perferendis quos delectus voluptas error sapiente sequi maiores amet laudantium cum eius excepturi repudiandae, dolorem ratione minus.</p>
        </Card>
        <div className='sm:grid sm:grid-cols-2 sm:gap-10 w-full'>
          <Card title = "TOP SONGS"/>

          <Card title= "TOP ARTISTS"/>
        </div>
      </MainCard>
    </main>
  );
}
