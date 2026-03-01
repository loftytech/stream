import { useEffect } from 'react'
import DashboardHeader from '../../../components/dashboardHeader/DashboardHeader'
import { Wrapper, Container, TableWrapper } from './styles'
import { AiOutlineDownload } from "react-icons/ai"
import Loader from '../../../components/Loader/Loader'
import { FiEyeOff } from 'react-icons/fi'
import useStreamPassModel from './useStreamPassModel'
import { useAppSelector } from '../../../../hooks/hooks'
import dayjs from 'dayjs'

const StreamPass: React.FC = () => {
    const profile = useAppSelector(state => state.profile.state)
    const streamPassModel = useStreamPassModel()

    useEffect(() => {
        streamPassModel.fetchStreamPassCode()
    }, [])

    return (
        <Wrapper>
            <DashboardHeader title={"Stream Pass"} subTitle={"Welcome " + profile.name} />

            <Container>
                <TableWrapper>
                    <div className="table">
                        <ul className="table-head">
                            <li>Reference</li>
                            <li>Package</li>
                            <li>Total</li>
                            <li>Created</li>
                            <li>Action</li>
                        </ul>

                        {streamPassModel.isFetchingStreamPass ? <Loader topPadding="20px" bottomPadding="20px" styleTwo center /> : streamPassModel.streamPass?.coupons?.data?.map((item, idx) => {
                            return <ul key={idx} className="table-row">
                            <li>{item?.batch_id}</li>
                            <li>{item?.package}</li>
                            <li>{item?.amount}</li>
                            <li>{dayjs(item?.created_at).format("DD MMM YYYY")} <br />{dayjs(item?.created_at).format("hh:mmA")}</li>
                            <li>
                                <FiEyeOff />
                                {streamPassModel.currentBatch == item?.batch_id ? <Loader styleTwo /> : <AiOutlineDownload onClick={() => streamPassModel.exportTransactions(item?.batch_id)} />}
                            </li>
                        </ul>
                        })}
                    </div>
                </TableWrapper>
            </Container>
        </Wrapper>
    )
}

export default StreamPass