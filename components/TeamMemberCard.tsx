import { motion } from "framer-motion";
import { Card3D } from "./ui/Card3d";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import type { TeamMember } from "../data/team";

interface TeamMemberCardProps {
  member: TeamMember;
  delay: number;
}

const SocialLinks = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  >
    <a
      href="#"
      className="text-white/90 hover:text-white transform hover:scale-110 transition-transform"
    >
      <Linkedin className="w-5 h-5" />
    </a>
    <a
      href="#"
      className="text-white/90 hover:text-white transform hover:scale-110 transition-transform"
    >
      <Twitter className="w-5 h-5" />
    </a>
    <a
      href="#"
      className="text-white/90 hover:text-white transform hover:scale-110 transition-transform"
    >
      <Github className="w-5 h-5" />
    </a>
    <a
      href="#"
      className="text-white/90 hover:text-white transform hover:scale-110 transition-transform"
    >
      <Mail className="w-5 h-5" />
    </a>
  </motion.div>
);

export const TeamMemberCard = ({ member, delay }: TeamMemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Card3D className="group perspective">
        <div className="relative h-full transform-gpu transition-all duration-500 group-hover:scale-105">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300" />

          <div className="relative p-6 flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white/20 shadow-xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>

            <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-gray-600 group-hover:text-white/90 mb-4 transition-colors duration-300">
              {member.role}
            </p>

            {member.domain && (
              <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800 group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                {member.domain}
              </span>
            )}

            <div className="mt-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <SocialLinks />
            </div>
          </div>
        </div>
      </Card3D>
    </motion.div>
  );
};
