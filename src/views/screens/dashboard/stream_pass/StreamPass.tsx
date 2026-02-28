import { useEffect } from 'react'
import DashboardHeader from '../../../components/dashboardHeader/DashboardHeader'
import { ProfileContent, ProfileCard, Wrapper, Container, TabWrapper, TableWrapper, ResubCard, DeleteAccount, Row, SaveChanges } from './styles'
import useAudioColabModel from './useAudioColabModel'
import { AiOutlineCloudUpload, AiOutlineDownload } from "react-icons/ai"
import { BiSave, BiTrash } from 'react-icons/bi'
import Loader from '../../../components/Loader/Loader'
import { CgEye } from 'react-icons/cg'
import { FiEyeOff } from 'react-icons/fi'

const StreamPass: React.FC = () => {
    const audioColabModel = useAudioColabModel()

    useEffect(() => {
        audioColabModel.fetchAudioColab()
    }, [])

    return (
        <Wrapper>
            <DashboardHeader title={"Audio Colab"} subTitle="Welcome Jenny Willson!">
                
            </DashboardHeader>

            <Container>
                <TableWrapper>
                    <div className="table">
                        <ul className="table-head">
                            <li>Reference</li>
                            <li>Package</li>
                            <li>Used</li>
                            <li>Total</li>
                            <li>Created</li>
                            <li>Action</li>
                        </ul>

                        {1 > 2 ? <Loader topPadding="20px" bottomPadding="20px" styleTwo center /> : [1,2,3,4,5,6].map((_item, idx) => {
                            return <ul key={idx} className="table-row">
                            <li>VB2025101013</li>
                            <li>PREMIUM</li>
                            <li>10</li>
                            <li>20</li>
                            <li>10/23/2026 <br />110:39</li>
                            <li>
                                <FiEyeOff />
                                <AiOutlineDownload />
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