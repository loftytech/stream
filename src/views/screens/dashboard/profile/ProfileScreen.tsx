import { useEffect, useRef, useState } from 'react'
import DashboardHeader from '../../../components/dashboardHeader/DashboardHeader'
import { ProfileContent, ProfileCard, Wrapper, Container, TabWrapper, ProfileInfo, ResubCard, DeleteAccount, Row, SaveChanges, ConfirmBank } from './styles'
import { AiFillBank, AiOutlineCloudUpload } from "react-icons/ai"
import { BiSave, BiTrash } from 'react-icons/bi'
import { useAppSelector } from '../../../../hooks/hooks'
import PopupModal from '../../../components/popupModal/PopupModal'
import { IoPerson } from 'react-icons/io5'
import { MdNumbers } from 'react-icons/md'
import useProfileModel from './useProfileModel'
import Loader from '../../../components/Loader/Loader'

const ProfileScreen: React.FC = () => {
    const [showBankModal, _setShowBankModal] = useState(false)
    const [selectedTab, setSelectedTab] = useState("profile")
    const profile = useAppSelector(state => state.profile.state)
    const profileModel = useProfileModel()
    const inputRef = useRef<any>(null);
    const bankCodeRef = useRef<HTMLSelectElement>(null)
    const accountNumberRef = useRef<HTMLInputElement>(null)
    const [preview, setPreview] = useState<string | null>(null);

    function handleChange(e) {
        const file = e.target.files[0];
        if (!file) return;

        const url = URL.createObjectURL(file);
        setPreview(url);
    }

    useEffect(() => {
        profileModel.fetchBanks()
        profileModel.fetchProfile()
    }, [])

    return (
        <Wrapper>
            <DashboardHeader title={"Profile"} subTitle={"Welcome " + profile.name} />

            <TabWrapper>
                <div className={`row ${selectedTab == "profile" ? "active" : ""}`} onClick={() => setSelectedTab("profile")}>
                    <span>1</span>
                    <span>Profile</span>
                </div>
                <div className={`row ${selectedTab == "bank" ? "active" : ""}`} onClick={() => setSelectedTab("bank")}>
                    <span>2</span>
                    <span>Payment </span>
                </div>
                <div className={`row ${selectedTab == "password" ? "active" : ""}`} onClick={() => setSelectedTab("password")}>
                    <span>3</span>
                    <span>Password </span>
                </div>
            </TabWrapper>

            <ProfileCard>
                <ProfileContent>
                    <input
                        ref={inputRef}
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handleChange}
                    />
                    <div className="profile-img">
                        <img src={preview ? preview : "/assets/img/avatar-img.png"} alt="" />
                    </div>

                    <div className="info">
                        <ul>
                            <li>
                                <b>{profile.name}</b>
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

                        <button onClick={(e) => {
                            e.preventDefault()
                            inputRef.current?.click();
                        }}>
                            <AiOutlineCloudUpload />
                            <span>Choose Image</span>
                        </button>
                    </div>
                </ProfileContent>
            </ProfileCard>

            <Container>
                {selectedTab == "profile" ? <ProfileInfo>
                    <h2>Personal Information</h2>

                    <form action="">
                        <div className="row">
                            <input type="text" placeholder="First Name" defaultValue={profileModel.profile?.name} />
                            <input type="text" placeholder="Phone" />
                        </div>
                        <div className="row">
                            <input type="text" placeholder="Last Name" />
                            <input type="text" placeholder="Gender" />
                        </div>
                        <div className="row">
                            <input type="text" placeholder="Username" defaultValue={profileModel.profile?.username} />
                            <input type="text" placeholder="Stream Interest" />
                        </div>
                        <div className="row">
                            <input type="text" placeholder="Email" defaultValue={profileModel.profile?.email} />
                        </div>
                    </form>
                </ProfileInfo> : selectedTab == "bank" ? <ProfileInfo>
                    <h2>Bank Information</h2>

                    <form action="">
                        <div className="row">
                            {profileModel.isFetchingBanks ? <Loader styleTwo /> : <select ref={bankCodeRef} name="" id="">
                                {profileModel.banks?.map((item, idx) => {
                                    return <option key={idx} value={item?.code}>{item?.name}</option>
                                })}
                            </select>}
                            <input ref={accountNumberRef} type="text" placeholder="Account Number" onChange={(e) => {
                                if (e.target.value.length == 10) {
                                    profileModel.resolveAccount({
                                        account_number: e.target.value,
                                        bank_code: bankCodeRef?.current?.value ?? ""
                                    })
                                }
                            }} />
                        </div>
                        {profileModel.isResolvingAccount ? <Loader styleTwo /> : <div className="row">
                            <input type="text" placeholder="Account Name" defaultValue={profileModel.resolvedName} />
                            <input hidden type="text" placeholder="" />
                        </div>}
                    </form>
                </ProfileInfo> : <ProfileInfo>
                    <h2>Change Password</h2>

                    <form action="">
                        <div className="row">
                            <input type="text" placeholder="Current Password" />
                            <input type="text" placeholder="New Password" />
                        </div>
                        <div className="row">
                            <input type="text" placeholder="Confirm Password" />
                            <input hidden type="text" placeholder="" />
                        </div>
                    </form>
                </ProfileInfo>}

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

                <SaveChanges onClick={() => profileModel.updateProfile({
                    account_number: accountNumberRef.current?.value,
                    bank_code: bankCodeRef.current?.value
                })}>
                    <BiSave />
                    {profileModel.isUpdatingProfile ? <Loader /> : <span>Save Changes</span>}
                </SaveChanges>
            </Container>

            <PopupModal maxWidth="400px" showPopup={showBankModal} background='#FEFBEF'>
                <ConfirmBank>
                    <img src="/assets/svg/warning-vector.svg" alt="" />
                    <h2>Are you sure all your Bank details are correct ?</h2>

                    <ul>
                        <li>
                            <AiFillBank />
                            <span>Vodacom</span>
                        </li>
                        <li>
                            <IoPerson />
                            <span>Abena Hannah</span>
                        </li>
                        <li>
                            <MdNumbers />
                            <span>123-456-789</span>
                        </li>
                    </ul>

                    <div className="actions">
                        <button>Yes</button>
                        <button>No</button>
                    </div>

                    <p>Kindly contact support to avoid loss of fund if details are not correct.</p>
                </ConfirmBank>
            </PopupModal>
        </Wrapper>
    )
}

export default ProfileScreen