/*
Previous implementation of the Blog page:
import Link from "next/link";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <Link href="/" className="inline-block mb-6 text-2xl hover:underline" aria-label="Back to home">←</Link>
      <h1 className="text-2xl mb-6 font-semibold">Blog</h1>
      <div className="space-y-3 mb-10">
        <div className="flex items-center w-full">
          <span className="text-left">Million Monkeys, Million Typewriters</span>
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
          <span className="text-right text-gray-500">Jun 25</span>
        </div>
        <div className="flex items-center w-full">
          <span className="text-left">No Summer</span>
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
          <span className="text-right text-gray-500">May 28</span>
        </div>
        <div className="flex items-center w-full">
          <span className="text-left">Blue Lotus – 8-Page Teaser</span>
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
          <span className="text-right text-gray-500">May 28</span>
        </div>
        <div className="flex items-center w-full">
          <span className="text-left">That Silence Saved Your Soul</span>
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
          <span className="text-right text-gray-500">May 27</span>
        </div>
        <div className="flex items-center w-full">
          <span className="text-left">To slip into a dream?</span>
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
          <span className="text-right text-gray-500">May 14</span>
        </div>
        <div className="flex items-center w-full">
          <span className="text-left">Soul mates, unbound.</span>
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
          <span className="text-right text-gray-500">May 12</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
*/

// Minimalist Blog page structure (content to be fetched and inserted here)
// import Link from "next/link";
// import Footer from "../components/Footer";
// import Image from "next/image";

// export default function Blog() {
//   return (
//     <div className="max-w-xl mx-auto py-12 px-4">
//       {/* Home navigation arrow */}
//       <Link href="/" className="inline-block mb-6 text-2xl hover:underline" aria-label="Back to home">←</Link>
//       {/* Blog Title */}
//       <h1 className="text-2xl mb-6 font-semibold">Blog</h1>
//       {/* Blog content will be fetched and inserted here */}
//       <div className="space-y-3 mb-10">
//         {/* TODO: Insert fetched blog post previews here */}
//         <div className="text-gray-400 italic">
//           <p>
//             Jun 25, 2025
// Diaries
// Million Monkeys, Million Typewriters
// by Motaz H Matar
// It’s about the magic and randomness of the universe. I want to see the beauty, the magic, and the randomness of writing and storytelling. It’s like opening a world—unfolding an infinite stream of rivers and clouds.

// Loving life, finding peace in words. Just letting those monkeys dance on the typewriters, unveiling what’s in our souls. Unveiling the temporary time we have on earth—goodness and love, the precious things we hold as humans. Why were we created? Why must we approach life with a sense of unurgency—moment to moment?

// We de-stress. We live. We enjoy life. We savor the luxury of not going anywhere—just our hands moving on the page. Just our beautiful million monkeys, telling us: fuck money, fuck pride, fuck fame.
// We are here to create the dance for you.
// You have no idea. You never know. God has a plan for you. God brought us here to give you peace, joy, and love.

// Help us dance a million times.
// Help your soul be where it needs to be.
//           </p>
//           <p>
//             May 28, 2025
// Diaries
// No Summer
// by Motaz H Matar
// You don’t always have to expect summer during summer. Sometimes, winter arrives unexpectedly, catching you idle or heading towards an uphill climb. But the weather doesn’t matter—sometimes, you simply have to endure hardship, the uncomfortable conditions that make you human. These are the experiences that teach us the truth: verily, after hardship comes ease.

// Writing, as a literary device, is a form of selfless expression—but it can also be demonic, driven by the most mysterious and unspoken rules. How do you write about injustice when all you long for is fairness? How do you climb a mountain when you wish to stay at the bottom of the hill? Or embrace summer when winter insists on making its presence felt? It’s okay—really okay—to touch the rain or feel the sting of hail, knowing they will eventually fade into oblivion.

// Life is about stepping into discomfort, trying new things, doing the impossible, taking risks, and sometimes getting punched in the face. Writing is like an illness that paradoxically rewards us with health—you can’t truly be healthy without first experiencing sickness. You can’t awaken your inner human without first confronting your inner demon. And you can’t fully appreciate joy without shedding your tears, or love without navigating through moments of self-hate.

