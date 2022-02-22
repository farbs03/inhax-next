import Hero from '../components/Hero'
import Events from "../components/Events"
import Mission from '../components/Mission'
import Faq from '../components/Faq'
import Team from '../components/Team'


export default function Home() {
  return (
    <div>
      <Hero />
      <Mission />
      <Events />
      <Faq />
      <Team />
    </div>
  )
}
