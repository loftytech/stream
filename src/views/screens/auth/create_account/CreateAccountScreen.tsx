import { Container, ContentRow, ExploreCard, ExploreCardWrapper, PlanTab, SignupSuccess, Wrapper } from './styles'
import { useRef, useState } from 'react'
import useAuthModel from '../useAuthModel'
import Footer from '../../../components/footer/Footer'
import HeaderAlt from '../../../components/headerAlt/HeaderAlt'
import FooterAlt from '../../../components/footerAlt/FooterAlt'
import { CgCheck, CgClose } from 'react-icons/cg'
import PopupModal from '../../../components/popupModal/PopupModal'


const CreateAccountScreen: React.FC = () => {
    const [showSucces, setShowSuccess] = useState(false)
    const [acceptedTerms, setAcceptedTerms] = useState(false);

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
                        <h2>Create an Account</h2>
                        <h3>You're seconds away from joining a global wave of creators, listeners, and earners. Let’s start your flow!</h3>

                        <form action="">
                            <div className="referred">
                                <span>Onboarding under: TalkwithBright</span>
                            </div>
                            <input type="text" placeholder="Full name" />
                            <input type="text" placeholder="Username" />
                            <input type="text" placeholder="Email Address" />
                            <input type="text" placeholder="Phone Number" />
                            <input type="text" placeholder="Country" />
                            <input type="password" placeholder="Password" />
                            <input type="text" placeholder="StreamPass" />

                            <div className="meta" style={{marginBottom: 20}}>
                                <a href="#">Do not have a StreamPass? <span>check here!</span></a>
                            </div>

                            <div className="terms" onClick={() => setAcceptedTerms(!acceptedTerms)}>
                                <div className={`check-box ${acceptedTerms ? "checked" : ""}`}>
                                    <CgCheck />
                                </div>
                                <a href="#">i agree to the terms and conditions</a>
                            </div>

                            <button onClick={(e) => {
                                e.preventDefault()
                                setShowSuccess(true)
                            }}>Create Account</button>

                            <div className="meta">
                                <a href="#">Already Have Account With us? <span>Login Now</span></a>
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

            <PopupModal background='transparent' showPopup={showSucces} closeModal={() => setShowSuccess(false)}>
                <SignupSuccess>
                    <div className="close-btn" onClick={() => setShowSuccess(false)}>
                        <CgClose />
                    </div>
                    <img src="/assets/img/welcome-img.png" alt="" />
                    <div className="content">
                        <h2>Welcome, Olabisi Adeyemi</h2>
                        <p>Start earning effortlessly by watching videos, listening to music, streaming media, and downloading images. Explore, enjoy, and get rewarded for every moment you spend on the platform.</p>
                        <a href="/dashboard">Go to Dashboard</a>
                    </div>
                </SignupSuccess>
            </PopupModal>
            <FooterAlt />
        </Wrapper>
    )
}

export default CreateAccountScreen