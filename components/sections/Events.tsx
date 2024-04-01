"use client";
import React from "react";
import { StickyScroll } from "../ui/stickyreveal";
import Image from "next/image";

// Adding event data
const events = [
  {
    title: "Olympiad",
    role: "Event",
    description:
      "A diverse range of competitions to showcase students' skills and talents.",
    image: "/path-to-olympiad-image.jpg", // Replace with actual image path
  },
  {
    title: "Raise the Curtain",
    role: "Event",
    description:
      "An event to unveil new initiatives and celebrate achievements.",
    image: "/path-to-raise-the-curtain-image.jpg", // Replace with actual image path
  },
  {
    title: "NED Eats",
    role: "Event",
    description:
      "A food festival bringing together a variety of cuisines and culinary delights.",
    image: "/path-to-ned-eats-image.jpg", // Replace with actual image path
  },
  {
    title: "Photo Walk",
    role: "Event",
    description:
      "A photography event encouraging students to capture the beauty of the campus.",
    image: "/path-to-photo-walk-image.jpg", // Replace with actual image path
  },
  {
    title: "NED in Focus",
    role: "Event",
    description: "A showcase of students' projects and achievements.",
    image: "/path-to-ned-in-focus-image.jpg", // Replace with actual image path
  },
  {
    title: "Welfare Event",
    role: "Event",
    description:
      "An event focused on giving back to the community and helping those in need.",
    image: "/path-to-welfare-event-image.jpg", // Replace with actual image path
  },
];

const content = events.map((item) => ({
  title: item.title,
  description: item.description,
  role: item.role,
  content: (
    <div className="h-full w-full flex flex-col items-center justify-center text-white">
      <Image
        src={item.image}
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt={`${item.title} photo`}
      />
    </div>
  ),
}));

export const NsaEvents = () => {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
};
