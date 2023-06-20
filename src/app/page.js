import About from '@/components/about/About'
import Dashboard from '@/components/dashboard/dashboard'
import Navbar from '@/components/navbar/navbar'

const Home= ()=>{
return(
  <>
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
    <Navbar />

   <main className='main'>
    <Dashboard/>
    <About/>
    </main> 
  </>
)
}
export default Home

