import { BiDislike, BiSolidLike } from 'react-icons/bi'
import DashboardHeader from '../../../../components/dashboardHeader/DashboardHeader'
import { Wrapper, Container, ProductWrapper, RoyaltyDetails, MainContent, SideBar } from './styles'
import { FaRegComment } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import useDashboardModel from '../../useDashboardModel'
import { useAppSelector } from '../../../../../hooks/hooks'

const SnapRoyalties: React.FC = () => {
    const profile = useAppSelector(state => state.profile.state)
    const params: any = useParams()
    const navigate = useNavigate()
    const dashboardModel = useDashboardModel()
    
    useEffect(() => {
        if (params?.snapId) {
            dashboardModel.fetchSnapCollabDetails(params?.snapId ?? 0)
            dashboardModel.fetchSnapCollab()
        }
    }, [params?.snapId])

    return (
        <Wrapper>
            <DashboardHeader title="Snap Collab" subTitle={"Welcome " + profile.name}>
                
            </DashboardHeader>

            <MainContent>
                <Container>
                    <RoyaltyDetails>
                        <div className="img-wrapper">
                            <img src={import.meta.env.VITE_FILE_URL + dashboardModel.snapDetails?.image} alt="" />
                        </div>

                        <div className="actions">
                            <div className='sub-action'>
                                <BiSolidLike />
                                <span>{dashboardModel?.snapDetails?.likes}k</span>
                            </div>
                            <div className='sub-action'>
                                <BiDislike />
                                <span>0</span>
                            </div>

                            <div className='sub-action'>
                                <FaRegComment />
                                <span>{dashboardModel?.snapDetails?.comments}k</span>
                            </div>
                        </div>

                        <h2>{dashboardModel.snapDetails?.title}</h2>
                        <h4>Please Preform The task Probably to get your earns</h4>

                        <p dangerouslySetInnerHTML={{__html: dashboardModel.snapDetails?.content}}></p>

                        <div className="earn-actions">
                            <a onClick={() => dashboardModel.earnSnapReward(params?.snapId)} target="_blank" href={dashboardModel.snapDetails?.tiktok}>Tiktok</a>
                            <a onClick={() => dashboardModel.earnSnapReward(params?.snapId)} target="_blank" href={dashboardModel.snapDetails?.instagram}>Earn with Instagram</a>
                            <a onClick={() => dashboardModel.earnSnapReward(params?.snapId)} target="_blank" href={dashboardModel.snapDetails?.telegram}>Earn To Telegram</a>
                            <a onClick={() => dashboardModel.earnSnapReward(params?.snapId)} target="_blank" href={dashboardModel.snapDetails?.link}>Share To Earn</a>
                        </div>
                    </RoyaltyDetails>
                </Container>

                <SideBar>
                    <ProductWrapper>
                        <div className="head">
                            <h3>Similar Snap To Download</h3>
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
                </SideBar>
            </MainContent>
        </Wrapper>
    )
}

export default SnapRoyalties