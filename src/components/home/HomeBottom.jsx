import { Link } from 'react-router-dom'

function HomeBottom() {
  return (
    <div className='text-white font-[font1] flex items-center justify-center gap-4 '>
      <Link to={"/projects"} className='uppercase leading-[6vw] text-[5vw] border-2 rounded-full px-8'>Projects</Link>
      <Link to={"/agency"} className='uppercase leading-[6vw] text-[5vw] border-2 rounded-full px-8'>Agency</Link>
    </div>
  )
}

export default HomeBottom