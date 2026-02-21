import DashboardHeader from '../../components/dashboardHeader/DashboardHeader'
import { BalanceContainer, BalanceWrapper, Container, ExperienceContainer, HeadContainer, LiveStreamIndicator, LiveStreamWrapper, MoreFeatures, PlayerWrapper, RecentActivities, ReferralLink, TodayTrendingVideo, TrendingArtists, TrendingVideo, TrendingVideoWrapper, Wrapper } from './styles'
import { useEffect } from 'react'


const DashboardScreen: React.FC = () => {

    useEffect(() => {
        
    }, [])

    


    return (
        <Wrapper>
            <DashboardHeader title="Dashboard" subTitle="Welcome Jenny Willson2">
                
            </DashboardHeader>

            <Container>
                <HeadContainer>
                    <BalanceContainer>
                        <BalanceWrapper />
                        <PlayerWrapper />
                    </BalanceContainer>

                    <ExperienceContainer>
                        <div className="experience">
                            <h2>Experience<br /> The Feelings</h2>
                            <span>Explore and Collaborate</span>
                        </div>

                        <div className="col">
                            <div className="netflix">
                                <div className="info">
                                    <h2>An Adventurous Journey<br />into the unknown</h2>
                                    <span>Explore and Collaborate</span>
                                </div>
                            </div>

                            <div className="pintrest">
                                <div className="info">
                                    <h2>Pinterest <br />Earn now!</h2>
                                    <span>Pinterest Earn now!</span>
                                </div>
                            </div>

                            <div className="downloadables">
                                <div className="info">
                                    <h2>Downloadables</h2>
                                    <span>Pinterest Earn now!</span>
                                </div>
                            </div>
                        </div>
                    </ExperienceContainer>
                </HeadContainer>
                

                <LiveStreamWrapper>
                    <div className="items">
                        <div className="info">
                            <div className="meta">
                                <img src="/assets/img/twitch-icon.png" alt="" />
                                <span>LIVE NOW</span>
                            </div>

                            <h2>livestream collaboration</h2>
                            <p>show up, engage premium visual content and get rewarded</p>
                        </div>

                        <img src="/assets/img/live-stream-img.png" alt="" />
                    </div>

                    <div className="items">
                        <div className="info">
                            <div className="meta">
                                <img src="/assets/img/wish-hub-icon.png" alt="" />
                                <span>Wish hub</span>
                            </div>

                            <h2>$3 to get JBL speaker</h2>
                            <p>Enter Campaign and win amazing real time items.</p>
                        </div>

                        <img src="/assets/img/wish-hub-img.png" alt="" />
                    </div>
                </LiveStreamWrapper>

                <LiveStreamIndicator>
                    <span className='active'></span>
                    <span></span>
                    <span></span>
                </LiveStreamIndicator>

                <ReferralLink>
                    <h2>STREAM PARTNER LINK: </h2>
                    <a href="#">https://stream.vip/auth/register?ref=ifyiemedia</a>

                    <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4.51562" y="3.98438" width="19.5677" height="17.2656" stroke="#476160" stroke-width="2.125" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M24.0837 10.625H31.6097V27.8906H12.042V21.25" stroke="#476160" stroke-width="2.125" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </ReferralLink>

                <TrendingArtists>
                    <div className="head">
                        <h3>Trending Artists</h3>
                        <a href="#">VIEW ALL</a>
                    </div>

                    <ul className="hide-scrollbar">
                        {[1,2,3,4,5,6,7,8,9].map((item, idx) => {
                            return <li>
                                <img src="/assets/img/tmp/wizkid-img.png" alt="" />
                                <div className="content">
                                    <img src="/assets/img/music-icon.png" alt="" />
                                    <div className="info">
                                        <span>Wizkid</span>
                                        <span>Collaborated</span>
                                        <span>10 music available</span>
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>
                </TrendingArtists>

                <TrendingVideoWrapper>
                    <TodayTrendingVideo>
                        <div className="head">
                            <h3>TODAY TRENDING VIDEO</h3>
                        </div>

                        <img src="/assets/img/tmp/video-player-img.png" alt="" />
                    </TodayTrendingVideo>
                    <TrendingVideo>
                        <div className="head">
                            <h3>Trending video</h3>
                            <a href="#">VIEW ALL</a>
                        </div>

                        <ul className="hide-scrollbar">
                            {[1,2,3,4,5,6,7,8,9].map((item, idx) => {
                                return <li key={idx}>
                                    <img src="/assets/img/tmp/matrix-flyer.png" alt="" />
                                    <img className="play-circle" src="/assets/img/play-circle-faded.png" alt="" />
                                    <div className="content">
                                        <img src="/assets/img/play-btn-img.png" alt="" />
                                        <div className="info">
                                            <span>the Matrix</span>
                                            <span>Video available</span>
                                        </div>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </TrendingVideo>
                </TrendingVideoWrapper>

                <MoreFeatures>
                    <h2>More Features On Stream</h2>

                    <ul>
                        <li>
                            <h4>WishHub</h4>
                            <p>Win Amazing Things on Stream With the as low 1$</p>
                            <a href="#">Enrol now</a>
                        </li>
                        <li>
                            <h4>User Trigger</h4>
                            <p>Register your Downline for Free now Without Streampasss</p>
                            <a href="#">Start Now</a>
                        </li>
                    </ul>
                </MoreFeatures>

                <RecentActivities>
                    <h2>Recent Activities </h2>

                    <ul className="hide-scrollbar">
                        {[1,2,3,4,5,6,7,8,9].map((item, idx) => {
                            return <li key={idx}>
                                <div className="info">
                                    <div className="top">
                                        <div className="icon-box">
                                            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M44.5353 27.5694H40.2938C37.9514 27.5694 36.0524 29.4683 36.0524 31.8108V36.0523C36.0524 38.3947 37.9514 40.2937 40.2938 40.2937C42.6363 40.2937 44.5353 38.3947 44.5353 36.0522V27.5694ZM44.5353 27.5694C44.5353 17.0282 35.99 8.48288 25.4488 8.48288C14.9076 8.48288 6.3623 17.0282 6.3623 27.5694M6.3623 27.5694V36.0523C6.3623 38.3947 8.26126 40.2937 10.6037 40.2937C12.9462 40.2937 14.8452 38.3947 14.8452 36.0522V31.8108C14.8452 29.4683 12.9462 27.5694 10.6037 27.5694H6.3623Z" stroke="#FEFBEF" stroke-width="2.12072"/>
                                            </svg>
                                        </div>
                                        <div className="text-content">
                                            <h4>AudioCollab Earnings</h4>
                                            <span>05 Nov 2025, 01:40PM</span>
                                        </div>
                                    </div>

                                    <div className="trans-type">
                                        Collab Wallet
                                    </div>
                                </div>

                                <div className="meta">
                                    <span>₦1550</span>
                                    <span>Successful</span>
                                </div>
                            </li>
                        })}
                    </ul>
                </RecentActivities>
            </Container>
        </Wrapper>
    )
}

export default DashboardScreen