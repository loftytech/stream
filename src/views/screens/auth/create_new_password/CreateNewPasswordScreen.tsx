import { Button, Container, Form, MainSection, PasswordCheckList, PasswordInput, Wrapper } from './styles'
import { useRef, useState } from 'react'
import Loader from '../../../components/Loader/Loader'
import { Link } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BsCheck } from 'react-icons/bs'
import { useAppSelector } from '../../../../hooks/hooks'
import useAuthModel from '../useAuthModel'


const CreateNewPasswordScreen: React.FC = () => {
    const authSlice = useAppSelector(state => state.auth.state)
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [canChangePassword, setCanChangePassword] = useState(false)
    const [passRequirements, setPassRequirements] = useState({
        minChar: false,
        upperLower: false,
        oneNum: false
    })

    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    const authModel = useAuthModel()

    const onChangePassword = () => {
        const _matchUpperCase = /([A-Z])/
        const _matchLowerCase = /([a-z])/
        const _matchOneNum = /\d/g
        const _requirements = {
            minChar: false,
            upperLower: false,
            oneNum: false
        }

        if (passwordRef.current!.value.match(_matchUpperCase) && passwordRef.current!.value.match(_matchLowerCase)) {
            _requirements.upperLower = true
        } else {
            _requirements.upperLower = false
        }

        if (passwordRef.current?.value.match(_matchOneNum)) {
            _requirements.oneNum = true
        } else {
            _requirements.oneNum = false
        }

        if (passwordRef.current!.value.length >= 8) {
            _requirements.minChar = true
        } else {
            _requirements.minChar = false
        }

        setPassRequirements(_requirements)

        if (_requirements.minChar && _requirements.oneNum && _requirements.upperLower && passwordRef.current?.value == confirmPasswordRef.current?.value) {
            setCanChangePassword(true)
        } else {
            setCanChangePassword(false)
        }
    }

    const changePassword = (e: any) => {
        e.preventDefault()

        authModel.resetPassword({
            email: authSlice.resetPassword.email,
            newPassword: passwordRef.current?.value,
            confirmNewPassword: passwordRef.current?.value,
            otp: authSlice.resetPassword.otp
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
                        <Link to="/forgot-password-otp" className="back-sec">
                            <MdKeyboardBackspace />
                            <span>Back</span>
                        </Link>
                        <h3>Create New Password</h3>
                        <div className="sub-title-row">
                            <span>Provide a mail to receive OTP</span>
                        </div>

                        <PasswordInput>
                            <label htmlFor="user-pass">New Password</label>
                            <div className="input-row">
                                <input ref={passwordRef} id="user-pass" type={showPassword ? "text" : "password"} placeholder="Enter password" onChange={onChangePassword} />
                                {showPassword ? <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)} /> : <AiOutlineEye onClick={() => setShowPassword(!showPassword)} />}
                            </div>
                        </PasswordInput>

                        <PasswordCheckList>
                            <li className={passRequirements.minChar ? "active" : "" }>
                                <span><BsCheck /></span>
                                <b>minimum of 8 character </b>
                            </li>
                            <li className={passRequirements.upperLower ? "active" : "" }>
                                <span><BsCheck /></span>
                                <b>A mix of upper and lower case letters</b>
                            </li>
                            <li className={passRequirements.oneNum ? "active" : "" }>
                                <span><BsCheck /></span>
                                <b>At least one number</b>
                            </li>
                        </PasswordCheckList>

                        <PasswordInput>
                            <label htmlFor="user-pass">Confirm password</label>
                            <div className="input-row">
                                <input ref={confirmPasswordRef} id="user-pass" type={showConfirmPassword ? "text" : "password"} placeholder="Enter password" onChange={onChangePassword} />
                                {showConfirmPassword ? <AiOutlineEyeInvisible onClick={() => setShowConfirmPassword(!showConfirmPassword)} /> : <AiOutlineEye onClick={() => setShowPassword(!showPassword)} />}
                            </div>
                        </PasswordInput>

                        <Button disabled={!canChangePassword} onClick={changePassword}>{authModel.isResetingPassword ? <Loader /> : "Reset password"}</Button>
                    </Form>
                </MainSection>
            </Container>
        </Wrapper>
    )
}

export default CreateNewPasswordScreen