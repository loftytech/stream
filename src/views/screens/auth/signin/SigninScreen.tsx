import { Button, Container, ForgotPass, Form, FormFooter, InputSec, MainSection, PasswordInput, SideSection, TabItem, TabWrapper, UsePhone, Wrapper } from './styles'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useRef, useState } from 'react'
import Loader from '../../../components/Loader/Loader'
import { Link } from 'react-router-dom'
import useAuthModel from '../useAuthModel'


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
            <Container>
                <SideSection>
                    <img src="/assets/img/banner-img.png" alt="banner" />
                    <h2>Real-time gas inventory tracking.</h2>
                    <h6>Efficient gas storage, simplified</h6>
                    <span>© Copyright 2003 - 2023 Mezovest Ind. Ltd. </span>
                </SideSection>
                <MainSection>
                    <Form>
                        <TabWrapper>
                            {/* <TabItem onClick={() => setIsSignup(true)} isActive={isSignUp}>Sign Up</TabItem> */}
                            <TabItem  onClick={() => setIsSignup(false)} isActive={!isSignUp}>Log in</TabItem>
                        </TabWrapper>

                        {isSignUp &&
                            <>
                                <InputSec>
                                    <img src="/assets/svg/user-icon.svg" alt="" />
                                    <input ref={name} id="user-email" type="text" placeholder="Name" />
                                </InputSec>
                                <InputSec>
                                    <img src="/assets/svg/user-icon.svg" alt="" />
                                    <input ref={phone} id="user-email" type="text" placeholder="Phone" />
                                </InputSec>
                            </>
                        }

                        <InputSec>
                            <img src="/assets/svg/user-icon.svg" alt="" />
                            <input ref={email} id="user-email" type="text" placeholder="Email" />
                        </InputSec>

                        {/* <UsePhone>
                            <span>use</span>
                            <Link to="#">phone number</Link>
                        </UsePhone> */}
                        <PasswordInput>
                            <div className="input-row">
                            <img src="/assets/svg/lock-icon.svg" alt="" />
                                <input ref={password} id="user-pass" type={showPassword ? "text" : "password"} placeholder="Enter password" />
                                {showPassword ? <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)} /> : <AiOutlineEye onClick={() => setShowPassword(!showPassword)} />}
                            </div>
                        </PasswordInput>

                        {!isSignUp && <ForgotPass>
                            <span>Forgot password?</span>
                            <Link to="#">contact admin</Link>
                        </ForgotPass>}

                        {isSignUp ? <Button onClick={signup}>{authModel.isSigningUp ? <Loader /> : "Sign Up"}</Button> : <Button onClick={signin}>{authModel.isSigningIn ? <Loader /> : "Login"}</Button>}
                    </Form>


                    <FormFooter>
                        <a href="#">Terms of Service</a>
                        <a href="#">Privacy Policy</a>
                    </FormFooter>
                </MainSection>
            </Container>
        </Wrapper>
    )
}

export default SigninScreen