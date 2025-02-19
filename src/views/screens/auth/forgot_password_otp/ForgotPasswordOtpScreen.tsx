import { Button, CodeWrapper, Container, Footer, Form, MainSection, Wrapper } from './styles'
import { useRef, useState } from 'react'
import Loader from '../../../components/Loader/Loader'
import { Link, useNavigate } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md'
import { useAppDispatch } from '../../../../hooks/hooks'
import { setResetPasswordOtp } from '../../../../slices/authSlice'


const ForgotPasswordOtpScreen: React.FC = () => {
    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [otp, setOtp] = useState("")

    const inputRef1 = useRef<HTMLInputElement>(null)
    const inputRef2 = useRef<HTMLInputElement>(null)
    const inputRef3 = useRef<HTMLInputElement>(null)
    const inputRef4 = useRef<HTMLInputElement>(null)
    const inputRef5 = useRef<HTMLInputElement>(null)
    const inputRef6 = useRef<HTMLInputElement>(null)

    const handleInputChange = (_e: React.ChangeEvent<HTMLInputElement>) => {
        const _otp = inputRef1.current!.value +  inputRef2.current!.value +  inputRef3.current!.value +  inputRef4.current!.value +  inputRef5.current!.value +  inputRef6.current!.value
        setOtp(_otp)

        dispatch(setResetPasswordOtp(_otp))
    }

    const navigation = useNavigate()

    const confirmOtp = (e: any) => {
        e.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            navigation("/create-new-password")
            setIsLoading(false)
        }, 3000)
    }

    return (
        <Wrapper>
            <Container>
                <MainSection>
                    <div className="banner">
                        <img src="/assets/svg/banner.svg" alt="banner" />
                    </div>
                    <Form>
                        <Link to="/forgot-password" className="back-sec">
                            <MdKeyboardBackspace />
                            <span>Back</span>
                        </Link>
                        <h3>OTP Verification</h3>
                        <div className="sub-title-row">
                            <span>Provide a 4 digit code sent to</span>
                            <span>example@gmail.com</span>
                        </div>
                        <CodeWrapper>
                            <input ref={inputRef1} type="text" placeholder="-" onChange={(e) => {
                                handleInputChange(e);
                                if (e.target.value.length == 1) {
                                    inputRef2.current?.focus()
                                } else {
                                    
                                }
                            }} autoFocus />
                            <input ref={inputRef2} type="text" placeholder="-" onChange={(e) => {
                                handleInputChange(e);
                                if (e.target.value.length == 1) {
                                    inputRef3.current?.focus()
                                } else {
                                    inputRef1.current?.focus()
                                }
                            }} />
                            <input ref={inputRef3} type="text" placeholder="-" onChange={(e) => {
                                handleInputChange(e);
                                if (e.target.value.length == 1) {
                                    inputRef4.current?.focus()
                                } else {
                                    inputRef2.current?.focus()
                                }
                            }} />
                            <input ref={inputRef4} type="text" placeholder="-" onChange={(e) => {
                                handleInputChange(e);
                                if (e.target.value.length == 1) {
                                    inputRef5.current?.focus()
                                } else {
                                    inputRef3.current?.focus()
                                }
                            }} />
                            <input ref={inputRef5} type="text" placeholder="-" onChange={(e) => {
                                handleInputChange(e);
                                if (e.target.value.length == 1) {
                                    inputRef6.current?.focus()
                                } else {
                                    inputRef4.current?.focus()
                                }
                            }} />
                            <input ref={inputRef6} type="text" placeholder="-" onChange={(e) => {
                                handleInputChange(e);
                                if (e.target.value.length == 1) {
                                    inputRef6.current?.blur()
                                    // verifyOtp()
                                    // router.push("/dashboard")
                                } else {
                                    inputRef5.current?.focus()
                                }
                            }} />
                        </CodeWrapper>

                        <Button disabled={otp.length < 4} onClick={confirmOtp}>{isLoading ? <Loader /> : "Verify OTP"}</Button>

                        <Footer>
                            <span>Resend</span>
                        </Footer>
                    </Form>
                </MainSection>
            </Container>
        </Wrapper>
    )
}

export default ForgotPasswordOtpScreen