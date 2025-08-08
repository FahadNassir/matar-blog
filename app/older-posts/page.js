
'use client';

import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Olderblogs() {
  return (
    <main className="min-h-screen bg-white text-black font-serif px-6 py-16 flex flex-col items-center text-lg leading-normal">
      <div className="max-w-3xl w-full mx-auto">
        <div className="text-center">
            {/* Home navigation arrow */}
            <Link href="/" className="inline-block mb-6 text-2xl hover:underline" aria-label="Back to home">&larr;</Link>
            {/* Blog Title */}
            <div className="flex justify-center my-8">
                <Image src="/sep.png" alt="separator" width={80} height={30} className="h-6 text-gray-800 w-auto" />
            </div>
        </div>

        {/* Blog content will be fetched and inserted here */}
        <div className="space-y-10 mb-10">

          <div className="text-left p-6">
            <h3 className="font-bold text-lg mb-1 text-center">Million Monkeys, Million Typewriters</h3>
            <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
            <p className="whitespace-pre-line text-base">
              It&apos;s about the magic and randomness of the universe. I want to see the beauty, the magic, and the randomness of writing and storytelling. It&apos;s like opening a world&mdash;unfolding an infinite stream of rivers and clouds.

              Loving life, finding peace in words. Just letting those monkeys dance on the typewriters, unveiling what&apos;s in our souls. Unveiling the temporary time we have on earth&mdash;goodness and love, the precious things we hold as humans. Why were we created? Why must we approach life with a sense of unurgency&mdash;moment to moment?

              We de-stress. We live. We enjoy life. We savor the luxury of not going anywhere&mdash;just our hands moving on the page. Just our beautiful million monkeys, telling us: fuck money, fuck pride, fuck fame.
              We are here to create the dance for you.
              You have no idea. You never know. God has a plan for you. God brought us here to give you peace, joy, and love.

              Help us dance a million times.
              Help your soul be where it needs to be.
            </p>
            <div className="flex justify-center mt-4 text-gray-500 gap-4 w-full items-center">
              <p className="text-center">Jun 25, 2025</p>  
              <p className="text-center">Add Comment</p>
            </div>
          </div>

          <div className="flex justify-center">
              <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
          </div>

          <div className="text-left p-6">
            <h3 className="font-bold text-lg mb-1 text-center">No Summer</h3>
            <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
            <p className="whitespace-pre-line text-base">
              You don&apos;t always have to expect summer during summer. Sometimes, winter arrives unexpectedly, catching you idle or heading towards an uphill climb. But the weather doesn&apos;t matter&mdash;sometimes, you simply have to endure hardship, the uncomfortable conditions that make you human. These are the experiences that teach us the truth: verily, after hardship comes ease.<br /><br />
              Writing, as a literary device, is a form of selfless expression&mdash;but it can also be demonic, driven by the most mysterious and unspoken rules. How do you write about injustice when all you long for is fairness? How do you climb a mountain when you wish to stay at the bottom of the hill? Or embrace summer when winter insists on making its presence felt? It&apos;s okay&mdash;really okay&mdash;to touch the rain or feel the sting of hail, knowing they will eventually fade into oblivion.<br /><br />
              Life is about stepping into discomfort, trying new things, doing the impossible, taking risks, and sometimes getting punched in the face. Writing is like an illness that paradoxically rewards us with health&mdash;you can&apos;t truly be healthy without first experiencing sickness. You can&apos;t awaken your inner human without first confronting your inner demon. And you can&apos;t fully appreciate joy without shedding your tears, or love without navigating through moments of self-hate.<br /><br />
              Writing is an omen of your complete humanity&mdash;a glimpse of the self you hope to embody, so you don&apos;t lose yourself and become a mechanical being.
            </p>
            <div className="flex justify-center mt-4 text-gray-500 gap-4 w-full items-center">
              <p className="text-center">May 28, 2025</p>  
              <p className="text-center">Add Comment</p>
            </div>
          </div>

          <div className="flex justify-center">
              <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
          </div>

          <div className="text-left p-6">
            <h3 className="font-bold text-lg mb-1 text-center">Blue Lotus &ndash; 8-Page Teaser</h3>
            <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
            <p className="whitespace-pre-line text-base">
              <Image src="/blueLotus.jpg" width={600} height={900} alt="blue Lotus" className="mx-auto w-full h-auto mb-4"/>
              Story originally written by M.H. Matar. Illustrated by Luka Japaridze. All rights reserved.<br /><br />
              &copy; 2025 M.H. Matar &amp; Luka Japaridze. No part of this work may be reproduced without permission.<br /><br />
              What if your favorite movie wasn&apos;t just a movie? What if it was a portal to a forgotten golden age, and a chance to rewrite your fate?<br /><br />
              The Blue Lotus of Cairo is a nostalgic, time-bending, metaphysical love letter to Egypt&apos;s cinematic golden age. It follows Ali, a devoted moviegoer obsessed with an old black-and-white film starring Abdel Halim Hafez. When a mysterious ticket master hands him a blue lotus &mdash; a ticket to the past &mdash; Ali is thrust into 1960s Cairo, where he finds himself on the set of his beloved film. But the past isn&apos;t a polished reel of memories; it&apos;s a volatile, fragile world on the cusp of revolution and war.<br /><br />
              Caught between the fading glamour of Egypt&apos;s cultural heyday and the brewing Six-Day War, Ali blurs the lines between observer and participant. As he tries to preserve the sanctity of the movie he loves &mdash; and perhaps his own existence &mdash; he realizes that nostalgia is a dangerous drug, and sometimes the only way forward is to let the past rest.<br /><br />
              Visually lush, emotionally rich, and thematically timeless, The Blue Lotus of Cairo is about obsession, memory, the impermanence of beauty, and the existential ache of witnessing a golden age slip away. A speculative historical drama with metaphysical overtones, it speaks to anyone who&apos;s ever wanted to live inside their favorite story &mdash; and been haunted by what that might cost.<br /><br />
              For the first time, I&apos;m sharing the opening 8 pages of my graphic novel, Blue Lotus.<br /><br />
              Enjoy the journey.
            </p>
            <div className="flex justify-center mt-4 text-gray-500 gap-4 w-full items-center">
              <p className="text-center">May 28, 2025</p>  
              <p className="text-center">Add Comment</p>
            </div>
          </div>

          <div className="flex justify-center">
              <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
          </div>

          <div className="text-left p-6">
            <h3 className="font-bold text-lg mb-1 text-center">That Silence Saved Your Soul</h3>
            <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
            <p className="whitespace-pre-line text-base">
              On the boat in Phi Phi Island, I thought I was going crazy. How did I get here?<br />
              For days I couldn&apos;t sleep&mdash;actually, even last night I barely slept. I heard my heart pounding in my ears, an endless, bothersome sensation that made me want to cry. I placed my hand on my chest and tried to close my eyes. Oh, how blessed we are when we fall into the flow of perfect rhythm&mdash;but is it really perfect? Is it truly sure?<br /><br />
              Think about what it is that triggers your worry. I&apos;m not saying anxiety is good, but doubt is essential to survival. Without doubt, there&apos;s no awakening.<br /><br />
              I felt like I had hit rock bottom. I had lost my drive to create, to write. This isn&apos;t some plea for sympathy&mdash;I&apos;m fully aware of where I stand. It&apos;s just my way of trying to understand what the hell happened. The boat moved fast, and I closed my eyes. Around me were a group of Australian guys, a German, and some girls chatting nonstop, all taking photos in their swimsuits&mdash;probably for Instagram. But I digress. What I couldn&apos;t ignore was the crashing sound of the engine against the water, layered with voices&mdash;people talking and talking and talking. Why is silence so underrated?<br /><br />
              No one wants to hear silence. Why would they? In its truest form, silence is the perfect antidote to excitement. Buddha sat under a tree, Muhammad found solitude in a cave, and Jesus withdrew to a mountain. Silence is not a void&mdash;it&apos;s a necessity in a noisy world. Are we living through a financial collapse? World War III? Have we completely lost touch with one another?<br /><br />
              I opened my eyes for a few seconds, and the sense of oppression around me moved slowly through my awareness until I closed them again. I kept thinking about how stress had wrecked me. Why would I ever choose a noisy city over the stillness of nature? Why would I voluntarily give up silence?<br /><br />
              To be in the chaos when I could cleanse my soul in quiet? I thought about how much I needed to write, to run, to simply exist. But I felt hopeless, like I no longer had the faith to believe in anything. I felt like I was being pulled out of myself, but I didn&apos;t know what scared me. Everything? Nothing?<br /><br />
              When we returned to the harbor, I felt different. Changed. I wasn&apos;t completely myself&mdash;I was tired, still weighed down&mdash;but there was a calmness that hadn&apos;t been there before. The anxiety had dissolved, like sweat rising through my skin to cool me down and let me breathe.<br /><br />
              I was regulating again, adjusting my internal temperature, and for the first time in a long while, I felt alive&mdash;grounded. Not excited, but quietly grateful that I existed in a universe full of contradictions and complications. I had needed silence, and I found it&hellip; or maybe I didn&apos;t. I still wasn&apos;t sure.<br /><br />
              The next day, my cousin showed me a secret spot&mdash;a cliff overlooking Paradise Beach. The water below sparkled in the sunlight, and I sat there for just an hour, but it felt like time had stopped.<br /><br />
              I want to be a better writer, a better runner, a better father, a better husband&mdash;but what does that even mean? If this place, this moment, is my Paradise Beach, my personal cliff, then what more do I really need? Should I respond to the beauty of the moment by diving off that cliff? No. I decided to return, to continue. No fear. No horror. There&apos;s a metaphor here somewhere: the farther you drift from yourself, the more you begin to realize that paradise isn&apos;t elsewhere&mdash;it&apos;s within you.<br /><br />
              Yes, you might feel hated. Yes, you might be misunderstood. But you have to accept that the noise you think you want will never bring you peace. It&apos;s okay to make mistakes and to feel utterly exhausted. Just be. Paradise is not lost&mdash;it&apos;s here. You don&apos;t have to be crushed by cliffs or dangle over some dramatic edge to understand its presence. Everything is in motion in this ever-drafting universe&mdash;and so are you. Sometimes you&apos;re taken to places, and other times, you take yourself there.<br /><br />
              We all want to live forever. But anxiety, fear of loss, death, and goodbyes are all part of the deal. Before we go anywhere, we need to do one thing: meditate on the worst-case scenario. The beginning is already behind us&mdash;it happened. The end is inevitable, too. Walk forward with immense stillness. Your goals will shift, your shape may change, but you&apos;ll still be you. Try to stay healthy. Work. Laugh. Live. Just remember&mdash;everything begins, and everything ends.<br /><br />
              And when you do face the end, I hope you carry no regrets. I hope you know you created your own inner paradise. That you stood strong and silent while the rest of the world stayed noisy. That you survived.<br /><br />
              That silence saved your soul.
            </p>
            <div className="flex justify-center mt-4 text-gray-500 gap-4 w-full items-center">
              <p className="text-center">May 27, 2025</p>  
              <p className="text-center">Add Comment</p>
            </div>
          </div>

          <div className="flex justify-center">
              <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
          </div>

          <div className="text-left p-6">
            <h3 className="font-bold text-lg mb-1 text-center">To slip into a dream?</h3>
            <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
            <p className="whitespace-pre-line text-base">
              Everything he thought was real&mdash;was not.<br /><br />
              Except when he slipped into her dreams, making the act of seeing her a dream and a reality.<br /><br />
              He had always believed that love was a black hole.. A smoky cloud. A missed date. Smudged words on paper, ink sinking his nostalgia into unknown territory.<br /><br />
              The link.<br /><br />
              My God, he thought. She clicked it.<br /><br />
              The first reader of his first self-published novel. His first reviewer. Already?<br /><br />
              He had hit publish at midnight. By 5 a.m., unable to sleep, he went for a jog&mdash;content, restless. The orange horizon stretched over a spacious, speciesless desert, whispering something about this stranger star.<br /><br />
              Time zones must have been different. That&apos;s when he slipped into her world. That&apos;s when he met his mysterious number-one fan.<br /><br />
              The ceiling fan above his apartment turned slowly, but the real roof was the open sky. The sun woke him every morning, the fresh air filled his lungs.<br /><br />
              He reached for a pen&mdash;no, two. The inner monologue had to be written now, before it faded. Before it fell beneath the emotional wreckage of routine.<br /><br />
              You slipped into my mind&mdash;had I seen you?You slipped under my fountain pen&mdash;to write you, to meet you.<br /><br />
              The IP address&mdash;a hacker would have to break through the walls, sneak into her bedroom, tuck him there.<br /><br />
              Where was she?<br /><br />
              A traveler? A taxi driver? A pilot?<br /><br />
              He was on his one-way trip to see her.<br /><br />
              Love?
            </p>
            <div className="flex justify-center mt-4 text-gray-500 gap-4 w-full items-center">
              <p className="text-center">May 14, 2025</p>  
              <p className="text-center">Add Comment</p>
            </div>
          </div>

          <div className="flex justify-center">
              <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
          </div>

          <div className="text-left p-6">
            <h3 className="font-bold text-lg mb-1 text-center">Soul mates, unbound.</h3>
            <p className="text-sm text-gray-700 mb-2 text-center">by Motaz H Matar</p>
            <p className="whitespace-pre-line text-base">
              Beyond bounds,<br />
              Unprecedented space and distance.<br />
              Whatever we talked about, we talked about.<br />
              In the lost soul, I felt.<br />
              In a million years, I felt.<br />
              Okay, mysterious one,<br />
              An artist and beyond.<br />
              An angel? A savior?<br />
              Every time we share art, we become two.<br />
              Two is one, and one is none.<br />
              Unconditional, we remain,<br />
              Living art, becoming art.<br />
              Do I know you?<br />
              It feels great to think I know you.
            </p>
            <div className="flex justify-center mt-4 text-gray-500 gap-4 w-full items-center">
              <p className="text-center">May 12, 2025</p>  
              <p className="text-center">Add Comment</p>
            </div>
          </div>

        </div>
        <Link href="/">
            <p className="text-center mb-4"> &larr; Newer Posts</p>
        </Link>
        

        <div className="flex justify-center">
            <Image src="/sep.png" width={80} height={30} alt="separator" className="h-6 text-gray-800 w-auto"/>
        </div>

        <div className="mt-8">
            <Footer />
        </div>
      </div>
    </main>
  );
}
