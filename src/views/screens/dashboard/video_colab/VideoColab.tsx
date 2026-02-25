import { MdMoreVert } from 'react-icons/md'
import DashboardHeader from '../../../components/dashboardHeader/DashboardHeader'
import { BalanceContent, BalanceWrapper, Categories, Wrapper, Container, TodayTrendingVideo, TrendingVideo, TrendingVideoAlt } from './styles'

const VideoColab: React.FC = () => {
    

    return (
        <Wrapper>
            <DashboardHeader title={"Video Colab"} subTitle="Welcome Jenny Willson!">
                
            </DashboardHeader>

            <BalanceWrapper>
                <BalanceContent>
                    <div className="img-overlay">
                        <img src="/assets/img/youtube-netflix-overlay.png" alt="" />
                    </div>
                    <div className="text-content">
                        <h4>Wallet Balance</h4>
                        <h2>₦306,896.92</h2>
                        <h5>Total Streamed Video : 13 Videos</h5>

                        <div className="row">
                            <button>Withdraw</button>
                            <span>Withdrawal Limit : $100</span>
                        </div>
                    </div>

                </BalanceContent>
            </BalanceWrapper>

            <Container>
                <Categories>
                    <ul className="hide-scrollbar">
                        <li>All</li>
                        <li>Creation</li>
                        <li>Study</li>
                        <li>Comedy</li>
                        <li>Skit</li>
                    </ul>
                </Categories>

                
                <TodayTrendingVideo>
                    <div className="head">
                        <h3>TRENDING VIDEOS</h3>
                    </div>

                    <ul className="hide-scrollbar">
                        {[1,2,3,4,5,6,7,8,9].map((_item, idx) => {
                            return <li key={idx}>
                                <img src="/assets/img/tmp/video-player-img.png" alt="" />
                                <div className="content">
                                    <img src="/assets/img/tmp/wizkid-img.png" alt="" />
                                    <div className="info">
                                        <h6>Beginner in UI/UX Design</h6>
                                        <span>Dr Ola Yinka Badmus</span>
                                    </div>

                                    <div className="meta">
                                        <span>₦2550</span>
                                        <MdMoreVert />
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>
                </TodayTrendingVideo>


                <TrendingVideo>
                    <div className="head">
                        <h3>Other videos</h3>
                    </div>

                    <ul className="hide-scrollbar">
                        {[1,2,3,4,5,6,7,8,9].map((_item, idx) => {
                            return <li key={idx}>
                                <div className="container">
                                    <img src="/assets/img/tmp/matrix-flyer.png" alt="" />
                                    <img className="play-circle" src="/assets/img/play-circle-faded.png" alt="" />
                                    <div className="content">
                                        <img src="/assets/img/play-btn-img.png" alt="" />
                                        <div className="info">
                                            <span>the Matrix</span>
                                            <span>Video available</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <h4>Top Gun</h4>
                                    <b>₦2550</b>
                                </div>
                            </li>
                        })}
                    </ul>
                </TrendingVideo>

                <TrendingVideoAlt>
                    <div className="head">
                        <h3>More Videos</h3>
                    </div>

                    <ul className="hide-scrollbar">
                        {[1,2,3,4,5,6,7,8,9].map((_item, idx) => {
                            return <li key={idx}>
                                <div className="container">
                                    <img src="/assets/img/tmp/matrix-flyer.png" alt="" />
                                    <img className="play-circle" src="/assets/img/play-circle-faded.png" alt="" />
                                    <div className="content">
                                        <img src="/assets/img/play-btn-img.png" alt="" />
                                        <div className="info">
                                            <span>the Matrix</span>
                                            <span>Video available</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <h4>Top Gun</h4>
                                    <b>₦2550</b>
                                </div>
                            </li>
                        })}
                    </ul>
                </TrendingVideoAlt>
            </Container>
        </Wrapper>
    )
}

export default VideoColab