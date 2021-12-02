import {ImgHTMLAttributes} from 'react'
import slyled from 'styled-components'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ alt, ...props}) => {
  return (
    <>
      <Container>
        <img alt={alt} {...props} />
      </Container>
    </>
  )
}

const Container = slyled.div`
img {
  width: 10rem;
  height: 6rem;
}
`;


export default Image;