import { useNavigate } from 'react-router-dom'
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader'
import { HeaderContainer, HeaderStats, RecentOrders, TopSection, Wrapper } from './styles'
import useOrderModel from './orders/useOrderModel'
import { useEffect } from 'react'
import dayjs from 'dayjs'
import Loader from '../../components/Loader/Loader'
import OrderDetails from '../../components/order_details/OrderDetails'

const DashboardScreen: React.FC = () => {
    const orderModel = useOrderModel()
    const navigate = useNavigate()

    useEffect(() => {
        orderModel.fetchOrders()
    }, [])

    return (
        <Wrapper>
            <DashboardHeader>
                
            </DashboardHeader>

            <HeaderContainer>
                <HeaderStats>
                    <li>
                        <h5>Today's price</h5>
                        <h2>N1,020,000.00</h2>
                        <span>23 September 2024</span>
                    </li>

                    <li>
                        <h4>Available MT</h4>
                        <h5>Account balance NGN 0.00</h5>
                        <h2>0.00 MTA</h2>
                    </li>
                </HeaderStats>

                <div className="side-section">
                    <button onClick={() => {
                        navigate("/dashboard/order/new")
                    }}>
                        <img src="/assets/svg/trending-icon.svg" alt="" />
                        <span>New Order</span>
                    </button>
                </div>
            </HeaderContainer>

            <TopSection>
                <div className="col-1">
                    <div className="stats">
                        <h5>Prices Chart</h5>
                        <h2>5.987,34</h2>
                        <h6>Secondary text</h6>

                        <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10.214" cy="10.214" r="10.214" fill="#BDBDBD"/>
                            <rect x="8.51172" y="7.94434" width="3.40465" height="9.07905" rx="1.70232" fill="white"/>
                            <rect x="8.51172" y="3.40479" width="3.40465" height="3.40465" rx="1.70232" fill="white"/>
                        </svg>
                    </div>

                    <div className="graph">
                        <img src="/assets/img/chart-img.png" alt="" />
                    </div>

                </div>
                <div className="col-2">
                    <h2>Payment List</h2>

                    <ul className="table-head">
                        <li>Entry date</li>
                        <li>Amount</li>
                        <li>Currency</li>
                        <li>Reference</li>
                        <li>Status</li>
                    </ul>

                    <ul className="table-row">
                        <li>05-Mar-2024</li>
                        <li>11,825,825.00</li>
                        <li>NGN</li>
                        <li>GTN24004</li>
                        <li><span>Payment confirmed</span></li>
                    </ul>
                </div>
            </TopSection>

            <RecentOrders>
                <h2>Recent Orders</h2>
                <div className="table">
                    <ul className="table-head">
                        <li>Order Date</li>
                        <li>Loading Date</li>
                        <li>Order Number</li>
                        <li>Account</li>
                        <li>Plant</li>
                        <li>Plant Name & Address</li>
                        <li>Price</li>
                        <li>Price Amount</li>
                        <li>Status</li>
                    </ul>

                    {orderModel.isFetchingOrders ? <Loader topPadding="20px" bottomPadding="20px" styleTwo center /> : orderModel.purchases.map((item, idx) => {
                        return <ul key={idx} className="table-row" onClick={() => orderModel.fetchOrder(item?.id!)}>
                        <li>{dayjs(item.orderDate).format("DD, MMM YYYY")}</li>
                        <li>{dayjs(item.loadingDate).format("DD, MMM YYYY")}</li>
                        <li>{item.purchaseNumber}</li>
                        <li>{item.marketer}</li>
                        <li>{item.logistics![0].plantName}</li>
                        <li>{item.logistics![0].plantAddress}</li>
                        <li>N{item.rate}</li>
                        <li>N{item.price}</li>
                        <li><span>Quantity Confirmed</span></li>
                    </ul>
                    })}
                </div>
                
            </RecentOrders>
            
            <OrderDetails showModal={orderModel.showPurchaseModal} closeModal={() => orderModel.setShowPurchaseModal(false)} isLoading={orderModel.isFetchingOrder} order={orderModel?.order!} />
        </Wrapper>
    )
}

export default DashboardScreen