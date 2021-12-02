import { Container, Content, OwnerContainer, UsersContainer } from './styles'
import Header from '../../components/Header'

import Webcam from "react-webcam";


const Meeting: React.FC = () => {

  return (
    <>
      <Container>
        <Header />
        <Content>
          <UsersContainer>

          </UsersContainer>
          <OwnerContainer>
            <Webcam width={350} height={250} style={{marginTop:'12px', borderRadius:'1.5rem', width:'auto'}}/>
          </OwnerContainer>
        </Content>
      </Container>
    </>
  )
}

export default Meeting