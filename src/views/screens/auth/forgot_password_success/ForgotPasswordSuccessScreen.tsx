import { Button, Container, Form, MainSection, Wrapper } from './styles'
import { useNavigate } from 'react-router-dom'


const ForgotPasswordSuccessScreen: React.FC = () => {

    const navigate = useNavigate()

    return (
        <Wrapper>
            <Container>
                <MainSection>
                    <div className="banner">
                        <img src="/assets/svg/banner.svg" alt="banner" />
                    </div>
                    <Form>

                        <div className="github-wrapper">
                            <img src="/assets/svg/check-circle-vector.svg" alt="github vector" />
                        </div>


                        <h3>Password changed!</h3>
                        <div className="sub-title-row">
                            <span>You can always change your password via settings </span>
                        </div>

                        <Button onClick={() => {navigate("/signin")}}>Go to Login</Button>
                    </Form>
                </MainSection>
            </Container>
        </Wrapper>
    )
}

export default ForgotPasswordSuccessScreen