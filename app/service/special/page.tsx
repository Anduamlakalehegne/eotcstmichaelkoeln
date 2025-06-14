const specialServices = [
  {
    month: "January",
    services: [
      { date: "7", name: "Ethiopian Christmas (Genna)", description: "Celebration of the birth of Jesus Christ" },
    ],
  },
  {
    month: "March/April",
    services: [
      {
        date: "Varies",
        name: "Holy Week and Easter (Fasika)",
        description: "The most important celebration in the Ethiopian Orthodox calendar",
      },
    ],
  },
  {
    month: "September",
    services: [
      { date: "11", name: "Ethiopian New Year (Enkutatash)", description: "Celebration of the Ethiopian New Year" },
    ],
  },
]

export default function SpecialServicesPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Special Services</h1>
      <div className="space-y-8">
        {specialServices.map((month) => (
          <div key={month.month} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">{month.month}</h2>
            <div className="space-y-6">
              {month.services.map((service, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-lg">{service.name}</h3>
                    <span className="text-gray-600">({service.date})</span>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