// Writing is an omen of your complete humanity—a glimpse of the self you hope to embody, so you don’t lose yourself and become a mechanical being.
//           </p>
//           <p>
//             May 28, 2025
// Diaries
// Blue Lotus – 8-Page Teaser
//             <Image src="/blueLotus.jpg" width={600} height={900} alt="blue Lotus"/>
//             Story originally written by M.H. Matar. Illustrated by Luka Japaridze. All rights reserved.


// © 2025 M.H. Matar & Luka Japaridze. No part of this work may be reproduced without permission.

// What if your favorite movie wasn’t just a movie? What if it was a portal to a forgotten golden age, and a chance to rewrite your fate?

// The Blue Lotus of Cairo is a nostalgic, time-bending, metaphysical love letter to Egypt’s cinematic golden age. It follows Ali, a devoted moviegoer obsessed with an old black-and-white film starring Abdel Halim Hafez. When a mysterious ticket master hands him a blue lotus — a ticket to the past — Ali is thrust into 1960s Cairo, where he finds himself on the set of his beloved film. But the past isn't a polished reel of memories; it's a volatile, fragile world on the cusp of revolution and war.

// Caught between the fading glamour of Egypt’s cultural heyday and the brewing Six-Day War, Ali blurs the lines between observer and participant. As he tries to preserve the sanctity of the movie he loves — and perhaps his own existence — he realizes that nostalgia is a dangerous drug, and sometimes the only way forward is to let the past rest.

// Visually lush, emotionally rich, and thematically timeless, The Blue Lotus of Cairo is about obsession, memory, the impermanence of beauty, and the existential ache of witnessing a golden age slip away. A speculative historical drama with metaphysical overtones, it speaks to anyone who's ever wanted to live inside their favorite story — and been haunted by what that might cost.

// For the first time, I'm sharing the opening 8 pages of my graphic novel, Blue Lotus.

// Enjoy the journey.
//           </p>
//           <p>
//             May 27, 2025
// Diaries
// That Silence Saved Your Soul
// by Motaz H Matar

//             On the boat in Phi Phi Island, I thought I was going crazy. How did I get here?
// For days I couldn’t sleep—actually, even last night I barely slept. I heard my heart pounding in my ears, an endless, bothersome sensation that made me want to cry. I placed my hand on my chest and tried to close my eyes. Oh, how blessed we are when we fall into the flow of perfect rhythm—but is it really perfect? Is it truly sure?

// Think about what it is that triggers your worry. I’m not saying anxiety is good, but doubt is essential to survival. Without doubt, there’s no awakening.

// I felt like I had hit rock bottom. I had lost my drive to create, to write. This isn’t some plea for sympathy—I'm fully aware of where I stand. It’s just my way of trying to understand what the hell happened. The boat moved fast, and I closed my eyes. Around me were a group of Australian guys, a German, and some girls chatting nonstop, all taking photos in their swimsuits—probably for Instagram. But I digress. What I couldn’t ignore was the crashing sound of the engine against the water, layered with voices—people talking and talking and talking. Why is silence so underrated?

// No one wants to hear silence. Why would they? In its truest form, silence is the perfect antidote to excitement. Buddha sat under a tree, Muhammad found solitude in a cave, and Jesus withdrew to a mountain. Silence is not a void—it’s a necessity in a noisy world. Are we living through a financial collapse? World War III? Have we completely lost touch with one another?

// I opened my eyes for a few seconds, and the sense of oppression around me moved slowly through my awareness until I closed them again. I kept thinking about how stress had wrecked me. Why would I ever choose a noisy city over the stillness of nature? Why would I voluntarily give up silence?

// To be in the chaos when I could cleanse my soul in quiet? I thought about how much I needed to write, to run, to simply exist. But I felt hopeless, like I no longer had the faith to believe in anything. I felt like I was being pulled out of myself, but I didn’t know what scared me. Everything? Nothing?

// When we returned to the harbor, I felt different. Changed. I wasn’t completely myself—I was tired, still weighed down—but there was a calmness that hadn’t been there before. The anxiety had dissolved, like sweat rising through my skin to cool me down and let me breathe.

// I was regulating again, adjusting my internal temperature, and for the first time in a long while, I felt alive—grounded. Not excited, but quietly grateful that I existed in a universe full of contradictions and complications. I had needed silence, and I found it… or maybe I didn’t. I still wasn’t sure.

// The next day, my cousin showed me a secret spot—a cliff overlooking Paradise Beach. The water below sparkled in the sunlight, and I sat there for just an hour, but it felt like time had stopped.

