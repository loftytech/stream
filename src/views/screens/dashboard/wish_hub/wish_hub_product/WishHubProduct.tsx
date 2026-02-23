import DashboardHeader from '../../../../components/dashboardHeader/DashboardHeader'
import { BalanceWrapper, Wrapper, Container, BalanceContent, ProductInfo, PrizeInfo, SideBar, PreviousWinners, MainContent } from './styles'

const WishHubProduct: React.FC = () => {
    

    return (
        <Wrapper>
            <DashboardHeader title={"Sound Royalties"} subTitle="Welcome Jenny Willson!">
                
            </DashboardHeader>

            <MainContent>
                <Container>
                    <BalanceWrapper>
                        <BalanceContent>
                            <div className="hot-deal">
                                <img src="/assets/svg/fire-icon.svg" alt="" />
                                <span>Hot Deal</span>
                            </div>
                            <div className="img-wrapper">
                                <img src="/assets/img/tmp/phone.png" alt="" />
                            </div>
                        </BalanceContent>
                    </BalanceWrapper>

                    <ProductInfo>
                        <h2>Iphone 17pro</h2>

                        <div className="details">
                            <div className="col">
                                <div className="row">
                                    <span>Enter For $ </span>
                                    <b>10</b>
                                </div>

                                <h3>Start Time 12 March, 2025, 00:00</h3>
                            </div>

                            <div className="col-2">
                                <span>Consolation <br />Rewards</span>
                                <div className="row">
                                    <img src="/assets/svg/coin-icon.svg" alt="" />
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                    </ProductInfo>
                    
                    <PrizeInfo>
                        <h2>Prize Information</h2>
                        <div className="sub-title">
                            <img src="/assets/svg/gift-icon.svg" alt="" />
                            <h4>HOW TO PARTICIPATE ON STREAM WISH HUB</h4>
                        </div>

                        <ul>
                            <li>
                                <b>1. Choose an item and enter the draw</b>
                                <span>Choose and purchase wish Voucher of your choice to qualify for the draw.</span>
                            </li>
                            <li>
                                <b>2. Pick your desired item</b>
                                <span>Select the item you want to ein and paste your voucher code to enter</span>
                            </li>
                            <li>
                                <b>3. Wait for the Draw</b>
                                <span>Sit tight until the scheduled draw date/day - this is when winners are selected  </span>
                            </li>
                            <li>
                                <b>4. Win or Earn Cashback</b>
                                <span>
                                    Win the Selected Prize / Item
                                    <br />
                                    <br />
                                    OR<br />
                                    <br />
                                    Receive a $1 cashback if you don't win the  main prize
                                </span>
                            </li>
                            <li>
                                <b>Enter. Enjoy. Get Rewarded.</b>
                            </li>
                        </ul>

                        <button>Enter Now</button>
                    </PrizeInfo>
                </Container>

                <SideBar>
                    <div className="featured-product">
                        <div className="top-content">
                            <div className="hot-deal">
                                <img src="/assets/svg/fire-icon.svg" alt="" />
                                <span>Hot Deal</span>
                            </div>
                            <div className="img-wrapper">
                                <img src="/assets/img/tmp/phone.png" alt="" />
                            </div>
                        </div>

                        <div className="text-content">
                            <h2>Macbook Pro 2019</h2>
                            <span>Coming to Wish Hub Next Week</span>
                        </div>
                    </div>

                    <PreviousWinners>
                        <h2>Top Previous Winners</h2>
                        <ul>
                            <li>
                                <h3>1.</h3>
                                <div className="row">
                                    <div className="info">
                                        <span>Yinkaola1234</span>
                                        <b>Won Samsung S26</b>
                                    </div>
                                    <img src="/assets/svg/nigeria-flag.svg" alt="" />
                                </div>

                            </li>
                            <li>
                                <h3>2.</h3>
                                <div className="row">
                                    <div className="info">
                                        <span>Nana2134</span>
                                        <b>Won Refrigerator</b>
                                    </div>
                                    <img src="/assets/svg/nigeria-flag.svg" alt="" />
                                </div>
                            </li>
                            <li>
                                <h3>3.</h3>
                                <div className="row">
                                    <div className="info">
                                        <span>Sarr1234</span>
                                        <b>Won Hp Folio</b>
                                    </div>
                                    <img src="/assets/svg/nigeria-flag.svg" alt="" />
                                </div>
                            </li>
                            <li>
                                <h3>4.</h3>
                                <div className="row">
                                    <div className="info">
                                        <span>Emeka3423</span>
                                        <b>Won 42 Inch Tv</b>
                                    </div>
                                    <img src="/assets/svg/nigeria-flag.svg" alt="" />
                                </div>
                            </li>
                            <li>
                                <h3>5.</h3>
                                <div className="row">
                                    <div className="info">
                                        <span>Ngozi2345</span>
                                        <b>Won Speaker Set</b>
                                    </div>

                                    <img src="/assets/svg/nigeria-flag.svg" alt="" />
                                </div>
                            </li>
                        </ul>
                    </PreviousWinners>
                </SideBar>
            </MainContent>
        </Wrapper>
    )
}

export default WishHubProduct