import { Container, ContentRow, ExploreCard, ExploreCardWrapper, PlanTab, Wrapper } from './styles'
import HeaderAlt from '../../../components/headerAlt/HeaderAlt'
import FooterAlt from '../../../components/footerAlt/FooterAlt'
import { useNavigate } from 'react-router-dom'


const SignupScreen: React.FC = () => {
    const navigate = useNavigate()

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
                        <h2>Choose your Stream Plan</h2>
                        <h3>You're seconds away from joining a global wave of creators, listeners, and earners. Let's start your flow!</h3>

                        <ul>
                            <li>
                                <div className="col">
                                    <div className="save">
                                        <div className="check-box"></div>
                                        <span>+save 15%</span>
                                    </div>

                                    <h4>Stream Premium</h4>
                                    <p>A smarter path to maximum earnings, the full package for unlimited rewards. Every stream. Every benefit. No limits.</p>
                                </div>

                                <div className="action">
                                    <div className="amount">
                                        <span>$12</span>
                                        <span>$18</span>
                                    </div>

                                    <button  onClick={() => navigate("/create-account")}>Get Onboard</button>
                                </div>
                            </li>

                            <div className="limited" style={{display: "none"}}>
                                <img src="/assets/svg/limited-icon.svg" alt="" />
                                <span>Limited</span>
                            </div>
                            <li style={{display: "none"}}>
                                <div className="col">
                                    <div className="save">
                                        <div className="check-box"></div>
                                        <span>+save 20%</span>
                                    </div>

                                    <h4>Stream Luxury</h4>
                                    <p>Experience full access, zero re-subscription, and seamless automated earnings. This is streaming at its finest.</p>
                                </div>

                                <div className="action">
                                    <div className="locked-amount">
                                        <span>$</span>
                                        <img src="/assets/svg/limited-icon.svg" alt="" />
                                    </div>

                                    <button>Get Onboard</button>
                                </div>
                            </li>
                        </ul>
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

export default SignupScreen