// I want to be a better writer, a better runner, a better father, a better husband—but what does that even mean? If this place, this moment, is my Paradise Beach, my personal cliff, then what more do I really need? Should I respond to the beauty of the moment by diving off that cliff? No. I decided to return, to continue. No fear. No horror. There’s a metaphor here somewhere: the farther you drift from yourself, the more you begin to realize that paradise isn’t elsewhere—it’s within you.

// Yes, you might feel hated. Yes, you might be misunderstood. But you have to accept that the noise you think you want will never bring you peace. It’s okay to make mistakes and to feel utterly exhausted. Just be. Paradise is not lost—it’s here. You don’t have to be crushed by cliffs or dangle over some dramatic edge to understand its presence. Everything is in motion in this ever-drafting universe—and so are you. Sometimes you're taken to places, and other times, you take yourself there.

// We all want to live forever. But anxiety, fear of loss, death, and goodbyes are all part of the deal. Before we go anywhere, we need to do one thing: meditate on the worst-case scenario. The beginning is already behind us—it happened. The end is inevitable, too. Walk forward with immense stillness. Your goals will shift, your shape may change, but you’ll still be you. Try to stay healthy. Work. Laugh. Live. Just remember—everything begins, and everything ends.

// And when you do face the end, I hope you carry no regrets. I hope you know you created your own inner paradise. That you stood strong and silent while the rest of the world stayed noisy. That you survived.


// That silence saved your soul.


//           </p>
//           <p>
//             May 14, 2025
// Diaries
// To slip into a dream?
// by Motaz H Matar
// Everything he thought was real—was not.

// Except when he slipped into her dreams, making the act of seeing her a dream and a reality.

// He had always believed that love was a black hole.. A smoky cloud. A missed date. Smudged words on paper, ink sinking his nostalgia into unknown territory.

// The link.

// My God, he thought. She clicked it.

// The first reader of his first self-published novel. His first reviewer. Already?

// He had hit publish at midnight. By 5 a.m., unable to sleep, he went for a jog—content, restless. The orange horizon stretched over a spacious, speciesless desert, whispering something about this stranger star.

// Time zones must have been different. That’s when he slipped into her world. That’s when he met his mysterious number-one fan.

// The ceiling fan above his apartment turned slowly, but the real roof was the open sky. The sun woke him every morning, the fresh air filled his lungs.

// He reached for a pen—no, two. The inner monologue had to be written now, before it faded. Before it fell beneath the emotional wreckage of routine.

// You slipped into my mind—had I seen you?You slipped under my fountain pen—to write you, to meet you.

// The IP address—a hacker would have to break through the walls, sneak into her bedroom, tuck him there.

// Where was she?

// A traveler? A taxi driver? A pilot?

// He was on his one-way trip to see her.

// Love?
//           </p>
//           <p>
//             May 12, 2025
// Diaries
// Soul mates, unbound.
// by Motaz H Matar
// Beyond bounds,
// Unprecedented space and distance.
// Whatever we talked about, we talked about.
// In the lost soul, I felt.
// In a million years, I felt.
// Okay, mysterious one,
// An artist and beyond.
// An angel? A savior?
// Every time we share art, we become two.
// Two is one, and one is none.
// Unconditional, we remain,
// Living art, becoming art.
// Do I know you?
// It feels great to think I know you.
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

