"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../components/ui/text-reveal-card";

export function MeetTheDeveloper() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-black via-blue-800 to-black h-[40rem] rounded-2xl w-full p-6">
      <TextRevealCard text="Who Built This site" revealText="Shaukat Sohail ">
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription>
      </TextRevealCard>
      <div className="flex space-x-4 mt-6">
        <a
          href="https://github.com/shaukat456"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-8 h-8 text-white hover:text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.207 11.387.6.11.82-.26.82-.578 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.38-1.334-1.75-1.334-1.75-1.09-.746.082-.73.082-.73 1.203.086 1.836 1.236 1.836 1.236 1.07 1.834 2.807 1.304 3.492.996.107-.775.417-1.304.76-1.604-2.665-.304-5.467-1.334-5.467-5.933 0-1.31.47-2.381 1.236-3.22-.124-.304-.535-1.53.116-3.184 0 0 1.008-.322 3.304 1.23a11.51 11.51 0 013.008-.404c1.02.004 2.048.137 3.008.404 2.292-1.552 3.3-1.23 3.3-1.23.656 1.654.246 2.88.12 3.184.77.839 1.234 1.91 1.234 3.22 0 4.61-2.808 5.624-5.48 5.921.426.368.81 1.096.81 2.21 0 1.597-.014 2.886-.014 3.278 0 .322.214.694.826.576C20.566 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/shaukat-sohail-012aaa167"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-8 h-8 text-white hover:text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.23 0H1.77C.792 0 0 .775 0 1.73v20.54C0 23.225.792 24 1.77 24h20.46c.978 0 1.77-.775 1.77-1.73V1.73C24 .775 23.208 0 22.23 0zM7.122 20.452H3.644V9.002h3.478v11.45zM5.383 7.522a2.01 2.01 0 01-2.012-2.01c0-1.112.898-2.01 2.012-2.01a2.01 2.01 0 012.011 2.01c0 1.112-.899 2.01-2.011 2.01zM20.452 20.452h-3.479v-5.927c0-1.414-.027-3.236-1.975-3.236-1.977 0-2.278 1.544-2.278 3.132v6.031h-3.478V9.002h3.34v1.563h.048c.465-.879 1.6-1.805 3.295-1.805 3.525 0 4.174 2.32 4.174 5.34v6.352h-.002z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
