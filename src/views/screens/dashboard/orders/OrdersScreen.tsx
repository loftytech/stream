import { useNavigate } from 'react-router-dom'
import DashboardHeader from '../../../components/dashboardHeader/DashboardHeader'
import { HeaderContainer, HeaderStats, RecentOrders, Wrapper } from './styles'
import { HiOutlineSearch } from 'react-icons/hi'
import useOrderModel from './useOrderModel'
import { useEffect } from 'react'
import dayjs from 'dayjs'
import Loader from '../../../components/Loader/Loader'

const OrdersScreen: React.FC = () => {
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

            <RecentOrders>
                <div className="search">
                    <HiOutlineSearch />
                    <input type="text" placeholder="Search for an order" />
                </div>
                <div className="table-top-head">
                    <h2>All Orders</h2>

                    <select name="" id="">
                        <option value="none">filter</option>
                    </select>
                </div>
                <div className="table">
                    <ul className="table-head">
                        <li>Order Date</li>
                        <li>Order Number</li>
                        <li>Capcity</li>
                        <li>Customer Name</li>
                        <li>Price</li>
                        <li>Outstanding</li>
                        <li>Status</li>
                    </ul>

                    {orderModel.isFetchingOrders ? <Loader topPadding="20px" bottomPadding="20px" styleTwo center /> : orderModel.orders.map((item, idx) => {
                        return <ul key={idx} className="table-row">
                        <li>{dayjs(item.date).format("DD, MMM YYYY")}</li>
                        <li>#{item.id}</li>
                        <li>{item.quantity}</li>
                        <li>{item.clientName}</li>
                        <li>{item.price?.value}</li>
                        <li>{item.balance?.value}</li>
                        <li><span>{item.status}</span></li>
                    </ul>
                    })}
                </div>
            </RecentOrders>

        </Wrapper>
    )
}

export default OrdersScreen