export default function Blog() {
  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      {/* Home navigation arrow */}
      <Link href="/" className="inline-block mb-6 text-2xl hover:underline" aria-label="Back to home">&larr;</Link>
      {/* Blog Title */}
      <h1 className="text-2xl mb-6 font-semibold">Blog</h1>
      {/* Blog content will be fetched and inserted here */}
      <div className="space-y-3 mb-10">
        <div className="text-gray-800">
          <p>
            Jun 25, 2025<br />
            Diaries<br />
            Million Monkeys, Million Typewriters<br />
            by Motaz H Matar<br />
            It&apos;s about the magic and randomness of the universe. I want to see the beauty, the magic, and the randomness of writing and storytelling. It&apos;s like opening a world&mdash;unfolding an infinite stream of rivers and clouds.<br /><br />
            Loving life, finding peace in words. Just letting those monkeys dance on the typewriters, unveiling what&apos;s in our souls. Unveiling the temporary time we have on earth&mdash;goodness and love, the precious things we hold as humans. Why were we created? Why must we approach life with a sense of unurgency&mdash;moment to moment?<br /><br />
            We de-stress. We live. We enjoy life. We savor the luxury of not going anywhere&mdash;just our hands moving on the page. Just our beautiful million monkeys, telling us: fuck money, fuck pride, fuck fame.<br />
            We are here to create the dance for you.<br />
            You have no idea. You never know. God has a plan for you. God brought us here to give you peace, joy, and love.<br /><br />
            Help us dance a million times.<br />
            Help your soul be where it needs to be.
          </p>
          <p>
            May 28, 2025<br />
            Diaries<br />
            No Summer<br />
            by Motaz H Matar<br />
            You don&apos;t always have to expect summer during summer. Sometimes, winter arrives unexpectedly, catching you idle or heading towards an uphill climb. But the weather doesn&apos;t matter&mdash;sometimes, you simply have to endure hardship, the uncomfortable conditions that make you human. These are the experiences that teach us the truth: verily, after hardship comes ease.<br /><br />
            Writing, as a literary device, is a form of selfless expression&mdash;but it can also be demonic, driven by the most mysterious and unspoken rules. How do you write about injustice when all you long for is fairness? How do you climb a mountain when you wish to stay at the bottom of the hill? Or embrace summer when winter insists on making its presence felt? It&apos;s okay&mdash;really okay&mdash;to touch the rain or feel the sting of hail, knowing they will eventually fade into oblivion.<br /><br />
            Life is about stepping into discomfort, trying new things, doing the impossible, taking risks, and sometimes getting punched in the face. Writing is like an illness that paradoxically rewards us with health&mdash;you can&apos;t truly be healthy without first experiencing sickness. You can&apos;t awaken your inner human without first confronting your inner demon. And you can&apos;t fully appreciate joy without shedding your tears, or love without navigating through moments of self-hate.<br /><br />
            Writing is an omen of your complete humanity&mdash;a glimpse of the self you hope to embody, so you don&apos;t lose yourself and become a mechanical being.
          </p>
          <p>
            May 28, 2025<br />
            Diaries<br />
            Blue Lotus &ndash; 8-Page Teaser<br />
            <Image src="/blueLotus.jpg" width={600} height={900} alt="blue Lotus"/>
            Story originally written by M.H. Matar. Illustrated by Luka Japaridze. All rights reserved.<br /><br />
            &copy; 2025 M.H. Matar &amp; Luka Japaridze. No part of this work may be reproduced without permission.<br /><br />
            What if your favorite movie wasn&apos;t just a movie? What if it was a portal to a forgotten golden age, and a chance to rewrite your fate?<br /><br />
            The Blue Lotus of Cairo is a nostalgic, time-bending, metaphysical love letter to Egypt&apos;s cinematic golden age. It follows Ali, a devoted moviegoer obsessed with an old black-and-white film starring Abdel Halim Hafez. When a mysterious ticket master hands him a blue lotus &mdash; a ticket to the past &mdash; Ali is thrust into 1960s Cairo, where he finds himself on the set of his beloved film. But the past isn&apos;t a polished reel of memories; it&apos;s a volatile, fragile world on the cusp of revolution and war.<br /><br />
            Caught between the fading glamour of Egypt&apos;s cultural heyday and the brewing Six-Day War, Ali blurs the lines between observer and participant. As he tries to preserve the sanctity of the movie he loves &mdash; and perhaps his own existence &mdash; he realizes that nostalgia is a dangerous drug, and sometimes the only way forward is to let the past rest.<br /><br />
            Visually lush, emotionally rich, and thematically timeless, The Blue Lotus of Cairo is about obsession, memory, the impermanence of beauty, and the existential ache of witnessing a golden age slip away. A speculative historical drama with metaphysical overtones, it speaks to anyone who&apos;s ever wanted to live inside their favorite story &mdash; and been haunted by what that might cost.<br /><br />
            For the first time, I&apos;m sharing the opening 8 pages of my graphic novel, Blue Lotus.<br /><br />
            Enjoy the journey.
          </p>
          <p>
            May 27, 2025<br />
            Diaries<br />
            That Silence Saved Your Soul<br />
            by Motaz H Matar<br /><br />
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
          <p>
            May 14, 2025<br />
            Diaries<br />
            To slip into a dream?<br />
            by Motaz H Matar<br />
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
          <p>
            May 12, 2025<br />
            Diaries<br />
            Soul mates, unbound.<br />
            by Motaz H Matar<br />
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
        </div>
      </div>
      <Footer />
    </div>
  );
}