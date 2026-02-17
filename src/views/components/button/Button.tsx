import Loader from '../Loader/Loader'
import { Wrapper } from './styles'

interface ButtonInterface {
    isLoading?: boolean,
    width?: string,
    isDisabled?: boolean,
    onClick?: () => void
    children: React.ReactNode
}
const Button: React.FC<ButtonInterface> = ({width, isLoading = false, onClick = () => {}, isDisabled = false, children}) => {

    return (
        <Wrapper width={width} disabled={isDisabled} onClick={() => {
            if (isLoading) {
                return;
            }
            onClick()
        }}>
            {isLoading ? <Loader /> : children}
        </Wrapper>
    )
}

export default Button