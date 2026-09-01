import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  objectPosition: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Sujay Kumar', role: 'Founder', image: '/home/team1.png', objectPosition: 'object-top' },
  { name: 'Sahil Sumrani', role: 'Co-founder', image: '/home/team2.png', objectPosition: 'object-[center_85%]' },
];

export const TeamSection: React.FC = () => {
  return (
    <section className="mt-16 mb-16 w-full" style={{ fontFamily: 'Matter, sans-serif' }}>
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <div className="inline-block px-4 py-1 bg-white shadow-sm border border-gray-100 rounded-full text-gray-500 font-medium text-xs sm:text-sm mb-4">
          Our Team
        </div>
        <h2 className="text-2xl sm:text-5xl mt-2 text-gray-800 mb-10 px-3 leading-snug font-medium">
          Team Behind Wonders
        </h2>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 justify-center">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="flex justify-center">
            <div className="relative group w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gray-100 border border-gray-200">
              <img
                src={member.image}
                alt={member.name}
                className={`w-full h-full object-cover ${member.objectPosition} transition-transform duration-700 group-hover:scale-110`}
                loading="lazy"
              />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[85%] bg-white/90 backdrop-blur-md border border-white/40 p-3 rounded-xl text-center shadow-lg transform transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-gray-900 font-bold text-base sm:text-lg leading-tight">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-medium tracking-wide">
                  {member.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
