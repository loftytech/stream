import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { ExperienceWrapper, ExploreWrapper, FaqWrapper, FeaturesWrapper, GetStartedContent, GetStartWrapper, QuestionsWrapper, ReasonContent, ReasonWrapper, ReviewContent, ReviewWrapper, TrustedWrapper, WhoWeAreContent, WhoWeAreWrapper, Wrapper } from './style'
import { FiPlusCircle } from 'react-icons/fi'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const HomeScreen: React.FC = ()  => {
    return (
        <>
            <Header />
            <Wrapper>
                <TrustedWrapper>
                    <h2>Trusted by 287+ million creatives, marketers, and businesses</h2>
                    <ul className="hide-scrollbar">
                        <li>
                            <img src="/assets/img/partners/instagram.png" alt="" />
                        </li>
                        <li>
                            <img src="/assets/img/partners/soundcloud.png" alt="" />
                        </li>
                        <li>
                            <img src="/assets/img/partners/netflix.png" alt="" />
                        </li>
                        <li>
                            <img src="/assets/img/partners/spotify.png" alt="" />
                        </li>
                        <li>
                            <img src="/assets/img/partners/apple-watch.png" alt="" />
                        </li>
                        <li>
                            <img src="/assets/img/partners/youtube.png" alt="" />
                        </li>
                        <li>
                            <img src="/assets/img/partners/tiktok.png" alt="" />
                        </li>
                    </ul>
                </TrustedWrapper>

                <FeaturesWrapper>
                    <h2>Core Features (SUPER PACKED)</h2>
                    <h6>A platform enhanced and driven by powerful features, designed to inspire creativity, boost engagement, and empower your digital experience.</h6>
                

                    <ul>
                        <li>
                            <img src="/assets/img/video-colab-img.png" alt="" />
                            <h3>Video Collaboration</h3>
                            <p>Watch videos, learn new skills, and earn rewards effortlessly, turning your screen time into real value on our multimedia platform.</p>
                        </li>
                        <li>
                            <img src="/assets/img/snap-colab-img.png" alt="" />
                            <h3>Snap Collaboration</h3>
                            <p>Check out photos, rate what you see, and earn rewards instantly, simple, fun, and rewarding on our multimedia platform.</p>
                        </li>
                        <li>
                            <img src="/assets/img/audio-colab-img.png" alt="" />
                            <h3>Audio Collaboration</h3>
                            <p>Listen to your favorite music, discover new artists, and earn rewards while enjoying every beat ; entertainment that pays you back.</p>
                        </li>
                        <li>
                            <img src="/assets/img/live-steam-img.png" alt="" />
                            <h3>Live Streaming</h3>
                            <p>Live streaming lets creators connect instantly with audiences, monetize views, gifts, and subscriptions, and earn income while sharing content in real time.</p>
                        </li>
                        <li>
                            <img src="/assets/img/file-download-img.png" alt="" />
                            <h3>File Downloads</h3>
                            <p>Download files, stream content, and earn rewards instantly—simple, fast, and secure platform turning your downloads and streams into real income.</p>
                        </li>
                        <li>
                            <img src="/assets/img/tiktok-network-img.png" alt="" />
                            <h3>Tiktok Creators Network</h3>
                            <p>TikTok Creators Network empowers creators to monetizes, grow audiences, unlock brand deals, and earn real income through engagement.</p>
                        </li>
                        <li>
                            <img src="/assets/img/wishhub-img.png" alt="" />
                            <h3>WishHub</h3>
                            <p>WishHub : a fun platform where you play, win amazing gifts at small prices, and earn rewards effortlessly every day.</p>
                        </li>
                        <li>
                            <img src="/assets/img/stream-skilluo-img.png" alt="" />
                            <h3>Stream SkillUp</h3>
                            <p>Learn in-demand digital skills, watch expert videos, and earn from your creativity, all in one powerful multimedia platform.</p>
                        </li>
                        <li>
                            <img src="/assets/img/stream-baza-img.png" alt="" />
                            <h3>Stream Bazar</h3>
                            <p>Support Services provides personalized guidance, resources, and tools to help learners grow, improve skills, and achieve educational success online.</p>
                        </li>
                    </ul>
                </FeaturesWrapper>

                <ExperienceWrapper>
                    <h2>Experience the Pulse of Multimedia</h2>
                    <h6>Stay updated with the hottest videos, stunning visuals, and trending music. Your hub for all things creative and inspiring as you turn entertainment to Income</h6>

                    <img src="/assets/img/dashboard-screenshot.png" alt="" />
                </ExperienceWrapper>

                <WhoWeAreWrapper>
                    <WhoWeAreContent>
                        <img src="/assets/img/who-we-are-img.png" alt="" />
                    </WhoWeAreContent>
                </WhoWeAreWrapper>

                <ExploreWrapper>
                    <p>
                        Step into a world where creativity meets connection  where every sound, sight, and story comes alive. Stream is the platform where your everyday digital activities start paying you. Watch videos, listen to audio, view snaps, and download files  and earn real royalties from every action. 
                        Simple. Fast. Addictive. Built for Africa’s digital earners all around the world.  Ready to begin your journey with Stream?Come onboard now!. Experience the pulse. Feel the energy. Live the moment ; only on Streams.
                    </p>

                    <a href="#">Explore and Collaborate</a>
                </ExploreWrapper>

                <ReasonWrapper>
                    <ReasonContent>
                        <div className="head">
                            <div className="text-info">
                                <h2>Reasons to Be Part of Us</h2>
                                <h6>Join a vibrant multimedia community where you can watch, learn, listen, and earn while growing your creativity and digital influence.</h6>
                            </div>

                            <div className="steam-board">
                                <img src="/assets/img/stream-board-img.png" alt="" />
                            </div>
                        </div>

                        <ul>
                            <li>
                                <img src="/assets/img/onboard-img.png" alt="" />
                                <h4>Get Onboard with Us</h4>
                                <p>Unlock your potential — register with us to learn, watch, and grow your skills through engaging multimedia content and opportunities.</p>
                            </li>
                            <li>
                                <img src="/assets/img/watch-media-img.png" alt="" />
                                <h4>Watch our Available Multimedia</h4>
                                <p>Explore, learn, and grow through our rich multimedia library — watch inspiring videos, tutorials, and creative content anytime, anywhere.</p>
                            </li>
                            <li>
                                <img src="/assets/img/insteant-withdraw-img.png" alt="" />
                                <h4>Earn and Withdraw Instantly</h4>
                                <p>Learn new skills, earn rewards for every activity, and withdraw your earnings instantly — simple, fast, and rewarding for everyone.</p>
                            </li>
                        </ul>

                        <a href="#">Explore and Collaborate</a>
                    </ReasonContent>
                </ReasonWrapper>

                <ReviewWrapper>
                    <ReviewContent>
                        <div className="tag">
                            <img src="/assets/img/yellow-stars.png" alt="" />
                            <span>3940+ Happy Landingfolio Users</span>
                        </div>
                        <h2>Don't just take our words. Here are Testimonies</h2>

                        <ul>
                            <div className="content">
                                <li>
                                    <div className="img-box">
                                        <img src="/assets/img/girl-card.png" alt="" />
                                    </div>
                                    <div className="info">
                                        <img src="/assets/img/star-review.png" alt="" />
                                        <p>"We love Landingfolio! It's very straightforward, reliable, and always delivers exactly what it promises — simple, honest, and effective."</p>
                                        <h4>Jenny Wilson</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="/assets/img/girl-card.png" alt="" />
                                    </div>
                                    <div className="info">
                                        <img src="/assets/img/star-review.png" alt="" />
                                        <p>"We love Landingfolio! It's very straightforward, reliable, and always delivers exactly what it promises — simple, honest, and effective."</p>
                                        <h4>Jenny Wilson</h4>
                                    </div>
                                </li>
                            </div>
                        </ul>

                        <div className="pagination">
                            <div className="prev">
                                <FaArrowLeft />
                                <span>Previous</span>
                            </div>
                            <div className="next">
                                <span>Next</span>
                                <FaArrowRight />
                            </div>
                        </div>
                    </ReviewContent>
                </ReviewWrapper>

                <FaqWrapper>
                    <h2>Frequently asked questions</h2>
                    <h6>Everything you need to know about the STREAM</h6>

                    <ul>
                        {[1,2,3,4,5,6].map((_item, idx) => {
                            return <li key={idx}>
                                <div className="info">
                                    <h4>How fast are payouts?</h4>
                                    <p>Within the next 24 hours you get the money you withdraw in your account. We deliver the best network when it comes to withdrawal and our customer satisfaction is our happiness. </p>
                                </div>

                                <FiPlusCircle />
                            </li>
                        })}
                    </ul>
                </FaqWrapper>

                <QuestionsWrapper>
                    <img src="/assets/img/avatar-group.png" alt="" />
                    <h2>Still have questions?</h2>
                    <h6>Can't find the answer you're looking for? Please chat to our friendly team.</h6>
                    <a href="#">Get In Touch </a>
                </QuestionsWrapper>
                
                <GetStartWrapper>
                    <GetStartedContent>
                        <div className="form">
                            <h2>Get Started Now</h2>
                            <div className="row">
                                <input type="text" placeholder="Full name" />
                                <input type="text" placeholder="Email address" />
                            </div>
                            <button>Get In Touch </button>
                            <p>Get Started today By entering yor Full Name and Email and earning by collaborating with us now </p>
                        </div>

                        <img src="/assets/img/get-start-image.png" alt="" />
                    </GetStartedContent>
                </GetStartWrapper>


                <div className="overlay-wrapper">
                    <img src="/assets/img/hero-overlay-img.png" alt="" />
                </div>
            </Wrapper>
            <Footer />
        </>
    )
}

export default HomeScreen