import { Typography } from "@/material";
import Image from "next/image";


const teamMembers = [
  {
    name: "Issa Jeremy Vector",
    role: "CEO of CML GLOBAL",
    imageSrc: "/team/person1.jpg",
    altText: "Issa Jeremy Vector",
  },
  {
    name: "Reda El Bakraouy",
    role: "Design Operations Manager",
    imageSrc: "/team/person2.jpg",
    altText: "Reda El Bakraouy",
  },
  {
    name: "Lucas Kacem",
    role: "CEO of Digital Unicorn",
    imageSrc: "/team/person3.png",
    altText: "Lucas Kacem",
  },
  {
    name: "Abdul Raziq Kakar",
    role: "Chief Development Officer",
    imageSrc: "/team/person4.jpg",
    altText: "Abdul Raziq Kakar",
  },
  {
    name: "Bryan Truong",
    role: "CEO of Digital Unicorn",
    imageSrc: "/team/person5.jpg",
    altText: "Bryan Truong",
  },
  {
    name: "Rayan EL Kalache",
    role: "Commercial Director",
    imageSrc: "/team/person6.jpg",
    altText: "Rayan EL Kalache",
  },
  {
    name: "Andres Johnsson",
    role: "Blockchain Expert",
    imageSrc: "/team/person7.jpg",
    altText: "Andres Johnsson",
  },
  {
    name: "Noel Andrade",
    role: "Listing Director",
    imageSrc: "/team/person8.jpg",
    altText: "Noel Andrade",
  },
  {
    name: "frà Dureuil",
    role: "Nomads Culture Expert",
    imageSrc: "/team/person9.jpg",
    altText: "frà Dureuil",
  },
  {
    name: "Ilse Koehler-Rollefson",
    role: "Camels Specialist Ethnoveterinary & Writer",
    imageSrc: "/team/person10.jpg",
    altText: "Ilse Koehler-Rollefson",
  },
  {
    name: "Dr. Bernar Faye",
    role: "Global Camelid Expert",
    imageSrc: "/team/person11.jpg",
    altText: "Dr. Bernar Faye",
  },
  {
    name: "Camel STAR",
    role: "Influencer & Desert Expert",
    imageSrc: "/team/person12.png",
    altText: "Camel STAR",
  },
  // Add more team members here
];

export default function Team() {
  return (
    <section className="mt-24 w-screen flex items-center justify-center sm:py-16 lg:py-24">
         <div
        className="absolute z-0 opacity-30 inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, #f9e071 15.73%, #e6c456 15.74%, #a54b1e 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      />
      <div className="px-4 z-10 mx-auto sm:px-6 lg:px-8 max-w-7xl">

        <div className="max-w-2xl mx-auto text-center">
          <Typography
            variant="h2"
            className="leading-tight text-blue-gray-800 dark:text-blue-gray-50 sm:text-4xl lg:text-5xl"
          >
            Meet our Incredible Team
          </Typography>
        </div>
        <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
          {teamMembers.map((member) => (
            <>
              {member.name != "Issa Jeremy Vector" ||
              member.name != "Rayan EL Kalache" ? (
                <div className="hidden lg:block" />
              ) : null}
              <div key={member.name}>
                <Image
                  className="object-cover mx-auto rounded-lg w-28 h-28"
                  src={member.imageSrc}
                  alt={member.altText}
                  width={260}
                  height={260}
                />
                <p className="mt-8 font-semibold leading-tight text-blue-gray-900 dark:text-blue-gray-50">
                  {member.name}
                </p>
                <p className="mt-1 text-base leading-tight text-blue-gray-600 dark:text-blue-gray-300">
                  {member.role}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}