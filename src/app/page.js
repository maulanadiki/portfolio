import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'
import Dashboard from '@/components/dashboard/dashboard'
import Navbar from '@/components/navbar/navbar'
import Qualification from '@/components/qualification/Qualification'
import Service from '@/components/service/Service'
import Skill from '@/components/skill/Skill'
import Testimoni from '@/components/Testimoni/Testimoni'

const Home= ()=>{
return(
  <>
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
    <Navbar />

   <main className='main'>
    <Dashboard/>
    <About/>
    <Skill/>
    <Service/>
    <Qualification/>
    <Testimoni/>
    <Contact/>
    </main> 
  </>
)
}
export default Home

