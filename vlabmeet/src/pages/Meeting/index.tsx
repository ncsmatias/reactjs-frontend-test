import { Container } from './styles'
import Header from '../../components/Header'

const Meeting: React.FC = () => {

  return (
    <>
      <Header />
      <Container>
        <p>Olá meeting</p>
      </Container>
    </>
  )
}

export default Meeting