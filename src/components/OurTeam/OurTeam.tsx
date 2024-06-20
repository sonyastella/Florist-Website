import React, { useEffect, useState } from 'react';

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

const OurTeam: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<User[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?lego&results=5');
        const data = await response.json();
        setTeamMembers(data.results);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="ourTeam bg-[#efe6dd] text-center py-20">
      <h1 className="text-4xl font-bold text-[#5f5e7a] mb-20">Meet our team</h1>
      <div className="team-container flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member text-center p-4 bg-white shadow-lg rounded-lg">
            <img src={member.picture.large} alt={`${member.name.first} ${member.name.last}`} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-[#5f5e7a]">{`${member.name.first} ${member.name.last}`}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
