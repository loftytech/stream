import DashboardHeader from '../../../components/dashboardHeader/DashboardHeader'
import { BalanceContent, BalanceWrapper, Categories, Wrapper, Container, TrendingArtists, ForYou, Row } from './styles'

const AudioColab: React.FC = () => {
    

    return (
        <Wrapper>
            <DashboardHeader title={"Sound Royalties"} subTitle="Welcome Jenny Willson!">
                
            </DashboardHeader>

            <BalanceWrapper>
                <BalanceContent>
                    <div className="img-overlay">
                        <img src="/assets/img/audiomac-overlay.png" alt="" />
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

                    <div className="logo-box">
                        <img src="/assets/img/audiomac-icon.png" alt="" />
                    </div>
                </BalanceContent>
            </BalanceWrapper>

            <Container>
                <Categories>
                    <ul className="hide-scrollbar">
                        <li>
                            <img src="/assets/img/chill-hits-img.png" alt="" />
                            <span>Chill Hits</span>
                        </li>
                        <li>
                            <img src="/assets/img/top-hits-img.png" alt="" />
                            <span>Top Hits</span>
                        </li>
                        <li>
                            <img src="/assets/img/happy-hits-img.png" alt="" />
                            <span>Happy Hits</span>
                        </li>
                        <li>
                            <img src="/assets/img/good-time-img.png" alt="" />
                            <span>Good Time</span>
                        </li>
                    </ul>
                </Categories>

                <TrendingArtists>
                    <div className="head">
                        <h3>Trending Artists</h3>
                        <a href="#">VIEW ALL</a>
                    </div>

                    <ul>
                        {[1,2,3,4,5,6,7,8,9].map((_item, idx) => {
                            return <li key={idx}>
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


                <Row>
                    <ForYou>
                        <h4>Just for you</h4>
                        <ul className="hide-scrollbar">
                            {[1,2,3,4,5,6,7,8].map((_item, idx) => {
                                return <li key={idx}>
                                <img src="/assets/img/tmp/foryou-img.png" alt="" />
                                    <div className="row">
                                        <b>Daily Mix </b>
                                        <span>₦1450</span>
                                    </div>
                                    <p>Jonas Blue, NOTD, David Guetta and more</p>
                                </li>
                            })}
                        </ul>
                    </ForYou>

                    <ForYou>
                        <h4>Trending</h4>
                        <ul className="hide-scrollbar">
                            {[1,2,3,4,5,6,7,8].map((_item, idx) => {
                                return <li key={idx}>
                                <img src="/assets/img/tmp/foryou-img.png" alt="" />
                                    <div className="row">
                                        <b>Daily Mix </b>
                                        <span>₦1450</span>
                                    </div>
                                    <p>Jonas Blue, NOTD, David Guetta and more</p>
                                </li>
                            })}
                        </ul>
                    </ForYou>
                </Row>


                <Row>
                    <ForYou>
                        <h4 style={{opacity: 0}}>Just for you</h4>
                        <ul className="hide-scrollbar">
                            {[1,2,3,4,5,6,7,8].map((_item, idx) => {
                                return <li key={idx}>
                                <img src="/assets/img/tmp/foryou-img.png" alt="" />
                                    <div className="row">
                                        <b>Daily Mix </b>
                                        <span>₦1450</span>
                                    </div>
                                    <p>Jonas Blue, NOTD, David Guetta and more</p>
                                </li>
                            })}
                        </ul>
                    </ForYou>

                    <ForYou>
                        <h4>Similarities</h4>
                        <ul className="hide-scrollbar">
                            {[1,2,3,4,5,6,7,8].map((_item, idx) => {
                                return <li key={idx}>
                                <img src="/assets/img/tmp/foryou-img.png" alt="" />
                                    <div className="row">
                                        <b>Daily Mix </b>
                                        <span>₦1450</span>
                                    </div>
                                    <p>Jonas Blue, NOTD, David Guetta and more</p>
                                </li>
                            })}
                        </ul>
                    </ForYou>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default AudioColab