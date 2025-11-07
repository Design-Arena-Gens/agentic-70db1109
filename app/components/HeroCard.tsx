"use client";

import Link from "next/link";
import { useMemo } from "react";

const phrases = [
  "invent something remarkable",
  "launch the next big idea",
  "experiment with autonomy",
  "create without hesitation"
];

export function HeroCard() {
  const phrase = useMemo(() => phrases[Math.floor(Math.random() * phrases.length)], []);

  return (
    <section className="card">
      <p className="badge">Agentic Mode</p>
      <h1>
        Hello there.
        <br />
        Let's {phrase}.
      </h1>
      <p className="description">
        This starter experience demonstrates a fully autonomous build workflow. It's production ready and
        deployable to Vercel out of the box.
      </p>
      <div className="actions">
        <Link className="primary" href="https://agentic-70db1109.vercel.app">
          Visit Live Deployment
        </Link>
        <Link className="ghost" href="https://github.com/vercel/next.js/tree/canary/examples">
          Explore Templates
        </Link>
      </div>
    </section>
  );
}

export default HeroCard;
