import { Button, Container, Form, InputSec, MainSection, Wrapper } from './styles'
import { useRef } from 'react'
import Loader from '../../../components/Loader/Loader'
import { Link } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md'
import useAuthModel from '../useAuthModel'
import { useAppDispatch } from '../../../../hooks/hooks'
import { setResetPasswordEmail } from '../../../../slices/authSlice'


const ForgotPasswordScreen: React.FC = () => {
    const authModel = useAuthModel()
    const dispatch = useAppDispatch()

    const email = useRef<HTMLInputElement>(null);

    const resetPassword = (e: any) => {
        e.preventDefault()

        dispatch(setResetPasswordEmail(email.current!.value))

        authModel.forgotPassword({
            email: email.current?.value
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
                        <Link to="/signin" className="back-sec">
                            <MdKeyboardBackspace />
                            <span>Back to Login</span>
                        </Link>
                        <h3>Forgot password</h3>
                        <div className="sub-title-row">
                            <span>Provide a mail to receive OTP</span>
                        </div>
                        <InputSec>
                            <label htmlFor="user-email">Email</label>
                            <input ref={email} id="user-email" type="text" placeholder="Enter email address" />
                        </InputSec>

                        <Button onClick={resetPassword}>{authModel.isSendingOtp ? <Loader /> : "Send OTP"}</Button>
                    </Form>
                </MainSection>
            </Container>
        </Wrapper>
    )
}

export default ForgotPasswordScreen