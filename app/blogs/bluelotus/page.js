// import React from "react";
// import Image from "next/image";
// import Footer from "@/app/components/Footer";
// import Link from "next/link";

// const Bluelotusblog = () => {
//   return (
//     <div className="max-w-xl mx-auto py-12 px-4 text-left font-serif">
//       <Link href="/filmin">
//         <h2 className="font-semibold text-2xl text-left w-full">&larr;</h2>
//      </Link>
//       <p className="mb-4">
//         May 28, 2025<br />
//         Diaries<br />
//         Blue Lotus &ndash; 8-Page Teaser<br />
//         by Motaz H Matar
//       </p>
//       <Image src="/blueLotus.jpg" width={500} height={700} alt="Blue Lotus" className="rounded mb-6" />
//       <p className="mb-6">
//         Story originally written by M.H. Matar. Illustrated by Luka Japaridze. All rights reserved.<br /><br />
//         &copy; 2025 M.H. Matar &amp; Luka Japaridze. No part of this work may be reproduced without permission.<br /><br />
//         What if your favorite movie wasn&apos;t just a movie? What if it was a portal to a forgotten golden age, and a chance to rewrite your fate?<br /><br />
//         The Blue Lotus of Cairo is a nostalgic, time-bending, metaphysical love letter to Egypt&apos;s cinematic golden age. It follows Ali, a devoted moviegoer obsessed with an old black-and-white film starring Abdel Halim Hafez. When a mysterious ticket master hands him a blue lotus &mdash; a ticket to the past &mdash; Ali is thrust into 1960s Cairo, where he finds himself on the set of his beloved film. But the past isn&apos;t a polished reel of memories; it&apos;s a volatile, fragile world on the cusp of revolution and war.<br /><br />
//         Caught between the fading glamour of Egypt&apos;s cultural heyday and the brewing Six-Day War, Ali blurs the lines between observer and participant. As he tries to preserve the sanctity of the movie he loves &mdash; and perhaps his own existence &mdash; he realizes that nostalgia is a dangerous drug, and sometimes the only way forward is to let the past rest.<br /><br />
//         Visually lush, emotionally rich, and thematically timeless, The Blue Lotus of Cairo is about obsession, memory, the impermanence of beauty, and the existential ache of witnessing a golden age slip away. A speculative historical drama with metaphysical overtones, it speaks to anyone who&apos;s ever wanted to live inside their favorite story &mdash; and been haunted by what that might cost.<br /><br />
//       </p>
//       <div className="border-t border-gray-600">
//         <p>
//           For the first time, I'm sharign the first 8 pages of my book, Blue Lotus.
//           Please enjoy!
//         </p>
//         <Link href="/bluelotus.pdf" target="_blank" download >
//           <button className="mt-4 px-6 py-2 bg-gray-500 text-white rounded hover:bg-black">
//             Download PDF
//           </button>
//         </Link>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Bluelotusblog;

import React from "react";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const Bluelotusblog = () => {
  return (
    <main className="min-h-screen bg-white text-black font-serif px-6 py-16 flex flex-col items-center leading-normal text-lg">
      <div className="max-w-3xl w-full mx-auto">

        {/* Back arrow */}
        <div className="mb-8 text-center">
          <Link href="/filmin" className="text-2xl font-semibold hover:underline">
            &larr;
          </Link>
        </div>

        {/* Blog Heading */}
        <h2 className="font-semibold text-3xl text-center mb-3">
          Blue Lotus – 8-Page Teaser
        </h2>
        <p className="text-sm text-gray-700 text-center mb-8">
          May 28, 2025 <br />
          Diaries <br />
          by Motaz H Matar
        </p>

        {/* Featured Image */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/blueLotus.jpg"
            width={500}
            height={700}
            alt="Blue Lotus"
            className="rounded"
          />
        </div>

        {/* Main Content */}
        <p className="whitespace-pre-line mb-12 text-left">
          Story originally written by M.H. Matar. Illustrated by Luka Japaridze. All rights reserved.

          © 2025 M.H. Matar & Luka Japaridze. No part of this work may be reproduced without permission.

          What if your favorite movie wasn&apos;t just a movie? What if it was a portal to a forgotten golden age, and a chance to rewrite your fate?

          The Blue Lotus of Cairo is a nostalgic, time-bending, metaphysical love letter to Egypt&apos;s cinematic golden age. It follows Ali, a devoted moviegoer obsessed with an old black-and-white film starring Abdel Halim Hafez. When a mysterious ticket master hands him a blue lotus — a ticket to the past — Ali is thrust into 1960s Cairo, where he finds himself on the set of his beloved film. But the past isn&apos;t a polished reel of memories; it&apos;s a volatile, fragile world on the cusp of revolution and war.

          Caught between the fading glamour of Egypt&apos;s cultural heyday and the brewing Six-Day War, Ali blurs the lines between observer and participant. As he tries to preserve the sanctity of the movie he loves — and perhaps his own existence — he realizes that nostalgia is a dangerous drug, and sometimes the only way forward is to let the past rest.

          Visually lush, emotionally rich, and thematically timeless, The Blue Lotus of Cairo is about obsession, memory, the impermanence of beauty, and the existential ache of witnessing a golden age slip away. A speculative historical drama with metaphysical overtones, it speaks to anyone who&apos;s ever wanted to live inside their favorite story — and been haunted by what that might cost.
        </p>

        {/* Download Section */}
        <div className="pt-6 text-center">
          <p>
            For the first time, I'm sharign the first 8 pages of my book, Blue Lotus.
            Please enjoy!
          </p>
          <Link href="/bluelotus.pdf" target="_blank" download>
              <p className="hover:underline">Download PDF</p>
          </Link>
        </div>

        {/* Separator */}
        <div className="flex justify-center my-12">
          <Image
            src="/sep.png"
            width={80}
            height={30}
            alt="separator"
            className="h-6 w-auto"
          />
        </div>

        {/* Footer */}
        <div id="footer">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Bluelotusblog;
