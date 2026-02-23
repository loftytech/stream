import { BiDislike, BiSolidLike } from 'react-icons/bi'
import DashboardHeader from '../../../../components/dashboardHeader/DashboardHeader'
import { Wrapper, Container, ProductWrapper, RoyaltyDetails, MainContent, SideBar } from './styles'
import { FaRegComment } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const SnapRoyalties: React.FC = () => {
    const navigate = useNavigate()    

    return (
        <Wrapper>
            <DashboardHeader title={"Sound Royalties"} subTitle="Welcome Jenny Willson!">
                
            </DashboardHeader>

            <MainContent>
                <Container>
                    <RoyaltyDetails>
                        <div className="img-wrapper">
                            <img src="/assets/img/tmp/more-followers-img.png" alt="" />
                        </div>

                        <div className="actions">
                            <div className='sub-action'>
                                <BiSolidLike />
                                <span>53.7k</span>
                            </div>
                            <div className='sub-action'>
                                <BiDislike />
                                <span>0</span>
                            </div>

                            <div className='sub-action'>
                                <FaRegComment />
                                <span>1.3k</span>
                            </div>
                        </div>

                        <h2>How To Get More Followers On Streams</h2>
                        <h4>Please Preform The task Probably to get your earns</h4>

                        <p>
                            Gaining more followers on your streaming platform requires consistency, authenticity, and engagement. First, identify your niche—whether it’s gaming, music, talk shows, or lifestyle—and stick to it so viewers know what to expect. Consistency is key: stream regularly and at scheduled times to build a loyal audience. Engage actively with your viewers through live chats, shout-outs, and Q&A sessions to make them feel valued. Use eye-catching titles, thumbnails, and quality visuals to attract new viewers. Promote your streams on social media platforms like TikTok, Instagram, and X to reach a wider audience. Lastly, collaborate with other streamers to tap into their follower base. Remember, growth takes time—focus on building genuine connections and offering entertaining or valuable content, and your follower count will rise naturally.
                        </p>

                        <div className="earn-actions">
                            <button>Tiktok</button>
                            <button>Earn with Instagram</button>
                            <button>Earn To Telegram</button>
                            <button>Share To Earn</button>
                        </div>
                    </RoyaltyDetails>
                </Container>

                <SideBar>
                    <ProductWrapper>
                        <div className="head">
                            <h3>Similar Snap To Download</h3>
                        </div>

                        <ul className="hide-scrollbar">
                            {[1,2, 4,5,6,7,8,8,9].map((item, idx) => {
                                return <li key={idx} onClick={() => {
                                    navigate("/dashboard/wish-hub/" + item)
                                }}>
                                    <b>How To get more Followers</b>
                                    <div className="img-wrapper">
                                        <img src="/assets/img/tmp/more-followers-img.png" alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>Earn by Participating in daily Task</h4>

                                        <div className="actions">
                                            <div className='sub-action'>
                                                <BiSolidLike />
                                                <span>3</span>
                                            </div>
                                            <div className='sub-action'>
                                                <BiDislike />
                                                <span>0</span>
                                            </div>

                                            <div className='sub-action'>
                                                <FaRegComment />
                                                <span>0</span>
                                            </div>
                                        </div>
                                        
                                        <div className="meta">
                                            <span>₦1050</span>
                                            <span>Daily</span>
                                        </div>

                                        <button>Earn Now</button>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </ProductWrapper>
                </SideBar>
            </MainContent>
        </Wrapper>
    )
}

export default SnapRoyalties