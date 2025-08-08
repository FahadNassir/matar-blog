import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Now() {
  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      {/* Home navigation arrow */}
      <Link href="/" className="inline-block mb-6 text-2xl hover:underline text-center" aria-label="Back to home">&larr;</Link>
      {/* Filmin a Book Title */}
      <h1 className="text-2xl mb-6 font-semibold text-center">What I&apos;m working on Now</h1>
      <div className="text-gray-800 ">
        What I&apos;m working on now?
        <br />
        -Finishing part 2 of Palestinian Graphic Novel: Chadi the Palestinian Chadi Chaplin. (Here&apos;s a teaser page). Illustrator LUKA JAPARDIZE. Story by me (was orginally a screenplay short listed in the Sharjah Pitch Platform.)
        <Image 
          src="/now1.png"
          alt="What I am currently working on"
          width={900}
          height={700}
          className="w-full h-auto mb-6"
        />
        <p>
          -Pitching my new novella to publishers, titled: Donkey Alley.

-I just finished the draft of an allegorical fiction on sheep, titled MAUVE. It&apos;s a 19k words novellete.

-I&apos;m finalizing the editing of my debut graphic novel, Blue Lotus. It&apos;s set in Cairo, shifting between the present day and the past, and features the late artist Abdel Halim Hafez. I&apos;m excited to share an excerpt from the first chapter (text only).
        </p>
        <Image src="/blueLotus.jpg" width={600} height={800} alt="Blue Lotus"/>
        <p>
          To the Golden Era&mdash;
To the voices that still sing in grainy
recordings, to the flickering film reels
that refuse to fade, and to the timeless
love stories etched in black and white.
To the dreamers who find themselves in
the echoes of a song, in the glow of an
old theater, in the shimmer of nostalgia.
This is for the past that shaped us, the
art that endures, and the stories that
refuse to be forgotten.

Chapter 1

The Ticket to the Past

I was at the movies, at an old downtown theatre playing old classics. I was alone because I wanted to be alone&mdash;well, I was someone who enjoyed my own company anyway. The glamour of the silver screen and symphonies, the epic grandeur of the golden age. How many times had I bought a ticket for that same movie? Hundreds? Thousands? I had lost count. I&apos;d sit in a corner. The ticket master no longer asked for my ticket. He knew me, or perhaps he no longer cared. Yet today, as I entered, something changed. His face darkened, his eyes clouded with something I couldn&apos;t name. Had I done something wrong? A strange feeling settled over me, a sense of being seen in a way I never had before. I dismissed that thought and sank into my usual seat, letting the film pull me under.

I was both present and absent, existing in between. Forever caught between happiness and sorrow, nostalgia and misery. But the vibes of the movie were still the same: the graininess of the screen, the chic attire, the nightingale voice of Abdel Halim. I memorized the lines, touched by every sound, song, and flare. Every shot revived me more than ever. I lived more vividly than ever. I stared more than ever.

I wished to be an actor. To share the soul of Abdel Halim, to enter the world of The Blue Lotus of Cairo as he hands it to his main actress-turned-lover. And then&mdash;the ending scene. He sings on stage; she watches, her eyes filled with a fear I can never quite understand. The music swells, then stops.

Something weird happened. For the first time, Abdel Halim looked at me. It was just a flicker, a moment, but I saw it&mdash;his gaze met mine. The lights snapped on. The projector ground to a halt. The film stopped. The ticket master hurried toward me; his voice low &quot;There was an error in the projector, and we have to close down. We&apos;re sorry.&quot; Then, without saying why, he disappeared, and the film turned off, the projector wound down, and I dragged myself away. I had seen this film a thousand times, but this had never happened before. Was this life a miracle? Was my life only a movie?

When I stepped outside, life was the same. I walked by the Nile. Fishermen cast their nets, voices rose and fell in the rhythm of daily life, yet I felt disconnected&mdash;adrift. The voice of Abdel Halim resonated in my ears, in my chest, in my pulse. I touched my face. It felt unfamiliar, as though something within me had shifted. Then, I saw him&mdash;the ticket master, his gaze unreadable. And Halim&apos;s look&hellip;Panic surged through me. I turned and ran back to the theater. The doors were locked. Why would they be locked in the middle of the day? I snuck around to the back, noticing the poster of the movie in flickering neon lights&mdash;but no door or entrance to the theatre. Had I been living inside the film all along? Had the screen swallowed me whole? The film, like a movie, like love, burst apart&mdash;its fragments scattered, and the tickets were plastered across the arena in tears. Love lost. The scene of the movie etched itself into me, as permanent as the past. Halim&apos;s eyes were telling me something, though I couldn&apos;t yet grasp it. I cried a destiny, a message waiting to be unraveled.

And then I saw him. The ticket master stood under the marquee&apos;s dim glow. His eyes gleamed like no other, their colors muted in shades of black and gray. He held something in his hand&mdash;a blue lotus&hellip; He extended it toward me, his voice steady and commanding: &quot;Take it,&quot; he said.

My breath caught. &quot;Why?&quot;

&quot;Because this is your ticket.&quot;

&quot;To what?&quot;

&quot;To the past.&quot;

My fingers trembled as I reached for it. &quot;I still don&apos;t understand. What do you mean?&quot;

&quot;You&apos;ll experience life as it was. More vivid, more real than you&apos;ve ever known. The golden age, love, pain&mdash;everything.&quot;

A shiver crawled up my spine. &quot;And if I go?&quot;

&quot;You&apos;ll have one chance to return. No detours. No portals. You can go and come back&mdash;or you can stay.&quot;

I hesitated. &quot;What if I want to stay?&quot;

The ticket master&apos;s eyes gleamed. &quot;I know you will.&quot;

&quot;Am I the only one?&quot; I asked. &quot;Has anyone done this before?&quot;

He smiled, but there was sadness in it. &quot;Tonight is the last night of this theater&apos;s existence. You&apos;ve won the final ticket. But soon, there will be no blue lotus, no way back.&quot;

The wind stirred around me as I took the flower from his hand. A flash of light. The scent of the Nile overwhelmed me. And then&mdash;the world shifted.
        </p>
      </div>
      <Footer />
    </div>
  );
}