import Announcements from '@/components/Announcements'
import React from 'react'

const Home = () => {
  return (
    <section
      className={`flex size-full flex-col gap-10`}
    >
      <Announcements Announcement='I will be rolling out an update that includes a chat subsystem where users can chat. Located at the bottom of the screen.' active={false}/>
      <h1 className='text-3xl font-bold '>
        Home
      </h1>
      <p>Welcome to Ease Your Mind</p>
      <p>The blog post where you can lose yourself in the world of gaming, movies, tv or projects that i am currently working on.</p>
      <p>The point is just relax and navigate your way to your choice of time wasting??</p>
      <p>I update this blog regularly so hit that star up in your navigation bar to keep up to date since as you can see its not an ideal domain name.</p>
      <p>I will be keeping you up to date with the games that I am playing, giving walkthroughs and reviews as well as any new movies that i see and giving you my opinion on them.</p> 
      <p>Furthermore i&apos;ll keep you up to date with any upcoming projects i am working on and any updates i plan to add to this blog post.</p>
    </section>
  )
}

export default Home