import { Container, ContentRow, ExploreCard, ExploreCardWrapper, PlanTab, Wrapper } from './styles'
import { useRef, useState } from 'react'
import useAuthModel from '../useAuthModel'
import Footer from '../../../components/footer/Footer'
import HeaderAlt from '../../../components/headerAlt/HeaderAlt'
import FooterAlt from '../../../components/footerAlt/FooterAlt'


const SigninScreen: React.FC = () => {
    const [isSignUp, setIsSignup] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const authModel = useAuthModel()

    const name = useRef<HTMLInputElement>(null);
    const phone = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const signin = (e: any) => {
        e.preventDefault()
        authModel.signin({
            account: email.current?.value,
            password: password.current?.value
        })
    }

    const signup = (e: any) => {
        e.preventDefault()
        authModel.signup({
            email: email.current?.value,
            password: password.current?.value,
            name: name.current?.value,
            phone: phone.current?.value,
        })
    }

    return (
        <Wrapper>
            <HeaderAlt />
            <Container>
                <PlanTab>
                    <div className="row">
                        <span>1</span>
                        <span>Plan</span>
                    </div>
                    <div className="row">
                        <span>2</span>
                        <span>Profile and Security </span>
                    </div>
                </PlanTab>

                <ContentRow>
                    <div className="text-content">
                        <h2>Login Account</h2>
                        <h3>Log in to Continue your journey — stay in motion, stay in the Stream</h3>

                        <form action="">
                            <input type="text" placeholder="Email Address" />
                            <input type="text" placeholder="Password" />
                            <button>Login</button>

                            <div className="meta">
                                <a href="#">Don't Have Account With us?<span>Create Here</span></a>
                            </div>
                        </form>
                    </div>
                
                    <div className="img-content">
                        <img src="/assets/img/auth-side-img.png" alt="" />
                    </div>
                </ContentRow>
            </Container>

            <ExploreCardWrapper>
                <ExploreCard>
                    <p>Our website offers real opportunities to earn and grow. Join a trusted platform where effort meets reward and success is built together.</p>
                    <a href="#">Explore</a>
                </ExploreCard>
            </ExploreCardWrapper>
            <FooterAlt />
        </Wrapper>
    )
}

export default SigninScreen