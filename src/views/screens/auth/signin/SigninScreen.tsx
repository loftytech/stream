import { Container, ContentRow, ExploreCard, ExploreCardWrapper, PlanTab, Wrapper } from './styles'
import { useRef } from 'react'
import HeaderAlt from '../../../components/headerAlt/HeaderAlt'
import FooterAlt from '../../../components/footerAlt/FooterAlt'
import useAuthModel from '../useAuthModel'
import Loader from '../../../components/Loader/Loader'
import { Link, useNavigate } from 'react-router-dom'

const SigninScreen: React.FC = () => {
    const authModel = useAuthModel()

    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const signin = async (e: React.FormEvent) => {
        e.preventDefault()
        authModel.signin({
            username: username.current?.value,
            password: password.current?.value
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

                        <form onSubmit={signin}>
                           

                            <input 
                                type="text" 
                                placeholder="Username" 
                                ref={username}
                                required
                                disabled={authModel.isSigningIn}
                            />
                            
                            <input 
                                type="password" 
                                placeholder="Password" 
                                ref={password}
                                required
                                disabled={authModel.isSigningIn}
                            />

                            <button 
                                type="submit"
                                disabled={authModel.isSigningIn}
                                style={{ opacity: authModel.isSigningIn ? 0.6 : 1 }}
                            >
                                {authModel.isSigningIn ? <Loader /> : 'Login'}
                            </button>

                            <div className="meta">
                                
                              <Link to="/signin">Don't Have Account With us?<span> Create Here</span></Link>
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