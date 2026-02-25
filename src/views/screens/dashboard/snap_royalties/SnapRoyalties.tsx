import { BiDislike, BiSolidLike } from 'react-icons/bi'
import DashboardHeader from '../../../components/dashboardHeader/DashboardHeader'
import { BalanceContent, BalanceWrapper, Wrapper, Container, ProductWrapper } from './styles'
import { FaRegComment } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const SnapRoyalties: React.FC = () => {
    const navigate = useNavigate()    

    return (
        <Wrapper>
            <DashboardHeader title={"Snap Colab"} subTitle="Welcome Jenny Willson!">
                
            </DashboardHeader>

            <BalanceWrapper>
                <BalanceContent>
                    <div className="img-overlay">
                        <img src="/assets/img/snap-royalties-overlay.png" alt="" />
                    </div>
                    <div className="text-content">
                        <h4>Wallet Balance</h4>
                        <h2>₦306,896.92</h2>
                        <h5>Total Streamed Video : 13 files</h5>

                        <div className="row">
                            <button>Withdraw</button>
                            <span>Withdrawal Limit : $100</span>
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
                        {[1,2, 4,5,6,7,8,8,9].map((item, idx) => {
                            return <li key={idx} onClick={() => {
                                navigate("/dashboard/snap-royalties/" + item)
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

                <ProductWrapper>
                    <div className="head">
                        <h3>Available Cars Snaps</h3>
                    </div>

                    <ul className="hide-scrollbar">
                        {[1,2, 4,5,6,7,8,8,9].map((item, idx) => {
                            return <li key={idx} onClick={() => {
                                navigate("/dashboard/snap-royalties/" + item)
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
            </Container>
        </Wrapper>
    )
}

export default SnapRoyalties