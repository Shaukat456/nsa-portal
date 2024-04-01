"use client";

import { TeamMember } from "@/data/team";

export const HeadCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const { role, name, image: imageSrc, description } = member;
  return (
    <div className="group relative block bg-black">
      {imageSrc.length > 0 && imageSrc && (
        <img
          alt={name}
          src={imageSrc}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />
      )}

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
          {role}
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">{name}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MemberCard = ({ head }: { head: TeamMember }) => {
  return (
    <div key={head.id} className="group relative">
      <img
        alt={head.name}
        src={head.image}
        className="h-96 w-full rounded-lg object-cover group-hover:opacity-75 sm:aspect-[2/3] sm:h-auto"
      />
      <h3 className="mt-4 text-base font-semibold text-gray-900">
        <span className="absolute inset-0" />
        {head.name}
      </h3>
      <p className="mt-1 text-sm text-gray-500">{head.name}</p>
    </div>
  );
};

export default function HeadSection({
  HEADS_DETAIL,
}: {
  HEADS_DETAIL: TeamMember[];
}) {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Heads And Managers</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-8">
          {HEADS_DETAIL.map((head) => (
            <HeadCard key={head.id} member={head} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function MemberSection({ members }: { members: TeamMember[] }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Members
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
        {members.map((member) => (
          <MemberCard key={member.id} head={member} />
        ))}
      </div>
    </div>
  );
}
