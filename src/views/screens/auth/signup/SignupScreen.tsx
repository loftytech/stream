import { Button, Container, Form, FormFooter, InputSec, MainSection, PasswordInput, Wrapper } from './styles'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useRef, useState } from 'react'
import Loader from '../../../components/Loader/Loader'
import { Link } from 'react-router-dom'
import useAuthModel from '../useAuthModel'


const SignupScreen: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const authModel = useAuthModel()

    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const signup = (e: any) => {
        e.preventDefault()
        authModel.signup({
            email: email.current?.value,
            password: password.current?.value
        })
    }

    return (
        <Wrapper>
            <Container>
                <MainSection>
                    <div className="banner">
                        <img src="/assets/svg/banner.svg" alt="banner" />
                    </div>
                    <Form>
                        <h3>Become Dart-minded</h3>
                        <div className="sub-title-row">
                            <span>Already have an account? </span>
                            <Link to="/signin">Sign in</Link>
                        </div>
                        <InputSec>
                            <label htmlFor="user-email">Email</label>
                            <input ref={email} id="user-email" type="text" placeholder="Enter email address" />
                        </InputSec>
                        <PasswordInput>
                            <label htmlFor="user-pass">Password</label>
                            <div className="input-row">
                                <input ref={password} id="user-pass" type={showPassword ? "text" : "password"} placeholder="Enter password" />
                                {showPassword ? <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)} /> : <AiOutlineEye onClick={() => setShowPassword(!showPassword)} />}
                            </div>
                        </PasswordInput>
                        <Button onClick={signup}>{authModel.isSigningUp ? <Loader /> : "Sign Up"}</Button>

                        <FormFooter> 
                            <div className="or-alt">
                                <span className="or-alt">Or</span>
                            </div>

                            <div className="social-auth">
                                <img src="/assets/svg/google-icon.svg" alt="google icon" />
                                <span>Continue with Google</span>
                            </div>

                            <div className="social-auth">
                                <img src="/assets/img/key-icon.png" alt="google icon" />
                                <span>Continue with Passkeys</span>
                            </div>
                        </FormFooter>
                    </Form>
                </MainSection>
            </Container>
        </Wrapper>
    )
}

export default SignupScreen