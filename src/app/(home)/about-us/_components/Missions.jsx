
import { Card } from "@/components/ui/card"
import { Handshake, Heart, Target } from 'lucide-react'

const missions= [
  {
    icon: <Target className="w-12 h-12 text-white" />,
    title: "Our Mission",
    description: "Bridge workforce gaps with reliable, skilled, and culturally diverse manpower solutions for the Middle East and Europe, empowering Nepali careers."
  },
  {
    icon: <Handshake className="w-12 h-12 text-white" />,
    title: "Our Commitment",
    description: "Deliver exceptional manpower services, fostering strong partnerships between employers and skilled Nepali professionals in the global market."
  },
  {
    icon: <Heart className="w-12 h-12 text-white" />,
    title: "Our Values",
    description: "Uphold integrity, cultural sensitivity, and excellence in every placement, ensuring mutual growth and success for all stakeholders involved."
  }
]

export default function Missions() {
  return (
    <div className="container mx-auto px-[5%] py-16">
      <div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" 
        data-aos="fade-up"
      >
        {missions.map((mission, index) => (
          <Card 
            key={index} 
            className="flex flex-col items-center p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-transparent"
          >
            <div className="mb-4 rounded-full bg-amber-900 p-3">
              {mission.icon}
            </div>
            <h2 className="mb-3 text-xl font-semibold">{mission.title}</h2>
            <p className="text-gray-600">{mission.description}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

