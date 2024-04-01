"use client";

import { useState, useEffect, useRef } from "react";

export default function ParallaxText() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showNotifying, setShowNotifying] = useState(false);
  const hasPlayedInitialRef = useRef(false);
  const hasPlayedFullRef = useRef(false);
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: {
      clientX: number;
      clientY: number;
      preventDefault: () => void;
    }) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30; // Increased effect for movement
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setBgPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getBestVoice = () => {
    const voices = speechSynthesis.getVoices();
    const preferredVoices = [
      voices.find((voice) => voice.name.includes("Samantha")),
      voices.find((voice) => voice.name.includes("Google UK English Female")),
      voices.find((voice) => voice.name.includes("Microsoft Zira")),
      voices.find(
        (voice) => voice.lang.startsWith("en") && voice.name.includes("Female")
      ),
      voices.find((voice) => voice.lang.startsWith("en")),
    ];
    return preferredVoices.find((voice) => voice) || voices[0];
  };

  const playSpeech = async (text: string, pitch = 1) => {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = pitch;
    utterance.rate = 0.9;
    utterance.volume = 1;

    if (speechSynthesis.getVoices().length === 0) {
      await new Promise((resolve) => {
        speechSynthesis.onvoiceschanged = resolve;
      });
    }

    utterance.voice = getBestVoice();
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (!hasPlayedInitialRef.current) {
      setTimeout(() => {
        playSpeech("NSA", 1.1);
        hasPlayedInitialRef.current = true;
      }, 10);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const progress = Math.max(
        0,
        Math.min(scrollPosition / documentHeight, 1)
      );
      setScrollProgress(progress);

      if (progress > 0.4 && !showNotifying) {
        setTimeout(() => {
          setShowNotifying(true);
          if (!hasPlayedFullRef.current) {
            playSpeech("Notifying Stories Around", 1);
            hasPlayedFullRef.current = true;
          }
        }, 500);
      } else if (progress < 0.3 && showNotifying) {
        setShowNotifying(false);
        hasPlayedFullRef.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      speechSynthesis.cancel();
    };
  }, [showNotifying]);

  const initialText = "NSA";
  const fullTextLines = ["Notifying", "Stories", "Around"];

  const getNSAVisibility = () => {
    const fadeOutStart = 0.2;
    const fadeOutEnd = 0.4;

    if (scrollProgress < fadeOutStart) return 1;
    if (scrollProgress > fadeOutEnd) return 0;

    return 1 - (scrollProgress - fadeOutStart) / (fadeOutEnd - fadeOutStart);
  };

  const getFullTextVisibility = () => {
    const fadeInStart = 0.4;
    const fadeInEnd = 0.6;

    if (scrollProgress < fadeInStart) return 0;
    if (scrollProgress > fadeInEnd) return 1;

    return (scrollProgress - fadeInStart) / (fadeInEnd - fadeInStart);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getLetterStyle = (index: number) => {
    const visibility = getNSAVisibility();
    const translateY = (1 - visibility) * 50;

    return {
      opacity: visibility,
      transform: `translateY(${-translateY}px)`,
      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    };
  };

  const getFullTextLetterStyle = (index: number, wordIndex: number) => {
    const visibility = getFullTextVisibility();
    const baseDelay = wordIndex * 0.2 + index * 0.05;
    const translateY = (1 - visibility) * 50;

    return {
      opacity: visibility,
      transform: `translateY(${translateY}px)`,
      transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${baseDelay}s`,
    };
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-slate-600 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, black 0%, rgba(10, 60, 50, 0.8) ${
          scrollProgress * 100
        }%)`,
        transition: "background 0.3s ease-out",
      }}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          transform: `translate(${bgPosition.x}px, ${bgPosition.y}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          className="absolute w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
          style={{
            left: "20%",
            top: "20%",
            animation: "float 8s infinite ease-in-out",
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full bg-teal-500/10 blur-3xl"
          style={{
            right: "20%",
            bottom: "20%",
            animation: "float 8s infinite ease-in-out reverse",
          }}
        />

        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div className="relative w-full text-center px-4 z-10">
        <div className="relative transform-gpu h-[20vh]">
          {/* Fixed height container */}
          <div className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[6vw] font-extrabold tracking-tight leading-none">
            {/* NSA Text */}
            <div
              className="absolute w-full"
              style={{ opacity: getNSAVisibility() }}
            >
              {initialText.split("").map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-300 ${
                    scrollProgress > (index + 1) * 0.1
                      ? index === 0
                        ? "text-purple-500"
                        : index === 1
                        ? "text-teal-500"
                        : "text-cyan-500"
                      : "text-white"
                  }`}
                  style={getLetterStyle(index)}
                >
                  {letter}
                </span>
              ))}
            </div>

            {/* Full Text */}
            <div
              className="absolute w-full"
              style={{ opacity: getFullTextVisibility() }}
            >
              {fullTextLines.map((word, wordIndex) => (
                <div
                  key={wordIndex}
                  className="inline-block mx-1 sm:mx-2 md:mx-4 text-center"
                >
                  {word.split("").map((letter, index) => (
                    <span
                      key={index}
                      className={`inline-block transition-all duration-300 ${
                        wordIndex === 0
                          ? "text-purple-500"
                          : wordIndex === 1
                          ? "text-teal-500"
                          : "text-cyan-500"
                      }`}
                      style={getFullTextLetterStyle(index, wordIndex)}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(10px);
          }
        }
      `}</style>
    </div>
  );
}
