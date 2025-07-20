import { Calendar, Clock, Users } from "lucide-react"

const weeklyServices = [
  {
    day: "እሑድ", // Sunday
    services: [
      { time: "8:00 AM - 11:00 AM", name: "ቅዳሴ", attendees: "ሁሉም ይችላሉ" },
      { time: "11:30 AM - 12:30 PM", name: "የሰንበት ት/ቤት", attendees: "ህጻናት እና ወጣቶች" },
    ],
    highlight: true,
  },
  {
    day: "ረቡዕ", // Wednesday
    services: [
      { time: "6:00 PM - 7:30 PM", name: "የማታ ጸሎት", attendees: "ሁሉም ይችላሉ" },
    ],
    highlight: true,
  },
  {
    day: "ቅዳሜ", // Saturday
    services: [
      { time: "7:00 AM - 9:00 AM", name: "የጠዋት ጸሎት", attendees: "ሁሉም ይችላሉ" },
      { time: "5:00 PM - 6:30 PM", name: "የማታ ጸሎት", attendees: "ሁሉም ይችላሉ" },
    ],
    highlight: true,
  },
]

export default function WeeklyServicesPage() {
  return (
    <section className="py-16 md:py-2 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">የሳምንቱ አገልግሎቶች</h2>
          {/* Removed the English intro text as per rule 10 */}
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

              {/* Removed 'Main Service Day' as per rule 8 */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
