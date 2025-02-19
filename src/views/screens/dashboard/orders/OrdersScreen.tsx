import { useNavigate } from 'react-router-dom'
import DashboardHeader from '../../../components/dashboardHeader/DashboardHeader'
import { HeaderContainer, HeaderStats, RecentOrders, Wrapper } from './styles'
import { HiOutlineSearch } from 'react-icons/hi'

const OrdersScreen: React.FC = () => {
    const navigate = useNavigate()

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
                    <h2>All Orders (1,293)</h2>

                    <select name="" id="">
                        <option value="none">filter</option>
                    </select>
                </div>
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

                    {[1,2,3,4,5,6,7].map((_item, idx) => {
                        return <ul key={idx} className="table-row">
                        <li>21 Feb 2024</li>
                        <li>26th Feb 2024</li>
                        <li>005231754865</li>
                        <li>Mezovest Ltd</li>
                        <li>9.98 MTA</li>
                        <li>Ibile Oil & Gas Corporation Lagos State Durbar Road Jakande Estate</li>
                        <li>N1,020,000.00</li>
                        <li>N10,179,600.00</li>
                        <li><span>Quantity Confirmed</span></li>
                    </ul>
                    })}
                </div>
                
            </RecentOrders>

        </Wrapper>
    )
}

export default OrdersScreen