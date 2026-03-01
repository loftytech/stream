import { useEffect } from 'react'
import { useAppSelector } from '../../../../../hooks/hooks'
import DashboardHeader from '../../../../components/dashboardHeader/DashboardHeader'
import useLiveStreamModel from '../useLiveStreamModel'
import { Wrapper, Container, LiveStreamVideo } from './styles'
import { useParams } from 'react-router-dom'
import YouTubePlayer from '../../../../components/youtube_player/YoutubePlayer'

const LiveStreamDetails: React.FC = () => {
    const profile = useAppSelector(state => state.profile.state)
    const liveStreamModel = useLiveStreamModel()
    const params: any = useParams()

    const handleTwentySeconds = (videoId: string) => {
        liveStreamModel.rewardLiveStream({
            video_id: videoId
        })
        console.log("The video has played for 20 seconds!");
    }

    useEffect(() => {
        liveStreamModel.fetchLiveStreamColabDetails(params?.streamId ?? 0)
    }, [])

    return (
        <Wrapper>
            <DashboardHeader title={"Live Stream Colab"} subTitle={"Welcome " + profile.name} />

            <Container>
                <LiveStreamVideo>
                    <div className="img-wrapper">
                        <div className="lofty-yt-video-player">
                            {liveStreamModel?.liveStreamDetails?.path ? <YouTubePlayer time={20000} videoId={liveStreamModel?.liveStreamDetails?.path} onTwentySeconds={() => handleTwentySeconds(liveStreamModel?.liveStreamDetails?.path)} /> : <></>}
                        </div>
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