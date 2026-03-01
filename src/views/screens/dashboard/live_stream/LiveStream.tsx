import { useAppSelector } from '../../../../hooks/hooks'
import DashboardHeader from '../../../components/dashboardHeader/DashboardHeader'
import { BalanceContent, BalanceWrapper, Wrapper, Container, TrendingLiveStream } from './styles'
import { useNavigate } from 'react-router-dom'
import useLiveStreamModel from './useLiveStreamModel'
import { useEffect } from 'react'

const LiveStream: React.FC = () => {
    const profile = useAppSelector(state => state.profile.state)
    const navigate = useNavigate()
    const liveStreamModel = useLiveStreamModel()

    useEffect(() => {
        liveStreamModel.fetchLiveStreamColab()
    }, [])

    return (
        <Wrapper>
            <DashboardHeader title={"Live Stream Colab"} subTitle={"Welcome " + profile.name} />

            <BalanceWrapper>
                <BalanceContent>
                    <div className="img-overlay">
                        <img src="/assets/img/live-stream-overlay.png" alt="" />
                    </div>
                    <div className="text-content">
                        <h4>Wallet Balance</h4>
                        <h2>${liveStreamModel.liveStreamFiles?.wallet_balance}</h2>
                        {/* <h5>Total Streamed Video : 13 Videos</h5> */}

                        <div className="row">
                            <button>Withdraw</button>
                            {/* <span>Withdrawal Limit : $100</span> */}
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
                        {liveStreamModel.liveStreamFiles?.livestreams?.map((item, idx) => {
                            return <li key={idx} onClick={() => navigate("/dashboard/live-stream/" + item?.id)}>
                                <img src={import.meta.env.VITE_FILE_URL + item?.image} alt="" />
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