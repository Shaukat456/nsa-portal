"use client";
import { useEffect, useState } from "react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

// const words = `
// NSA NED University is the premier media organization of NED university
// of Engineering and Technology. It was established in 2013 and has
// consistently achieved greater milestones. It was started as just a media
// group but have steadily and gradually became a dynamic students society holding multiple domains of students' interest. With it's great efforts, it has earned
// the honor of becoming the biggest media organization of this
// university.
// NSA NEDUET is an organization of NED University in which
// undergraduates are actively involved. We strive to ensure that every student who is a part of our society should learn some qualities that will
// surely help them in achieving their career goals.
// Every year, the NSA organizes a diverse range of events, including the Olympiad, Raise the Curtain, NED Eats, Photo Walk, NED in Focus, and Welfare event. These opportunities enable students to boost their confidence, develop extracurricular skills, and pursue their passions, ultimately benefiting their future endeavors
// `;

export function TextGenerateEffectDemo() {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
    console.log("TextGenerateEffectDemo mounted");
  }, []);
  if (!state) return null;
  return (
    <TextGenerateEffect
      words={
        "I had no clue what NSA meant so I built a whole website to figure it out.Now, everybody knows!"
      }
    />
  );
}
