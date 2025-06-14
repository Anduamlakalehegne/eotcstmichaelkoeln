const sacraments = [
  {
    name: "Baptism",
    description: "The sacrament of initiation into the Christian faith.",
    requirements: ["Birth certificate", "Godparents must be Orthodox Christians", "Prior arrangement with the church"],
  },
  {
    name: "Holy Matrimony",
    description: "The sacred union of marriage in the Orthodox faith.",
    requirements: [
      "Both parties must be Orthodox Christians",
      "Pre-marriage counseling",
      "Required documentation",
      "Advance booking required",
    ],
  },
  {
    name: "Holy Communion",
    description: "The central mystery of the Orthodox faith.",
    requirements: ["Must be baptized Orthodox Christian", "Proper spiritual preparation", "Fasting as prescribed"],
  },
]

export default function SacramentsPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Holy Sacraments</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sacraments.map((sacrament) => (
          <div key={sacrament.name} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-blue-600">{sacrament.name}</h2>
            <p className="text-gray-600 mb-4">{sacrament.description}</p>
            <h3 className="font-bold mb-2">Requirements:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {sacrament.requirements.map((req, index) => (
                <li key={index} className="text-gray-600">
                  {req}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
