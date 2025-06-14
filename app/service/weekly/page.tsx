import { Calendar, Clock, Users } from "lucide-react"

const weeklyServices = [
  {
    day: "Sunday",
    services: [
      { time: "8:00 AM - 11:00 AM", name: "Divine Liturgy", attendees: "All welcome" },
      { time: "11:30 AM - 12:30 PM", name: "Sunday School", attendees: "Children & Youth" },
    ],
    highlight: true,
  },
  {
    day: "Wednesday",
    services: [{ time: "6:00 PM - 7:30 PM", name: "Evening Prayer", attendees: "All welcome" }],
    highlight: false,
  },
  {
    day: "Saturday",
    services: [
      { time: "7:00 AM - 9:00 AM", name: "Morning Prayer", attendees: "All welcome" },
      { time: "5:00 PM - 6:30 PM", name: "Evening Prayer", attendees: "All welcome" },
    ],
    highlight: false,
  },
]

export default function WeeklyServicesPage() {
  return (
    <section className="py-16 md:py-2 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">WEEKLY SERVICES</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for our regular weekly services. All are welcome to participate in our worship and prayer
            gatherings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {weeklyServices.map((day) => (
            <div
              key={day.day}
              className={`rounded-lg shadow-md overflow-hidden ${
                day.highlight ? "border-2 border-blue-600" : "border border-gray-200"
              }`}
            >
              <div className={`p-4 ${day.highlight ? "bg-blue-600 text-white" : "bg-gray-50 text-blue-600"}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{day.day}</h3>
                  <Calendar size={20} />
                </div>
              </div>

              <div className="p-5 space-y-4">
                {day.services.map((service, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-3 py-1">
                    <h4 className="font-bold text-gray-800">{service.name}</h4>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                      <Clock size={14} />
                      <span>{service.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                      <Users size={14} />
                      <span>{service.attendees}</span>
                    </div>
                  </div>
                ))}
              </div>

              {day.highlight && (
                <div className="bg-gray-50 p-3 text-center">
                  <span className="text-sm text-blue-600 font-medium">Main Service Day</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
