'use client'

import Breadcrumbs from '@/components/Breadcrumbs';
import React from 'react';
import { Breadcrumb } from '@/components/breadcrumb';
import { Separator } from "@/components/ui/separator"
import { useTheme } from 'next-themes';
import Image from 'next/image';


const Page = () => {
  const { theme } = useTheme()

  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', href: '/' },
    { label: 'Gaming', href: '/Gaming' },
    { label: "Link's Awakening", href: '/Gaming/LinksAwakening' },
  ];

  return (
    <section
      className={`flex flex-col gap-5 w-full ml-0 pl-4`}
    >
      <div>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <Breadcrumbs {...breadcrumb} />
            {index < breadcrumbs.length - 1 && <span> &gt; </span>}
          </React.Fragment>
        ))}
      </div>

      <h1 className='text-3xl font-bold text-center w-full'>
        Zelda Link&apos;s Awakening
      </h1>
      <Separator className={`w-full bg-${theme === 'light' ? 'black' : 'white'}`}/>
      <Image src='/Images/ZeldaLA/ZeldaLABannerArt.jpeg' alt='Zelda image' width={800} height={800} className='mx-auto' style={{ borderRadius: '10px' }}/>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 200px)' }}/>
      <p className='ml-32 mr-32 text-center'>
        Zelda Link&apos;s Awakeing is the first Zelda game that I have ever played and therefore my opinion on the game wont be one compared to any of the other Zelda games and as a result may change in the future when i do play some others.
        Anyway, I hope that you can enjoy reading through my review of the game as I play through. Beware, this contains spoilers for the game.
      </p>

      {/* Exploring the Town */}
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h1 className='text-xl font-bold text-center w-full'>
        Section 1 : Exploring the Town
      </h1>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>
        The Game initially opens up with an amazing cutscene -describe it in better words how it looks- that got me hooked on the story of the game of the bat. The chosen art style and consequential?? situation that Link was in was intriguing??.
        This was then closely followed by a flash of light and a cut to the beach where everything had become cartoonish. 
        <div className='p-5'><Image src='/Images/ZeldaLA/image1.png' alt='Zelda image' width={800} height={800} className='mx-auto' style={{ borderRadius: '10px' }}/></div>
        After setting up my player character, we wake up in the house of the lady who found us on the beach and another funky looking lad named Tarin. When talking to him, he gives us our shield and also tells us to explore the beach as there may be more items on the beach so I head there.  
        <div className='p-5'><Image src='/Images/ZeldaLA/image2.png' alt='Zelda image' width={800} height={800} className='mx-auto' style={{ borderRadius: '10px' }}/></div>
        After leaving the house though, I decide to explore a little around the town and find a BowWow which was a suprise?? and visited a couple of the houses but found nothing interesting.
        I then went down to the beach and fell into the holes a few times as I was getting hang of the controls and understanding the environment whilst trying to avoid the enemies. Eventually I found the sword picked it up and went onto slaying the enemies that had previously overthrown me.
        However just before that an owl, lets call him Tim, came down and spoke to me, telling me that I needed to wake the wind fish to be able to leave the island and to head into the mysterious forest.
        <div className='p-5'><Image src='/Images/ZeldaLA/image3.png' alt='Zelda image' width={800} height={800} className='mx-auto' style={{ borderRadius: '10px' }}/></div>
        Instead I spent about an hour wandering around exploring the island and slaying different enemies, building up my gems which I though seemed to be a sparse currency so needed to hold onto them.
        I then found the claw machine and spent all of the gems that I had found on trying to win the different items that it offered. Once I ran out, I went to get more and spent all of them too. After I eventually gave up cause I sucked, I headed to the mysterious forest to battle the beasts.
        <div className='p-5'><Image src='/Images/ZeldaLA/image4.png' alt='Zelda image' width={800} height={800} className='mx-auto' style={{ borderRadius: '10px' }}/></div>
        After completing this first part of the game, I&apos;ve really enjoyed the art style and storyline so far even thought I have only just started. 
        I&apos;m looking forward to playing more of the game and seeing what else it has to offer.   
      </p>

      {/* The Mysterious Forest */}
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h2 className='font-bold text-center w-full'>
        Section 2 : The Mysterious Forest
      </h2>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>

      </p>
{/*
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h2 className='font-bold text-center w-full'>
        Section 2 : Tail Cave
      </h2>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>

      </p>

      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h2 className='font-bold text-center w-full'>
        Section 3 : Save BowWow!
      </h2>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>

      </p>

      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h2 className='font-bold text-center w-full'>
        Section 4 : The Sword and The Forest
      </h2>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>

      </p>

      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h2 className='font-bold text-center w-full'>
        Section 5 : The Sword and The Forest
      </h2>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>

      </p>

      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h2 className='font-bold text-center w-full'>
        Section 6 : The Sword and The Forest
      </h2>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>

      </p>

      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h2 className='font-bold text-center w-full'>
        Section 7 : The Sword and The Forest
      </h2>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>

      </p>

      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h2 className='font-bold text-center w-full'>
        Section 8 : The Sword and The Forest
      </h2>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>

      </p>

      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h2 className='font-bold text-center w-full'>
        Section 9 : The Sword and The Forest
      </h2>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>

      </p>

      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h2 className='font-bold text-center w-full'>
        Section 10 : The Sword and The Forest
      </h2>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>

      </p>

      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h2 className='font-bold text-center w-full'>
        Section 11 : The Sword and The Forest
      </h2>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>

      </p>

      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h2 className='font-bold text-center w-full'>
        Section 12 : The Sword and The Forest
      </h2>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>

      </p>

      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h2 className='font-bold text-center w-full'>
        Section 13 : The Sword and The Forest
      </h2>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>

      </p>

      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h2 className='font-bold text-center w-full'>
        Section 14 : The Sword and The Forest
      </h2>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>

      </p>

      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h2 className='font-bold text-center w-full'>
        Section 15 : The Sword and The Forest
      </h2>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>

      </p>

      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h2 className='font-bold text-center w-full'>
        Section 16 : The Sword and The Forest
      </h2>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>

      </p>

      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h2 className='font-bold text-center w-full'>
        Section 17 : The Sword and The Forest
      </h2>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>

      </p>

      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 300px)' }}/>
      <h2 className='font-bold text-center w-full'>
        Section 18 : The Sword and The Forest
      </h2>
      <Separator className={`mx-auto bg-${theme === 'light' ? 'black' : 'white'}`} style={{ width: 'calc(100% - 900px)' }}/>
      <p className='ml-32 mr-32 text-center'>

      </p>
*/}

    </section>
  )
}

export default Page