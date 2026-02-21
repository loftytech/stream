import { Container, ContentRow, ExploreCard, ExploreCardWrapper, PlanTab, SignupSuccess, Wrapper } from './styles'
import { useRef, useState } from 'react'
import useAuthModel from '../useAuthModel'
import HeaderAlt from '../../../components/headerAlt/HeaderAlt'
import FooterAlt from '../../../components/footerAlt/FooterAlt'
import { CgCheck, CgClose } from 'react-icons/cg'
import PopupModal from '../../../components/popupModal/PopupModal'
import useQuery from '../../../../hooks/useQuery'
import Loader from '../../../components/Loader/Loader'
import { Link, useNavigate } from 'react-router-dom'


const CreateAccountScreen: React.FC = () => {
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const query = useQuery()

    const authModel = useAuthModel()
    
    const fullnameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const countryRef = useRef<HTMLInputElement>(null)
    const streamPassRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const usernameRef = useRef<HTMLInputElement>(null)

    const signup = (e: any) => {
        e.preventDefault()
        authModel.signup({
            name: fullnameRef?.current?.value,
            username: usernameRef.current?.value,
            email: emailRef.current?.value,
            phone: phoneRef.current?.value,
            country: countryRef.current?.value,
            password: passwordRef.current?.value,
            scale_code: streamPassRef.current?.value,
            ref: query.get("referred_by")
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
                        <h3>You're seconds away from joining a global wave of creators, listeners, and earners. Let's start your flow!</h3>

                        <form action="">
                            {query.get("referred_by") ? <div className="referred">
                                <span>Onboarding under: {query.get("referred_by") }</span>
                            </div> : <></>}
                            <input ref={fullnameRef} type="text" placeholder="Full name" />
                            <input ref={usernameRef} type="text" placeholder="Username" />
                            <input ref={emailRef} type="text" placeholder="Email Address" />
                            <input ref={phoneRef} type="text" placeholder="Phone Number" />
                            <input ref={countryRef} type="text" placeholder="Country" />
                            <input ref={passwordRef} type="password" placeholder="Password" />
                            <input ref={streamPassRef} type="text" placeholder="StreamPass" />

                            <div className="meta" style={{marginBottom: 20}}>
                                <a href="#">Do not have a StreamPass? <span>check here!</span></a>
                            </div>

                            <div className="terms" onClick={() => setAcceptedTerms(!acceptedTerms)}>
                                <div className={`check-box ${acceptedTerms ? "checked" : ""}`}>
                                    <CgCheck />
                                </div>
                                <a href="#">i agree to the terms and conditions</a>
                            </div>

                            <button onClick={signup}>{authModel.isSigningUp ? <Loader /> : "Create Account"}</button>

                            <div className="meta">
                            
                             <Link to="/signin">Already Have Account With us? <span>Login Now</span></Link>
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

            <PopupModal background='transparent' showPopup={authModel.showSuccessModal} closeModal={() => authModel.setShowSuccessModal(false)}>
                <SignupSuccess>
                    <div className="close-btn" onClick={() => authModel.setShowSuccessModal(false)}>
                        <CgClose />
                    </div>
                    <img src="/assets/img/welcome-img.png" alt="" />
                    <div className="content">
                        <h2>Welcome, {fullnameRef.current?.value}</h2>
                        <p>Start earning effortlessly by watching videos, listening to music, streaming media, and downloading images. Explore, enjoy, and get rewarded for every moment you spend on the platform.</p>
                        <Link to="/signin">Go to Dashboard</Link>
                    </div>
                </SignupSuccess>
            </PopupModal>
            <FooterAlt />
        </Wrapper>
    )
}

export default CreateAccountScreen