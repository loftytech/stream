import { useParams } from 'react-router-dom'
import DashboardHeader from '../../../../components/dashboardHeader/DashboardHeader'
import { RecentOrders, Wrapper } from './styles'
import useOrderModel from '../useOrderModel'
import { useEffect } from 'react'
import dayjs from 'dayjs'
import Loader from '../../../../components/Loader/Loader'

const OrderPaymentsScreen: React.FC = () => {
    const orderModel = useOrderModel()

    const { orderId } = useParams()

    useEffect(() => {
        orderModel.fetchOrderPayments(orderId)
    }, [])


    return (
        <Wrapper>
            <DashboardHeader>
                
            </DashboardHeader>

            <RecentOrders>
                <div className="table-top-head">
                    <h2>Payment History</h2>

                    
                </div>
                <div className="table">
                    <ul className="table-head">
                        <li>Payment Date</li>
                        <li>Reference</li>
                        <li>Amount</li>
                        <li>Outstanding</li>
                        <li>Type</li>
                    </ul>

                    {orderModel.isFetchingPayments ? <Loader topPadding="20px" bottomPadding="20px" styleTwo center /> : orderModel.payments.map((item, idx) => {
                        return <ul key={idx} className="table-row">
                        <li>{dayjs(item.date).format("DD, MMM YYYY")}</li>
                        <li>{item.reference}</li>
                        <li>{item?.amount?.value}</li>
                        <li>{item.balance?.value}</li>
                        <li><span>{item?.type}</span></li>
                    </ul>
                    })}
                </div>
            </RecentOrders>

        </Wrapper>
    )
}

export default OrderPaymentsScreen