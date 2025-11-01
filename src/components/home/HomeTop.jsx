import Video from './Video'

function HomeTop() {
  return (
    <div className='font-[font1] text-center pt-2'>
        <div className='text-[10vw] uppercase text-white leading-[9.5vw]'>L'étincelle</div>
        <div className='text-[10vw] uppercase text-white leading-[9.5vw] flex items-center justify-center'>qui
            <div className='h-[8vw] w-[17vw] rounded-full overflow-hidden'><Video /></div>génère</div>
        <div className='text-[10vw] uppercase text-white leading-[9.5vw]'>la créativité </div>
    </div>
  )
}

export default HomeTop