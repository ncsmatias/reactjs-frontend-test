import {VideoHTMLAttributes} from 'react'
import slyled from 'styled-components'

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

const Video: React.FC<VideoProps> = (props) => {

  return(
    <>
      <Container>
        <video autoPlay {...props} typeof="video/mp4" controls>
        </video>
      </Container>
    </>
  )
}

const Container = slyled.div`
video {
  width: 25rem;
  height: 15rem;
}
`;

export default Video;