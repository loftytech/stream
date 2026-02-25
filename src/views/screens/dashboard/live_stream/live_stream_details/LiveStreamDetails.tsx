import DashboardHeader from '../../../../components/dashboardHeader/DashboardHeader'
import { Wrapper, Container, LiveStreamVideo } from './styles'

const LiveStreamDetails: React.FC = () => {   

    return (
        <Wrapper>
            <DashboardHeader title={"Sound Royalties"} subTitle="Welcome Jenny Willson!">
                
            </DashboardHeader>

            <Container>
                <LiveStreamVideo>
                    <div className="img-wrapper">
                        <img src="/assets/img/tmp/video-player-img.png" alt="" />
                    </div>

                    <div className="details">
                        <img src="/assets/img/avatar-img.png" alt="" />
                        <div className="info">
                            <div className="head">
                                <h2>Stream Official</h2>
                                <img src="/assets/svg/verified-check.svg" alt="" />
                            </div>
                            <span>33x Treasure | 12x SUB Islands | </span>
                        </div>

                        <div className="actions">
                            <button>Subscribe</button>
                            <button>Follow</button>
                        </div>
                    </div>

                    <ul>
                        {[1,2,3,4,5,6,7,8,9].map((_item, idx) => {
                            return <li key={idx}>04:34 Stream Official:Thank you for following chichi236</li>
                        })}
                    </ul>

                    <div className="chat">
                        <div className="input-section">
                            <input type="text" placeholder="Send a Chat" />
                            <div className="heart">
                                <img src="/assets/svg/heart-icon.svg" alt="" />
                            </div>
                        </div>

                        <div className="row">
                            <img src="/assets/svg/rose-icon.svg" alt="" />
                            <img src="/assets/svg/gift-hand-icon.svg" alt="" />
                            <img src="/assets/svg/share-icon.svg" alt="" />
                            <span>35.45k</span>
                        </div>
                    </div>
                </LiveStreamVideo>
            </Container>
        </Wrapper>
    )
}

export default LiveStreamDetails