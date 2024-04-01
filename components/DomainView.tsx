import React, { useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  Variants,
} from "framer-motion";
import { TypingText } from "./ui/TypingText";
import { Divider } from "./ui/Divider";
import { heads, domains } from "../data/team";
import { TeamMember } from "@/data/team";
import Image from "next/image";
import { Card3D } from "./ui/Card3d";

const cardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  hover: {
    y: -10,
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
};

const InteractiveBeam = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`
    radial-gradient(
      450px circle at ${mouseX}px ${mouseY}px,
      rgba(14, 165, 233, 0.15),
      transparent 80%
    )
  `;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered ? background : "transparent",
      }}
      className="rounded-2xl p-1"
    >
      {children}
    </motion.div>
  );
};

export const HeadCard: React.FC<{ member: TeamMember }> = React.memo(
  ({ member }) => {
    const { role, name, image: imageSrc } = member;

    return (
      <InteractiveBeam>
        <Card3D key={member.name}>
          <motion.div
            className="group relative block rounded-xl overflow-hidden h-[400px]"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            {imageSrc && (
              <motion.div className="absolute inset-0 w-full h-full">
                <Image
                  alt={name}
                  src={imageSrc}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
              </motion.div>
            )}

            <div className="absolute bottom-0 p-6 z-10">
              <motion.p
                className="text-sm font-medium uppercase tracking-widest text-cyan-400 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {role}
              </motion.p>

              <motion.p
                className="text-2xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {name}
              </motion.p>
            </div>
          </motion.div>
        </Card3D>
      </InteractiveBeam>
    );
  }
);

export const MemberCard = React.memo(({ member }: { member: TeamMember }) => {
  return (
    <InteractiveBeam>
      <motion.div
        className="group relative rounded-xl overflow-hidden h-[500px]"
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <motion.div className="absolute inset-0 w-full h-full">
          <motion.img
            alt={member.name}
            src={member.image}
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.7 }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-0 p-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
          <p className="text-sm text-white/90">{member.role}</p>
        </motion.div>
      </motion.div>
    </InteractiveBeam>
  );
});

// eslint-disable-next-line react/display-name
export const DomainView = React.memo(({ domain }: { domain: string }) => {
  console.log("Rendering DomainView", domain);
  const domainHeads = useMemo(
    () => heads.filter((head) => head.domain === domain),
    [domain]
  );

  // const domainManagers = useMemo(
  //   () => managers.filter((manager) => manager.domain === domain),
  //   [domain]
  // );

  const { scrollYProgress } = useScroll();
  const springConfig = { stiffness: 300, damping: 30, mass: 1 };

  const headerY = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0, -50]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 0.3]),
    springConfig
  );

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 0.95]),
    springConfig
  );

  return (
    <motion.div
      className="min-h-screen "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <AnimatePresence mode="wait">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            style={{ y: headerY, opacity, scale }}
            className="mb-20 text-center"
          >
            <TypingText
              text={domains[domain].name}
              className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-500"
            />
            <motion.p
              className="text-lg text-white/70 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {domains[domain].description}
            </motion.p>
          </motion.div>

          <Divider className="mb-20" />

          <motion.section className="mb-32">
            <motion.div
              className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {domainHeads.map((head) => (
                <HeadCard key={head.id} member={head} />
              ))}
            </motion.div>
          </motion.section>
        </div>
      </AnimatePresence>
    </motion.div>
  );
});
export default DomainView;
