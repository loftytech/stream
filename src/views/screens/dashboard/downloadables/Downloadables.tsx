import { MdMoreVert } from 'react-icons/md'
import DashboardHeader from '../../../components/dashboardHeader/DashboardHeader'
import { BalanceContent, BalanceWrapper, Categories, Wrapper, Container, TodayTrendingVideo, TrendingVideo, TrendingVideoAlt } from './styles'
import useDownloadablesModel from './useDownloadablesModel'
import { useEffect } from 'react'

const Downloadables: React.FC = () => {
    const downloadableModel = useDownloadablesModel()

    useEffect(() => {
        downloadableModel.fetchDownloadables()
    }, [])
    

    return (
        <Wrapper>
            <DashboardHeader title={"Sound Royalties"} subTitle="Welcome Jenny Willson!">
                
            </DashboardHeader>

            <BalanceWrapper>
                <BalanceContent>
                    <div className="img-overlay">
                        <img src="/assets/img/downloadables-overlay.png" alt="" />
                    </div>
                    <div className="text-content">
                        <h4>Wallet Balance</h4>
                        <h2>${downloadableModel?.downloadables?.wallet_balance}</h2>
                        {/* <h5>Total Streamed Video : 13 files</h5> */}

                        <div className="row">
                            <button>Withdraw</button>
                            {/* <span>Withdrawal Limit : $100</span> */}
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

                <TrendingVideo>
                    <div className="head">
                        <h3>Trending video</h3>
                    </div>

                    <ul className="hide-scrollbar">
                        {downloadableModel.downloadables?.artists?.map((item, idx) => {
                            return <li key={idx}>
                                <div className="container">
                                    <img src={item?.path} alt="" />
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
                        <h3>Trending Video</h3>
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

export default Downloadables