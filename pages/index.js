import Hero from '../components/Hero'
import Events from "../components/Events"
import Mission from '../components/Mission'
import Faq from '../components/Faq'
import Team from '../components/Team'
import Actions from '../components/Actions'


export default function Home() {
  return (
    <div>
      <Hero />
      <Mission />
      <Actions />
      <Events />
      <Faq />
      <Team />
    </div>
  )
}
