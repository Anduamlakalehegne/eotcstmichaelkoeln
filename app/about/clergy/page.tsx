import Image from "next/image"

const clergyMembers = [
  {
    name: "Sample Name",
    title: "Head Priest",
    image: "/IMG_E2338.JPG",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Sample Name",
    title: "Priest",
    image: "/IMG_5278.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Sample Name",
    title: "Deacon",
    image: "/IMG_5279.JPG",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Sample Name",
    title: "Deacon",
    image: "/IMG_E2347.JPG",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Sample Name",
    title: "Deacon",
    image: "/photo_2024-09-19_22-55-00.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Sample Name",
    title: "Deacon",
    image: "/IMG_E5314.JPG",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

export default function ClergyPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Our Clergy</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clergyMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-[400px]">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>
            {/* <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{member.name}</h2>
              <h3 className="text-lg text-blue-600 mb-4">{member.title}</h3>
              <p className="text-gray-600">{member.description}</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}
