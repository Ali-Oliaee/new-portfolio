import './styles.sass'
import Image from 'next/image'
import { Props } from './types'

const SocialMedias: React.FC<Props> = ({styles}) => {
  return (
    <div className="social-medias" style={styles}>
      <Image
        className="social-media"
        src="/social-media/github.svg"
        alt="github"
        width={46}
        height={46}
      />
      <Image
        className="social-media"
        src="/social-media/google.svg"
        alt="github"
        width={36}
        height={36}
      />
      <Image
        className="social-media"
        src="/social-media/instagram.svg"
        alt="github"
        width={36}
        height={36}
      />
      <Image
        className="social-media"
        src="/social-media/linkedin.svg"
        alt="github"
        width={36}
        height={36}
      />
      <Image
        className="social-media"
        src="/social-media/whatsapp.svg"
        alt="github"
        width={36}
        height={36}
      />
    </div>
  )
}

export default SocialMedias
