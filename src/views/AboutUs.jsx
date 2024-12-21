import { useEffect, useState } from 'react';

export default function AboutUs() {
    
    const [teamCats, setTeamCats] = useState([]);
  
    const teamMembers = [
    { name: 'Dr. Jane Doe', role: 'Director' },
    { name: 'Mr. Bob Doe', role: 'Director' },
    { name: 'Ms. Alice Doe', role: 'Director' },
  ];

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          teamMembers.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json()))
        );
        const membersWithImages = teamMembers.map((member, index) => ({
          ...member,
          image: responses[index][0].url,
        }));

        setTeamCats(membersWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <section className="text-center mt-5 py-5" style={{ backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
      <h2 style={{ color: "#2c3e50", fontWeight: "700" }}>About Us</h2>
      <div className="mt-4">
        <h3 className="mb-3" style={{ color: "#34495e", fontSize: "24px", fontWeight: "600" }}>Our Mission</h3>
        <p style={{
            fontSize: "18px",
            color: "#7f8c8d",
            maxWidth: "700px",
            margin: "0 auto",
          }}>At Purrfect Adoption, we strive to connect loving families with our adorable cats to ensure every feline finds a forever home🐱.</p>
      </div>

      <div className="mt-5">
        <h3 className="mb-3" style={{ color: "#34495e", fontSize: "24px", fontWeight: "600" }} >Our History</h3>
        <p style={{
            fontSize: "18px",
            color: "#7f8c8d",
            maxWidth: "700px",
            margin: "0 auto",
          }}>Founded in 2021, Purrfect Adoption has successfully facilitated thousands of cat adoptions and has grown into a trusted adoption service.</p>
      </div>

      <div className="mt-5">
        <h3 className="mb-4" style={{ color: "#34495e", fontSize: "24px", fontWeight: "600" }}>Our Team</h3>
        <div className="d-flex justify-content-center gap-4 flex-wrap" style={{
            maxWidth: "900px",
            margin: "0 auto",
            rowGap: "30px",
          }}>
        {teamCats.map((member,index) => (
          <div key={index}className="text-center" style={{
            backgroundColor: "#ffffff",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            width: "220px",
          }}>
            <img 
            src={member.image} alt={member.role} className="img-fluid rounded-circle" style={{ width: "120px", height: "120px", objectFit: "cover" }} />
            <h4 className="mt-3" style={{
                  color: "#2c3e50",
                  fontWeight: "700",
                  fontSize: "18px",
                }}>{member.name}</h4>
            <p style={{ color: "#7f8c8d", fontSize: "16px" }}>{member.role}</p>
          </div>
          ))}
          </div>
      </div>
    </section>
  );
}
