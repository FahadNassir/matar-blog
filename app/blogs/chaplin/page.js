import React from "react";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const Chaplinblog = () => {
  return (
    <div className="max-w-xl mx-auto py-12 px-4 text-left font-serif">
      <Link href="/filmin">
       <h2 className="font-semibold text-2xl text-left w-full">&larr;</h2>
      </Link>
      <p className="mb-4">
        May 12, 2025<br />
        Books<br />
        Chadi Chaplin Palestinian Graphic Novel &mdash; Coming Soon<br />
        by Motaz H Matar<br />
        Chadi is an amateur comedian, living in a Palestinian refugee camp in the city of Bethlehem, who dreams of becoming a star.
      </p>
      <Image src="/chaplin.jpg" width={500} height={800} alt="Chadi Chaplin" className="rounded mb-6" />
      <p className="mb-6">
        Loose wires hang from the rooftop, catching droplets from the punctured water pipe as Chadi watches the TV switch between an old Charlie Chaplin movie and footage of protests across Palestine. Chadi is an amateur comedian, living in a Palestinian refugee camp in the city of Bethlehem, who dreams of becoming a star. He&apos;s already beloved by the children in the refugee camp who call him Chadi Chaplin. He&apos;s not the only one vying for their attention though.<br /><br />
        When Lebanese-Canadian TV producer, Lara visits the camp to promote her children&apos;s show, she doesn&apos;t exactly receive the reception she was hoping for. Lara&apos;s attempts to entertain the kids fail miserably. As she watches Chadi charm her target audience, she&apos;s intrigued and eager to use his charisma to capture their attention. Chadi refuses to team up with his competition, ignoring the attraction and chemistry between them.<br /><br />
        Lara refuses to give up. However, she isn&apos;t used to living under the watchful eye of the Israeli army. One careless flash of light raises the stakes as Chadi becomes Lara&apos;s only chance of escape.<br /><br />
        Chadi Chaplin is a &mdash;word graphic novel based on a script I wrote about a modern-day Palestinian entertainer who performs as Charlie Chaplin. In 2022, my script reached the final round of the Sharjah Film Platform pitching competition with great reviews, but it was not selected because it would have been too difficult and costly to produce. As my five-year-old son became interested in graphic novels, I realized that this story would be better suited for a book format, resulting in my current graphic novel.
      </p>
      <Footer />
    </div>
  );
};

export default Chaplinblog;