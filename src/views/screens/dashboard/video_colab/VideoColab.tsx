import { MdMoreVert } from 'react-icons/md'
import DashboardHeader from '../../../components/dashboardHeader/DashboardHeader'
import { BalanceContent, BalanceWrapper, Categories, Wrapper, Container, TodayTrendingVideo, TrendingVideo, TrendingVideoAlt } from './styles'
import { useAppSelector } from '../../../../hooks/hooks'
import { useEffect } from 'react'
import useVideoColabModel from './useVideoColabModel'
import YouTubePlayer from '../../../components/youtube_player/YoutubePlayer'
import useDashboardModel from '../useDashboardModel'

const VideoColab: React.FC = () => {
    const profile = useAppSelector(state => state.profile.state)
    const videoModel = useVideoColabModel()
    const dashboardModel = useDashboardModel()

    const handleTwentySeconds = (videoId: string) => {
        dashboardModel.earnVideoReward(videoId)
        console.log("The video has played for 20 seconds!");
    }
    
    useEffect(() => {
        videoModel.fetchVideoColab()
    }, [])

    return (
        <Wrapper>
            <DashboardHeader title={"Video Colab"} subTitle={"Welcome " + profile.name} />

            <BalanceWrapper>
                <BalanceContent>
                    <div className="img-overlay">
                        <img src="/assets/img/youtube-netflix-overlay.png" alt="" />
                    </div>
                    <div className="text-content">
                        <h4>Wallet Balance</h4>
                        <h2>${videoModel?.videoFiles?.wallet_balance}</h2>
                        {/* <h5>Total Streamed Video : 13 Videos</h5> */}

                        <div className="row">
                            <button>Withdraw</button>
                            {/* <span>Withdrawal Limit : $100</span> */}
                        </div>
                    </div>

                </BalanceContent>
            </BalanceWrapper>

            <Container>
                <Categories>
                    <ul className="hide-scrollbar">
                        <li>All</li>
                        <li>Creation</li>
                        <li>Study</li>
                        <li>Comedy</li>
                        <li>Skit</li>
                    </ul>
                </Categories>

                
                <TodayTrendingVideo>
                    <div className="head">
                        <h3>TRENDING VIDEOS</h3>
                    </div>

                    <ul className="hide-scrollbar">
                        {videoModel.videoFiles?.trending_video?.map((item, idx) => {
                            return <li key={idx}>
                                <div className="lofty-yt-video-player">
                                    {item?.path ? <YouTubePlayer videoId={item?.path} onTwentySeconds={() => handleTwentySeconds(item?.path)} /> : <></>}
                                </div>
                                <div className="content">
                                    <img src={import.meta.env.VITE_FILE_URL + item?.image} alt="" />
                                    <div className="info">
                                        <h6>{item?.title}</h6>
                                        <span>{item?.name}</span>
                                    </div>

                                    <div className="meta">
                                        <span>$2.75</span>
                                        <MdMoreVert />
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>
                </TodayTrendingVideo>


                <TrendingVideo>
                    <div className="head">
                        <h3>Other videos</h3>
                    </div>

                    <ul className="hide-scrollbar">
                        {videoModel.videoFiles?.other_video.map((item, idx) => {
                            return <li key={idx}>
                                <div className="container">
                                    <div className="lofty-yt-video-player">
                                        {item?.path ? <YouTubePlayer videoId={item?.path} onTwentySeconds={() => handleTwentySeconds(item?.path)} /> : <></>}
                                    </div>
                                    <div className="content">
                                        <div className="info">
                                            <span>{item?.title}</span>
                                            <span>Video available</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <h4>{item?.title}</h4>
                                    <b>$2.75</b>
                                </div>
                            </li>
                        })}
                    </ul>
                </TrendingVideo>

                <TrendingVideoAlt>
                    <div className="head">
                        <h3>More Videos</h3>
                    </div>

                    <ul className="hide-scrollbar">
                        {videoModel.videoFiles?.trailers.map((item, idx) => {
                            return <li key={idx}>
                                <div className="container">
                                    <div className="lofty-yt-video-player">
                                        {item?.path ? <YouTubePlayer videoId={item?.path} onTwentySeconds={() => handleTwentySeconds(item?.path)} /> : <></>}
                                    </div>
                                    <div className="content">
                                        <img src="/assets/img/play-btn-img.png" alt="" />
                                        <div className="info">
                                            <span>{item?.title}</span>
                                            <span>Video available</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <h4>{item?.title}</h4>
                                    <b>$2.75</b>
                                </div>
                            </li>
                        })}
                    </ul>
                </TrendingVideoAlt>
            </Container>
        </Wrapper>
    )
}

export default VideoColab