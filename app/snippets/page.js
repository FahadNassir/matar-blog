
// import Footer from "../components/Footer";
// import Link from "next/link";
  
// export default function Snippets() {
//   return (
//     <main className="min-h-screen bg-white text-black font-serif px-4 py-12 flex flex-col items-center text-center leading-snug">
//       <div className="text-left w-full"><Link href="/" className="text-2xl font-bold text-left" > &larr; </Link></div>
//       <div className="max-w-2xl w-full mx-auto space-y-12 text-left">
//         <h1 className="text-3xl font-semibold text-center mb-6">Snippets &amp; Reviews</h1>

//         <div className="space-y-6">
//           <p>
//             In the fast-paced debut from Palestinian filmmaker Matar, a pigeon breeder and his friend escape war-torn Syria for Germany. Innocent and naive, Dabbour allows Yasser to draw him into the drug trade, jeopardizing Dabbour&apos;s hopes for a fresh start in Europe...
//           </p>
//           <p className="text-sm text-gray-500 italic">
//             &mdash; Publishers Weekly<br />
//             <a href="https://www.publishersweekly.com/ASINB08DYFN171" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
//               publishersweekly.com
//             </a>
//           </p>

//           <p>
//             &quot;It is a magical book which, nevertheless, raises such important issues such as hope, hopelessness, belonging, war, migration, love, and loss.&quot;
//           </p>
//           <p className="text-sm text-gray-500 italic">
//             &mdash; KGNU Claudia Cragg. KGNU Radio<br />
//             <a href="https://ccragg123.libsyn.com/film-maker-motaz-h-matar-on-his-new-book" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
//               KGNU Interview
//             </a>
//           </p>

//           <p>
//             THE PIGEON WHISPERER by M.H. Matar is an intoxicating literary tale of one refugee&apos;s destiny...
//           </p>
//           <p className="text-sm text-gray-500 italic">
//             &mdash; Madeline Barbush<br />
//             <a href="https://independentbookreview.com/2021/01/15/book-review-the-pigeon-whisperer/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
//               independentbookreview.com
//             </a>
//           </p>

//           <p>
//             I knew The Pigeon Whisperer would be an absolute 5 stars read for me as soon as I completed the first chapter...
//           </p>
//           <p className="text-sm text-gray-500 italic">&mdash; Samama Reza, Goodreads</p>

//           <p>
//             It&apos;s a story of how a man escaped his hometown because of wars and restarted his life as a refugee in a foreign country...
//           </p>
//           <p className="text-sm text-gray-500 italic">&mdash; Nisa, Goodreads</p>

//           <p>
//             Many thanks to Motaz H Matar and Booktasters for providing a copy of this book for an honest review...
//           </p>
//           <p className="text-sm text-gray-500 italic">&mdash; Kathryn, Goodreads</p>
//         </div>
//       </div>
//       <Footer />
//     </main>
//   );
// }

import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Snippets() {
  return (
    <main className="max-w-xl mx-auto py-12 px-4 text-gray-800 font-serif leading-relaxed">
     
      {/* Home navigation arrow */}
      <div className="text-center w-full mb-6">
        <Link href="/" className="text-2xl font-bold hover:underline">
          &larr;
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-semibold text-center mb-8">
        Snippets &amp; Reviews
      </h1>
       {/* Top Separator */}
      <div className="flex justify-center mb-8">
        <Image src="/sep.png" alt="" width={200} height={20} />
      </div>
      {/* Snippets */}
      <div className="space-y-8">
        <div>
          <p className="text-justify mb-2">
            In the fast-paced debut from Palestinian filmmaker Matar, a pigeon
            breeder and his friend escape war-torn Syria for Germany. Innocent
            and naive, Dabbour allows Yasser to draw him into the drug trade,
            jeopardizing Dabbour&apos;s hopes for a fresh start in Europe...
          </p>
          <p className="text-sm text-gray-500 italic">
            &mdash; Publishers Weekly<br />
            <a
              href="https://www.publishersweekly.com/ASINB08DYFN171"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              publishersweekly.com
            </a>
          </p>
        </div>

        {/* Separator between sections */}
        <div className="flex justify-center">
          <Image src="/sep.png" alt="" width={200} height={20} />
        </div>

        <div>
          <p className="text-justify mb-2">
            &quot;It is a magical book which, nevertheless, raises such important
            issues such as hope, hopelessness, belonging, war, migration, love,
            and loss.&quot;
          </p>
          <p className="text-sm text-gray-500 italic">
            &mdash; KGNU Claudia Cragg. KGNU Radio<br />
            <a
              href="https://ccragg123.libsyn.com/film-maker-motaz-h-matar-on-his-new-book"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              KGNU Interview
            </a>
          </p>
        </div>

        <div className="flex justify-center">
          <Image src="/sep.png" alt="" width={200} height={20} />
        </div>

        <div>
          <p className="text-justify mb-2">
            THE PIGEON WHISPERER by M.H. Matar is an intoxicating literary tale
            of one refugee&apos;s destiny...
          </p>
          <p className="text-sm text-gray-500 italic">
            &mdash; Madeline Barbush<br />
            <a
              href="https://independentbookreview.com/2021/01/15/book-review-the-pigeon-whisperer/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              independentbookreview.com
            </a>
          </p>
        </div>

        <div className="flex justify-center">
          <Image src="/sep.png" alt="" width={200} height={20} />
        </div>

        <div>
          <p className="text-justify mb-2">
            I knew The Pigeon Whisperer would be an absolute 5 stars read for me
            as soon as I completed the first chapter...
          </p>
          <p className="text-sm text-gray-500 italic">
            &mdash; Samama Reza, Goodreads
          </p>
        </div>

        <div className="flex justify-center">
          <Image src="/sep.png" alt="" width={200} height={20} />
        </div>

        <div>
          <p className="text-justify mb-2">
            It&apos;s a story of how a man escaped his hometown because of wars and
            restarted his life as a refugee in a foreign country...
          </p>
          <p className="text-sm text-gray-500 italic">&mdash; Nisa, Goodreads</p>
        </div>

        <div className="flex justify-center">
          <Image src="/sep.png" alt="" width={200} height={20} />
        </div>

        <div>
          <p className="text-justify mb-2">
            Many thanks to Motaz H Matar and Booktasters for providing a copy of
            this book for an honest review...
          </p>
          <p className="text-sm text-gray-500 italic">
            &mdash; Kathryn, Goodreads
          </p>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="flex justify-center mt-8 mb-8">
        <Image src="/sep.png" alt="" width={200} height={20} />
      </div>

      <Footer />
    </main>
  );
}
