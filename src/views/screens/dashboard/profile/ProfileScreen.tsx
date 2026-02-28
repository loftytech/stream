import { useEffect } from 'react'
import DashboardHeader from '../../../components/dashboardHeader/DashboardHeader'
import { ProfileContent, ProfileCard, Wrapper, Container, TabWrapper, ProfileInfo, ResubCard, DeleteAccount, Row, SaveChanges } from './styles'
import useAudioColabModel from './useAudioColabModel'
import { AiOutlineCloudUpload } from "react-icons/ai"
import { BiSave, BiTrash } from 'react-icons/bi'

const ProfileScreen: React.FC = () => {
    const audioColabModel = useAudioColabModel()

    useEffect(() => {
        audioColabModel.fetchAudioColab()
    }, [])

    return (
        <Wrapper>
            <DashboardHeader title={"Audio Colab"} subTitle="Welcome Jenny Willson!">
                
            </DashboardHeader>


            <TabWrapper>
                <div className="row">
                    <span>1</span>
                    <span>Profile</span>
                </div>
                <div className="row">
                    <span>2</span>
                    <span>Payment </span>
                </div>
                <div className="row">
                    <span>3</span>
                    <span>Password </span>
                </div>
            </TabWrapper>

            <ProfileCard>
                <ProfileContent>
                    <div className="profile-img">
                        <img src="/assets/img/avatar-img.png" alt="" />
                    </div>

                    <div className="info">
                        <ul>
                            <li>
                                <b>Jenny Willson</b>
                                <img src="/assets/svg/nigeria-flag.svg" alt="" />
                            </li>

                            <li>
                                <span>Package</span>
                                <span>PREMIUM</span>
                            </li>

                            <li>
                                <span>Currency</span>
                                <span>USD</span>
                            </li>
                        </ul>

                        <button>
                            <AiOutlineCloudUpload />
                            <span>Choose Image</span>
                        </button>
                    </div>
                </ProfileContent>
            </ProfileCard>

            <Container>
                <ProfileInfo>
                    <h2>Personal Information</h2>

                    <form action="">
                        <div className="row">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Phone" />
                        </div>
                        <div className="row">
                            <input type="text" placeholder="Last Name" />
                            <input type="text" placeholder="Gender" />
                        </div>
                        <div className="row">
                            <input type="text" placeholder="Username" />
                            <input type="text" placeholder="Stream Interest" />
                        </div>
                        <div className="row">
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="Religion" />
                        </div>
                        <div className="row">
                            <input type="text" placeholder="Location" />
                            <input hidden type="text" placeholder="" />
                        </div>
                    </form>
                </ProfileInfo>

                <ProfileInfo>
                    <h2>Bank Information</h2>

                    <form action="">
                        <div className="row">
                            <input type="text" placeholder="Account Number" />
                            <input type="text" placeholder="Select Bank" />
                        </div>
                        <div className="row">
                            <input type="text" placeholder="Account Name" />
                            <input hidden type="text" placeholder="" />
                        </div>
                    </form>
                </ProfileInfo>

                <Row>
                    <ResubCard>
                        <div className="date-indicator">
                            <img src="/assets/svg/counter-wrapper.svg" alt="" />
                            <span>31</span>
                        </div>

                        <div className="text-content">
                            <h4>Countdown To Re-Subscription</h4>
                            <ul>
                                <li>
                                    <b>17</b>
                                    <span>Hours</span>
                                </li>
                                <li>
                                    <b>51</b>
                                    <span>Minutes</span>
                                </li>
                                <li>
                                    <b>06</b>
                                    <span>Seconds</span>
                                </li>
                            </ul>

                            <p>renew your music z-- to keep enjoying nonstop listening, ad-free streaming, offline access, personalized playlists and new release. stay Connected to your Favourite songs with a smooth, uninterrupted music experience.</p>
                        </div>
                    </ResubCard>

                    <DeleteAccount>
                        <h4>Delete Account</h4>
                        <p>To delete your account, please contact support. This action is irreversible</p>
                        <button>
                            <BiTrash />
                            <span>Delete Account</span>
                        </button>
                    </DeleteAccount>
                </Row>

                <SaveChanges>
                    <BiSave />
                    <span>Save Changes</span>
                </SaveChanges>
            </Container>
        </Wrapper>
    )
}

export default ProfileScreen