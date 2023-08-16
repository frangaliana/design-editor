import { ReactComponent as ErrorWindow } from '../../../assets/icons/error-window.svg'
import { H3 } from '../../Text'
import { Container } from './styles'

const InternalError = () => (
  <Container>
    <ErrorWindow />
    <H3>
      An error ocurred <br /> Please, try again
    </H3>
  </Container>
)

export default InternalError
