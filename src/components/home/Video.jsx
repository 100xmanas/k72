import HomeVideo from "../../assets/HomeVdo.mp4"

function Video() {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' src={HomeVideo} autoPlay muted loop></video>
    </div>
  )
}

export default Video