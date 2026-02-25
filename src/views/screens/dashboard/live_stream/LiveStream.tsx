import DashboardHeader from '../../../components/dashboardHeader/DashboardHeader'
import { BalanceContent, BalanceWrapper, Wrapper, Container, TrendingLiveStream } from './styles'
import { useNavigate } from 'react-router-dom'

const LiveStream: React.FC = () => {
    const navigate = useNavigate()

    return (
        <Wrapper>
            <DashboardHeader title={"Sound Royalties"} subTitle="Welcome Jenny Willson!">
                
            </DashboardHeader>

            <BalanceWrapper>
                <BalanceContent>
                    <div className="img-overlay">
                        <img src="/assets/img/live-stream-overlay.png" alt="" />
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
                <TrendingLiveStream>
                    <div className="head">
                        <h3>Trending Live on Stream</h3>
                        <div className="row">
                            <img src="/assets/svg/grid-icon.svg" alt="" />
                            <img src="/assets/svg/filter-icon.svg" alt="" />
                        </div>
                    </div>

                    <ul className="hide-scrollbar">
                        {[1,2,3,4,5,6,7,8,9].map((_item, idx) => {
                            return <li key={idx} onClick={() => navigate("/dashboard/live-stream/" + idx)}>
                                <img src="/assets/img/tmp/stream-cover-img.png" alt="" />
                                <div className="content">
                                    <div className="info">
                                        <img src="/assets/img/tmp/stream-icon-img.png" alt="" />
                                        <div className="actions">
                                            <button>Subscribe</button>
                                            <button>Follow</button>
                                        </div>
                                    </div>

                                    <div className="meta">
                                        <img src="/assets/img/tmp/meta-actions-img.png" alt="" />
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>
                </TrendingLiveStream>
            </Container>
        </Wrapper>
    )
}

export default LiveStream