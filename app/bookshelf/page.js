// import Link from "next/link";
// import Footer from "../components/Footer";
// import Image from "next/image";

// export default function Bookshelf() {
//   return (
//     <div className="max-w-xl mx-auto py-12 px-4">
//       {/* Home navigation arrow */}
//       <Link href="/" className="inline-block mb-6 text-2xl hover:underline text-center" aria-label="Back to home">&larr;</Link>
//       {/* Bookshelf Title */}
//       <h1 className="text-2xl mb-6 font-semibold text-center">Bookshelf</h1>
//       <div className="space-y-10 mb-10">
//         {/* Blue Lotus */}
//         <div>
//           <p>
//             May 28, 2025<br />
//             Diaries<br />
//             Blue Lotus &ndash; 8-Page Teaser<br />
//             by Motaz H Matar
//           </p>
//           <Image src="/blueLotus.jpg" width={600} height={800} alt="Blue Lotus" />
//           <p>
//             Story originally written by M.H. Matar. Illustrated by Luka Japaridze. All rights reserved.<br /><br />
//             &copy; 2025 M.H. Matar &amp; Luka Japaridze. No part of this work may be reproduced without permission.<br /><br />
//             What if your favorite movie wasn&apos;t just a movie? What if it was a portal to a forgotten golden age, and a chance to rewrite your fate?<br /><br />
//             The Blue Lotus of Cairo is a nostalgic, time-bending, metaphysical love letter to Egypt&apos;s cinematic golden age. It follows Ali, a devoted moviegoer obsessed with an old black-and-white film starring Abdel Halim Hafez. When a mysterious ticket master hands him a blue lotus &mdash; a ticket to the past &mdash; Ali is thrust into 1960s Cairo, where he finds himself on the set of his beloved film. But the past isn&apos;t a polished reel of memories; it&apos;s a volatile, fragile world on the cusp of revolution and war.<br /><br />
//             Caught between the fading glamour of Egypt&apos;s cultural heyday and the brewing Six-Day War, Ali blurs the lines between observer and participant. As he tries to preserve the sanctity of the movie he loves &mdash; and perhaps his own existence &mdash; he realizes that nostalgia is a dangerous drug, and sometimes the only way forward is to let the past rest.<br /><br />
//             Visually lush, emotionally rich, and thematically timeless, The Blue Lotus of Cairo is about obsession, memory, the impermanence of beauty, and the existential ache of witnessing a golden age slip away. A speculative historical drama with metaphysical overtones, it speaks to anyone who&apos;s ever wanted to live inside their favorite story &mdash; and been haunted by what that might cost.<br /><br />
//             For the first time, I&apos;m sharing the opening 8 pages of my graphic novel, Blue Lotus.<br /><br />
//             Enjoy the journey.
//           </p>
//         </div>
//         {/* Chadi Chaplin */}
//         <div>
//           <p>
//             May 12, 2025<br />
//             Books<br />
//             Chadi Chaplin Palestinian Graphic Novel &mdash; Coming Soon<br />
//             by Motaz H Matar<br />
//             Chadi is an amateur comedian, living in a Palestinian refugee camp in the city of Bethlehem, who dreams of becoming a star.
//           </p>
//           <Image src="/chaplin.jpg" width={600} height={800} alt="Chadi Chaplin" />
//           <p>
//             Loose wires hang from the rooftop, catching droplets from the punctured water pipe as Chadi watches the TV switch between an old Charlie Chaplin movie and footage of protests across Palestine. Chadi is an amateur comedian, living in a Palestinian refugee camp in the city of Bethlehem, who dreams of becoming a star. He&apos;s already beloved by the children in the refugee camp who call him Chadi Chaplin. He&apos;s not the only one vying for their attention though.<br /><br />
//             When Lebanese-Canadian TV producer, Lara visits the camp to promote her children&apos;s show, she doesn&apos;t exactly receive the reception she was hoping for. Lara&apos;s attempts to entertain the kids fail miserably. As she watches Chadi charm her target audience, she&apos;s intrigued and eager to use his charisma to capture their attention. Chadi refuses to team up with his competition, ignoring the attraction and chemistry between them.<br /><br />
//             Lara refuses to give up. However, she isn&apos;t used to living under the watchful eye of the Israeli army. One careless flash of light raises the stakes as Chadi becomes Lara&apos;s only chance of escape.<br /><br />
//             Chadi Chaplin is a &mdash;word graphic novel based on a script I wrote about a modern-day Palestinian entertainer who performs as Charlie Chaplin. In 2022, my script reached the final round of the Sharjah Film Platform pitching competition with great reviews, but it was not selected because it would have been too difficult and costly to produce. As my five-year-old son became interested in graphic novels, I realized that this story would be better suited for a book format, resulting in my current graphic novel.
//           </p>
//         </div>
//         {/* Rewriting Forty */}
//         <div>
//           <p>
//             May 12, 2025<br />
//             Books<br />
//             Rewriting Forty Paperback<br />
//             by Motaz H Matar<br />
//             DEDICATION<br /><br />
//             This book is dedicated to those who have journeyed with me through the landscapes of the heart and the mind. Your presence, encouragement, and love have been the guiding light in my creative process.
//           </p>
//           <Image src="/blog4.jpg" width={600} height={800} alt="Rewriting Forty" />
//           <p>
//             To my parents,<br /><br />
//             Your unwavering support and boundless love have provided the foundation upon which I stand. You have instilled in me the values of hard work, resilience, and the beauty of simplicity. This collection is as much yours as it is mine.<br /><br />
//             To my siblings,<br /><br />
//             You have been my first friends and lifelong companions. Your laughter, kindness, and shared memories are woven into the fabric of these poems.<br /><br />
//             To my friends,<br /><br />
//             Thank you for being my sounding board, my critics, and my cheerleaders. Your insights, whether gentle or tough, have helped shape my work into what it is today.<br /><br />
//             Would you accept my invitation<br />
//             to a café in the clouds?<br /><br />
//             Where shall we meet,<br />
//             O sunlight of the evening,<br />
//             faint as our breath?<br /><br />
//             Would you accept<br />
//             my invitation to stop time?<br /><br />
//             Neither time knows us,<br />
//             nor the eternal world.<br /><br />
//             Beyond the house,<br />
//             a small window.<br /><br />
//             What lies beyond it?
//           </p>
//         </div>
//         {/* Akiak */}
//         <div>
//           <p>
//             May 12, 2025<br />
//             Books<br />
//             My First Book Since 2019: Akiak &mdash; Out in 72 Hours<br />
//             by Motaz H Matar<br />
//             It&apos;s been five years since my last book, The Pigeon Whisperer, was published&mdash;five years of stories waiting to be told. And now, finally, one of them is ready.
//           </p>
//           <Image src="/blog3.webp" width={600} height={800} alt="Akiak" />
//           <p>
//             In just 72 hours, Akiak&mdash;a speculative thriller about extinction, survival, and the fight to be heard&mdash;will be available for everyone to read.<br /><br />
//             It begins with a missing wolf.<br /><br />
//             A glass display case at the Akiak Museum&mdash;empty.<br /><br />
//             A biologist named Avery, obsessed with saving the last of the red wolves.<br /><br />
//             A translation device, bridging the gap between human and animal.<br /><br />
//             And a conspiracy so vast, it threatens not just the wolves&mdash;but the balance of the wild itself.<br /><br />
//             Here&apos;s an exclusive excerpt!<br /><br />
//             It was midnight on the tundra, the last night of the universe. Vincent, the detective wolf, broke the news to me. My tears disappeared in the snow beneath my feet. Unlike me, Vincent stood strong. I was a small red wolf, an orphan in the land of the gray. Like the colors of night itself, Vincent&apos;s gray silhouette stood in contrast with the orange gradients of dawn.<br /><br />
//             The news split the moon in half and shredded the heart like massive jaws shred meat. The moon fell to the ground in sparkling shards of divine wakefulness.<br /><br />
//             There was no place in the vicinity for an outcast like me. My four paws swiftly broke the speed of light and the universe, defying physics and my very own identity. Was I Canis rufus on trial, faced with the grand question of fight or flight? My agile body glided, running away from what I dreaded most&mdash;exile!<br /><br />
//             She was the only reason I was there&mdash;the only reason I intruded on the land of the gray wolf. I never thought they&apos;d have mercy on me. She was gone.<br /><br />
//             Eyes glowed in the semi-darkness; howls of agony resounded around me. The sound of a goodbye song&mdash;goodbye to all. Goodbye to Cinnamon?<br /><br />
//             To make sense of Vincent&apos;s words was impossible. I could not believe it, the story of our epic love&mdash;gone. The story of the fizzy cinnamon juice, the scent, her paws, the smooth music at the jazz bar. The angelic sound of her voice, her melodies. It had been surreal, a seamless journey of the night, treading under the moon. A night of many kisses&mdash;an epic love that began prehistory.<br /><br />
//             We had become one soul before we were ever born. But the times of our lives were already over, shortened by cries of agony.<br /><br />
//             I couldn&apos;t sing; Vincent&apos;s words suffocated me. The ground was ice&mdash;my paws scratched the surface looking for mice. The moon, ice. Vice, birthing vice. Was I hunting for food or fools?<br /><br />
//             Vincent caught up to me, his voice sharp, piercing deep.<br /><br />
//             &quot;Run,&quot; he said. The earth vibrated underneath me, ice-breaking tremors.<br /><br />
//             Across the tundra, a shadowy curtain revealed all the other wolves gathered like beasts, turning real wolves into predators and predators into wolves. Where would be my home? The wolves&apos; eyes sparked like yellow flames; a stronger beam emerged. I was afraid to look up and see them, as if they were hallucinations.<br /><br />
//             Vincent spoke. &quot;Your excuses are over. The reason you were here is gone. What else do you have to say?&quot;<br /><br />
//             &quot;I have no place to go &hellip; if I go &hellip;&quot;<br /><br />
//             Vincent interrupted me with a vicious howl.<br /><br />
//             &quot;There&apos;s no place for a Rufus in the land of the Lupus. The gray wolves will torment you until you die. Your red fur will be smudged, and your torn appearance will serve as a lesson to others like you. I won&apos;t be able to help you; no one will.&quot;<br /><br />
//             Vincent winked, giving the wolves a sign to attack me.
//           </p>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Bookshelf() {
  return (
    <main className="min-h-screen bg-white text-black font-serif px-6 py-16 flex flex-col items-center leading-normal text-lg">
      <div className="max-w-3xl w-full mx-auto">
        {/* Back arrow (centered) */}
        <div className="mb-8 text-center">
          <Link href="/" className="text-2xl font-semibold hover:underline" aria-label="Back to home">
            &larr;
          </Link>
        </div>

        {/* Page title */}
        <h1 className="text-3xl font-semibold text-center mb-10">Bookshelf</h1>

         <div className="flex justify-center mb-8">
                 <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
               </div>

        <div className="space-y-12">
          {/* Blue Lotus */}
          <article>
            <header className="text-center mb-4">
              <p className="text-sm text-gray-600">May 28, 2025</p>
              <p className="text-sm text-gray-600">Diaries</p>
              <h2 className="text-2xl font-semibold">Blue Lotus &ndash; 8-Page Teaser</h2>
              <p className="text-sm text-gray-600">by Motaz H Matar</p>
            </header>

            <Image
              src="/blueLotus.jpg"
              width={600}
              height={800}
              alt="Blue Lotus"
              className="rounded mb-6 mx-auto"
            />

            <p className="mb-6 whitespace-pre-line text-left">
              Story originally written by M.H. Matar. Illustrated by Luka Japaridze. All rights reserved.<br /><br />
              &copy; 2025 M.H. Matar &amp; Luka Japaridze. No part of this work may be reproduced without permission.<br /><br />
              What if your favorite movie wasn&apos;t just a movie? What if it was a portal to a forgotten golden age, and a chance to rewrite your fate?<br /><br />
              The Blue Lotus of Cairo is a nostalgic, time-bending, metaphysical love letter to Egypt&apos;s cinematic golden age. It follows Ali, a devoted moviegoer obsessed with an old black-and-white film starring Abdel Halim Hafez. When a mysterious ticket master hands him a blue lotus &mdash; a ticket to the past &mdash; Ali is thrust into 1960s Cairo, where he finds himself on the set of his beloved film. But the past isn&apos;t a polished reel of memories; it&apos;s a volatile, fragile world on the cusp of revolution and war.<br /><br />
              Caught between the fading glamour of Egypt&apos;s cultural heyday and the brewing Six-Day War, Ali blurs the lines between observer and participant. As he tries to preserve the sanctity of the movie he loves &mdash; and perhaps his own existence &mdash; he realizes that nostalgia is a dangerous drug, and sometimes the only way forward is to let the past rest.<br /><br />
              Visually lush, emotionally rich, and thematically timeless, The Blue Lotus of Cairo is about obsession, memory, the impermanence of beauty, and the existential ache of witnessing a golden age slip away. A speculative historical drama with metaphysical overtones, it speaks to anyone who&apos;s ever wanted to live inside their favorite story &mdash; and been haunted by what that might cost.<br /><br />
              For the first time, I&apos;m sharing the opening 8 pages of my graphic novel, Blue Lotus.<br /><br />
              Enjoy the journey.
            </p>
          </article>

          {/* separator */}
          <div className="flex justify-center">
            <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 w-auto" />
          </div>

          {/* Chadi Chaplin */}
          <article>
            <header className="text-center mb-4">
              <p className="text-sm text-gray-600">May 12, 2025</p>
              <p className="text-sm text-gray-600">Books</p>
              <h2 className="text-2xl font-semibold">Chadi Chaplin Palestinian Graphic Novel &mdash; Coming Soon</h2>
              <p className="text-sm text-gray-600">by Motaz H Matar</p>
            </header>

            <Image
              src="/chaplin.jpg"
              width={600}
              height={800}
              alt="Chadi Chaplin"
              className="rounded mb-6 mx-auto"
            />

            <p className="mb-6 whitespace-pre-line text-left">
              Loose wires hang from the rooftop, catching droplets from the punctured water pipe as Chadi watches the TV switch between an old Charlie Chaplin movie and footage of protests across Palestine. Chadi is an amateur comedian, living in a Palestinian refugee camp in the city of Bethlehem, who dreams of becoming a star. He&apos;s already beloved by the children in the refugee camp who call him Chadi Chaplin. He&apos;s not the only one vying for their attention though.<br /><br />
              When Lebanese-Canadian TV producer, Lara visits the camp to promote her children&apos;s show, she doesn&apos;t exactly receive the reception she was hoping for. Lara&apos;s attempts to entertain the kids fail miserably. As she watches Chadi charm her target audience, she&apos;s intrigued and eager to use his charisma to capture their attention. Chadi refuses to team up with his competition, ignoring the attraction and chemistry between them.<br /><br />
              Lara refuses to give up. However, she isn&apos;t used to living under the watchful eye of the Israeli army. One careless flash of light raises the stakes as Chadi becomes Lara&apos;s only chance of escape.<br /><br />
              Chadi Chaplin is a &mdash;word graphic novel based on a script I wrote about a modern-day Palestinian entertainer who performs as Charlie Chaplin. In 2022, my script reached the final round of the Sharjah Film Platform pitching competition with great reviews, but it was not selected because it would have been too difficult and costly to produce. As my five-year-old son became interested in graphic novels, I realized that this story would be better suited for a book format, resulting in my current graphic novel.
            </p>
          </article>

          {/* separator */}
          <div className="flex justify-center">
            <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 w-auto" />
          </div>

          {/* Rewriting Forty */}
          <article>
            <header className="text-center mb-4">
              <p className="text-sm text-gray-600">May 12, 2025</p>
              <p className="text-sm text-gray-600">Books</p>
              <h2 className="text-2xl font-semibold">Rewriting Forty Paperback</h2>
              <p className="text-sm text-gray-600">by Motaz H Matar</p>
            </header>

            <Image
              src="/blog4.jpg"
              width={600}
              height={800}
              alt="Rewriting Forty"
              className="rounded mb-6 mx-auto"
            />

            <p className="mb-6 whitespace-pre-line text-left">
              DEDICATION<br /><br />
              This book is dedicated to those who have journeyed with me through the landscapes of the heart and the mind. Your presence, encouragement, and love have been the guiding light in my creative process.<br /><br />
              To my parents,<br /><br />
              Your unwavering support and boundless love have provided the foundation upon which I stand. You have instilled in me the values of hard work, resilience, and the beauty of simplicity. This collection is as much yours as it is mine.<br /><br />
              To my siblings,<br /><br />
              You have been my first friends and lifelong companions. Your laughter, kindness, and shared memories are woven into the fabric of these poems.<br /><br />
              To my friends,<br /><br />
              Thank you for being my sounding board, my critics, and my cheerleaders. Your insights, whether gentle or tough, have helped shape my work into what it is today.<br /><br />
              Would you accept my invitation<br />
              to a café in the clouds?<br /><br />
              Where shall we meet,<br />
              O sunlight of the evening,<br />
              faint as our breath?<br /><br />
              Would you accept<br />
              my invitation to stop time?<br /><br />
              Neither time knows us,<br />
              nor the eternal world.<br /><br />
              Beyond the house,<br />
              a small window.<br /><br />
              What lies beyond it?
            </p>
          </article>

          {/* separator */}
          <div className="flex justify-center">
            <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 w-auto" />
          </div>

          {/* Akiak */}
          <article>
            <header className="text-center mb-4">
              <p className="text-sm text-gray-600">May 12, 2025</p>
              <p className="text-sm text-gray-600">Books</p>
              <h2 className="text-2xl font-semibold">My First Book Since 2019: Akiak &mdash; Out in 72 Hours</h2>
              <p className="text-sm text-gray-600">by Motaz H Matar</p>
            </header>

            <Image
              src="/blog3.webp"
              width={600}
              height={800}
              alt="Akiak"
              className="rounded mb-6 mx-auto"
            />

            <p className="mb-6 whitespace-pre-line text-left">
              In just 72 hours, Akiak&mdash;a speculative thriller about extinction, survival, and the fight to be heard&mdash;will be available for everyone to read.<br /><br />
              It begins with a missing wolf.<br /><br />
              A glass display case at the Akiak Museum&mdash;empty.<br /><br />
              A biologist named Avery, obsessed with saving the last of the red wolves.<br /><br />
              A translation device, bridging the gap between human and animal.<br /><br />
              And a conspiracy so vast, it threatens not just the wolves&mdash;but the balance of the wild itself.<br /><br />
            </p>
          </article>
        </div>

        <div className="flex justify-center mt-12 mb-6">
          <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 w-auto" />
        </div>

        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </main>
  );
}
