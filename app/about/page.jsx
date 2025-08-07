/*
Previous implementation of the About page:
import Link from "next/link";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 text-center">
      <Link href="/" className="inline-block mb-6 text-2xl hover:underline" aria-label="Back to home">←</Link>
      <h1 className="text-3xl font-semibold mb-6">About</h1>
      <p className="text-base text-gray-800 leading-relaxed whitespace-pre-line">
        I’m a filmmaker by training and a storyteller at heart. I hold an MFA in Cinematic Arts and an MA in Serial Storytelling. I’m a Palestinian based in Dubai, where I teach media at the university level. And I believe—truly—that my soul cannot think without a picture.

The story machine started when I was a little boy. I dreamt of different worlds—maybe because I wasn’t happy with this one. I felt an urge to change something. Everything. Maybe even my own name, my fate, my story.

I never felt in control. I didn’t get to make choices. I wasn’t allowed to make decisions.
Born stateless, bullied at school, and raised without a passport, I wanted control over something—anything.
So, I started creating my own world. On paper.

I tried drawing it. But I couldn’t picture it clearly. It always came out messy. Ugly.

I tried music—failed. I couldn’t commit.
I tried soccer. I wasn’t fast or fearless enough. I loved the game, but the ball scared me.
In school, I broke the rules during comprehension sessions and invented new worlds with words. That thrill of writing, of escaping into fiction, took me higher than anything else. I usually scored 8 out of 10, but it was never about the score. It was about freedom.

And then the story turned.

In eighth grade, my best friend died.
The call came suddenly, and I received it like a prank—how do you tell a child that his childhood friend is gone?
In that moment, I aged a million years. I aged with sadness. With speechless grief.

That’s when I knew: writing wasn’t a hobby—it was a mission.
Something larger than life.

But I kept failing.

I carried failure like a second skin. In love, in life, in identity.
I didn’t understand why my name meant “Proud Rain.” I didn’t feel proud. I didn’t feel like rain. I felt like a drought.

At 17, I failed three subjects in high school. My world dried up. My family stopped speaking to me. I was a disgrace.

And yet… I dreamed simple dreams: to drive a car, enroll in a college course, fall in love.

At 18, I stumbled upon a small booklet. It was poetry. And it saved me.

The way Nizar Qabbani wrote about love and loss cracked something open inside me. His words—and mine—became medicine.

That same year, I talked a friend out of ending his life.
He had lost his soulmate.
I had just found mine: words.

I didn’t know it yet, but I wasn’t chasing a passion.
I was healing.

With every word I wrote, I stitched together years of brokenness. I breathed again. I wrote for ten years without stopping. I no longer cared about failure or success. I just kept going.

And then, at 30, something strange happened:
The wounds healed. But the writing never stopped.

I thought I had grown up. But the child in me never did.

I still saw the jasmine tree hanging outside the old house. I still climbed the stairs in memory.

And one day, on a train in Germany, I had a moment of clarity:
I want to write a book.

Everything changed.

What had I been doing for ten years?
Running. Writing. Crying into pages. Trying to make films. Telling stories. Selling dreams to myself.

But those stories saved my past—and helped me imagine a future.

In 2017, while studying in Germany, I finally wrote that first book:
The 28 Mansions of the Moon.
I fell in love with the literary form.
In 2019, I wrote The Pigeon Whisperer and a collection of novellas.
Readers connected deeply with my work—and I finally understood why I wrote:

Because stories let us reshape the world.
They help us survive.
They help us make meaning.

Since then, writing novels has been a yes among so many no’s.
What began as an escape became the most real part of my life.

Today, I write to explore life’s hardest questions—not to answer them, but to open the doors they hide behind.

I write to show that:

We can design our own narratives.
Passion finds us when we’re ready.
People may never fully understand us—and that’s okay.
Being broken is part of being alive.
You don’t need to apologize for tears.
Art is the rain in the desert.
Dreams are the only real things in life.
So keep dreaming.

Here I am—still that child, still dreaming.
Still writing.
Still healing.
Still mesmerized by how beautiful life can be, even with its pain.
      </p>
      <Footer/>
    </div>
  );
}
*/

// Minimalist About page structure (content to be fetched and inserted here)
import Link from "next/link";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 text-center">
      {/* Home navigation arrow */}
      <Link href="/" className="inline-block mb-6 text-2xl hover:underline" aria-label="Back to home">←</Link>
      {/* About Title */}
      <h1 className="text-3xl font-semibold mb-6">About</h1>
      {/* About content will be fetched and inserted here */}
      <div className="text-gray-400 italic">About content coming soon...</div>
      <Footer/>
    </div>
  );
}