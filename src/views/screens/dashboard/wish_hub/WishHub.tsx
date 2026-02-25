import { useNavigate } from 'react-router-dom'
import DashboardHeader from '../../../components/dashboardHeader/DashboardHeader'
import { BalanceContent, BalanceWrapper, Wrapper, Container, ProductWrapper } from './styles'

const WishHub: React.FC = () => {
    const navigate = useNavigate()
    

    return (
        <Wrapper>
            <DashboardHeader title={"Wish Hub"} subTitle="Welcome Jenny Willson!">
                
            </DashboardHeader>

            <BalanceWrapper>
                <BalanceContent>
                    <div className="img-overlay">
                        <img src="/assets/img/wish-hub-banner.png" alt="" />
                    </div>
                    <div className="text-content">
                        <div className="hot-deal">
                            <img src="/assets/svg/fire-icon.svg" alt="" />
                            <span>Hot Deal</span>
                        </div>

                        <h4>Countdown</h4>
                        <h2>08 days : 08 hours : 34 Minutes : 10 Sec</h2>
                        <p>This special offer will automatically expire once the countdown timer reaches zero, so act fast before time runs out.</p>
                    </div>

                </BalanceContent>
            </BalanceWrapper>

            <Container>
                <ProductWrapper>
                    <div className="head">
                        <h3>Active Deals </h3>
                    </div>

                    <ul className="hide-scrollbar">
                        {[1,2].map((item, idx) => {
                            return <li key={idx} onClick={() => {
                                navigate("/dashboard/wish-hub/" + item)
                            }}>
                                <div className="img-wrapper">
                                    <img src="/assets/img/tmp/phone.png" alt="" />
                                </div>
                                <div className="content">
                                    <h4>Iphone 17 Pro</h4>
                                    <h3>Entry Fee: $10 </h3>
                                    <h6>Offer Expires: 8h: 30min</h6>
                                </div>
                            </li>
                        })}
                    </ul>
                </ProductWrapper>
                <ProductWrapper>
                    <div className="head">
                        <h3>Trending Deals </h3>
                    </div>

                    <ul className="hide-scrollbar">
                        {[1,2,3,4,5,6,7,8,9].map((item, idx) => {
                            return <li key={idx} onClick={() => {
                                navigate("/dashboard/wish-hub/" + item)
                            }}>
                                <div className="img-wrapper">
                                    <img src="/assets/img/tmp/phone.png" alt="" />
                                </div>
                                <div className="content">
                                    <h4>Iphone 17 Pro</h4>
                                    <h3>Entry Fee: $10 </h3>
                                    <h6>Offer Expires: 8h: 30min</h6>
                                </div>
                            </li>
                        })}
                    </ul>
                </ProductWrapper>

                <ProductWrapper>
                    <div className="head">
                        <h3>Done deals </h3>
                    </div>

                    <ul className="hide-scrollbar">
                        {[1,2,3,4,5,6,7,8,9].map((item, idx) => {
                            return <li key={idx} onClick={() => {
                                navigate("/dashboard/wish-hub/" + item)
                            }}>
                                <div className="img-wrapper">
                                    <img src="/assets/img/tmp/phone.png" alt="" />
                                </div>
                                <div className="content">
                                    <h4>Iphone 17 Pro</h4>
                                    <h3>Entry Fee: $10 </h3>
                                    <h6>Offer Expires: 8h: 30min</h6>
                                </div>
                            </li>
                        })}
                    </ul>
                </ProductWrapper>

            </Container>
        </Wrapper>
    )
}

export default WishHub