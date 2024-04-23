import Image from "next/image";
import MainCard from '@/components/main'
import Fact from '@/components/fact'
import Card from '@/components/containers/Card'

import '@/app/animations.css'
const cardProps = {
  titleClass: ' justify-center ',
  main: 'bg-white border border-1 border-gray-100',
  body: 'bg-white'
}

const incomingMessage = {
  titleClass: ' justify-center font-12',
  main: 'justify-center',
}
// const todaySongs =  axios('t_songs)
// const monthSongs = axios('m_songs')


// const todayArtists =  axios('t_artists')
// const monthArtists = axios('m_artists')

export default function Home() {
  return (
    // <main className="bg-[#ffeade] flex min-h-screen flex-col items-center justify-between p-24">
    <main className="bg-[#ffeade] text-black flex min-h-screen flex-col mt-30">
      <Fact />
      <MainCard>
        <Card title="TODAY'S TOP SONG" classes={incomingMessage}>
          <div class="wrapper">
            <div class="marquee">
              <p className="sliding-text truncate font-bold text-ellipsis overflow-hidden text-xl italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <span className="font-extrabold text-orange-500 italic text-sm ">BY </span> Nisi ipsum veritatis.</p>
            </div>
          </div>
        </Card>

        <Card title="TODAY'S TOP SONG" classes={cardProps}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ipsum veritatis, repudiandae deserunt eius, praesentium doloribus ex rem, soluta corporis error maiores minus! Veniam vel ducimus natus quibusdam ipsam voluptatum doloremque neque, esse sed, deserunt unde? Ea in iure aspernatur itaque temporibus possimus distinctio pariatur dolor eligendi perferendis quos delectus voluptas error sapiente sequi maiores amet laudantium cum eius excepturi repudiandae, dolorem ratione minus.</p>
        </Card>
        <div className='sm:grid sm:grid-cols-2 sm:gap-10 w-full'>
          <Card title="TOP SONGS" />

          <Card title="TOP ARTISTS" />
        </div>
      </MainCard>
    </main >
  );
}
