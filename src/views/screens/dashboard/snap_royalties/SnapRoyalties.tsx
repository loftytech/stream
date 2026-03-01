import { BiDislike, BiSolidLike } from 'react-icons/bi'
import DashboardHeader from '../../../components/dashboardHeader/DashboardHeader'
import { BalanceContent, BalanceWrapper, Wrapper, Container, ProductWrapper } from './styles'
import { FaRegComment } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../../hooks/hooks'
import useDashboardModel from '../useDashboardModel'
import { useEffect } from 'react'
import formatNumber from '../../../../utils/numberFormatter'

const SnapRoyalties: React.FC = () => {
    const profile = useAppSelector(state => state.profile.state)
    const navigate = useNavigate()   
    const dashboardModel = useDashboardModel()

    useEffect(() => {
        dashboardModel.fetchSnapCollab()
    }, [])

    return (
        <Wrapper>
            <DashboardHeader title="Snap Collab" subTitle={"Welcome " + profile.name}>
                
            </DashboardHeader>

            <BalanceWrapper>
                <BalanceContent>
                    <div className="img-overlay">
                        <img src="/assets/img/snap-royalties-overlay.png" alt="" />
                    </div>
                    <div className="text-content">
                        <h4>Wallet Balance</h4>
                        <h2>${formatNumber(dashboardModel?.snap?.wallet_balance).toPrice()}</h2>
                        {/* <h5>Total Streamed Video : 13 files</h5> */}

                        <div className="row">
                            <button>Withdraw</button>
                            {/* <span>Withdrawal Limit : $100</span> */}
                        </div>
                    </div>

                </BalanceContent>
            </BalanceWrapper>

            <Container>
                <ProductWrapper>
                    <div className="head">
                        <h3>Trending Snaps on Stream Today</h3>
                    </div>

                    <ul className="hide-scrollbar">
                        {dashboardModel?.snap?.posts.map((item, idx) => {
                            return <li key={idx} onClick={() => {
                                navigate("/dashboard/snap-royalties/" + item.id)
                            }}>
                                <b>{item?.title}</b>
                                <div className="img-wrapper">
                                    <img src={import.meta.env.VITE_FILE_URL + item?.image} alt="" />
                                </div>
                                <div className="content">
                                    <h4>Earn by Participating in daily Task</h4>

                                    <div className="actions">
                                        <div className='sub-action'>
                                            <BiSolidLike />
                                            <span>{item?.likes}</span>
                                        </div>
                                        <div className='sub-action'>
                                            <BiDislike />
                                            <span>0</span>
                                        </div>

                                        <div className='sub-action'>
                                            <FaRegComment />
                                            <span>{item?.comments}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="meta">
                                        <span>$1.15</span>
                                        <span>Daily</span>
                                    </div>

                                    <button>Earn Now</button>
                                </div>
                            </li>
                        })}
                    </ul>
                </ProductWrapper>
            </Container>
        </Wrapper>
    )
}

export default SnapRoyalties