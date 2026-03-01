import { useAppSelector } from '../../../../hooks/hooks'
import DashboardHeader from '../../../components/dashboardHeader/DashboardHeader'
import { BalanceContent, BalanceWrapper, Categories, Wrapper, Container, TrendingVideo } from './styles'
import useDownloadablesModel from './useDownloadablesModel'
import { useEffect } from 'react'

const Downloadables: React.FC = () => {
    const profile = useAppSelector(state => state.profile.state)
    const downloadableModel = useDownloadablesModel()

    useEffect(() => {
        downloadableModel.fetchDownloadables()
    }, [])
    

    return (
        <Wrapper>
            <DashboardHeader title={"Downloadables"} subTitle={"Welcome " + profile.name} />

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
                    <ul className="hide-scrollbar">
                        {downloadableModel.downloadables?.artists?.map((item, idx) => {
                            return <li key={idx} onClick={() => {
                                downloadableModel.rewardDownloadables(item.id)
                            }}>
                                <div className="container">
                                    <img src={import.meta.env.VITE_FILE_URL + item?.image} alt="" />
                                    <div className="content">

                                        <div className="info">
                                            <span>{item?.title}</span>
                                            <span>Video available</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <h4>Top Gun</h4>
                                    <b>$1</b>
                                </div>
                            </li>
                        })}
                    </ul>
                </TrendingVideo>
            </Container>
        </Wrapper>
    )
}

export default Downloadables