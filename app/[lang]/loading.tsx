import '@styles/loading.sass'
import Image from 'next/image'

const Loading: React.FC = () => {
  return(
    <div className='loading-screen'>
      <div className='loading-bar'/>
      <h1 className='loading-title'>Please Wait</h1>
      <Image
        className='union1'
        src="/union.svg"
        alt="loading"
        width={200}
        height={200}
      />
      <Image
        className='union2'
        src="/union1.svg"
        alt="loading"
        width={200}
        height={200}
      />
      <Image
        className='union3'
        src="/union2.svg"
        alt="loading"
        width={140}
        height={140}
      />
    </div>
  )
}

export default Loading
