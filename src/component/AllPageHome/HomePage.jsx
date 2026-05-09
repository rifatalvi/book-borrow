import React from 'react';
import Hero from './Hero';
import Marquees from './Marquees';
import TopReaders from './TopLeader';
import { User } from 'lucide-react';
import UserTestimonial from './UserTestimonial';

const HomePage = () => {
    return (
       <main className='space-y-16'>
     <section>
        <Hero></Hero>
     </section>
<section>
    <Marquees></Marquees>
</section>
<section>
    <TopReaders></TopReaders>
</section>
       <section>
        <UserTestimonial></UserTestimonial>
       </section>
       </main>
    );
};

export default HomePage;