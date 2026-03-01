import { useEffect, useRef, useState } from 'react'
import DashboardHeader from '../../../components/dashboardHeader/DashboardHeader'
import { BalanceContent, BalanceWrapper, Categories, Wrapper, Container, TrendingArtists, ForYou, Row } from './styles'
import useAudioColabModel from './useAudioColabModel'
import Loader from '../../../components/Loader/Loader'
import { useAppSelector } from '../../../../hooks/hooks'

const AudioColab: React.FC = () => {
    const [selectedAudio, setSelectedAudio] = useState("")
    const profile = useAppSelector(state => state.profile.state)
    const audioColabModel = useAudioColabModel()
    const audioRef = useRef<any>(null);

    const playAudio = (src, audioId, title) => {
        console.log("src: ", src);

        if (selectedAudio == src || selectedAudio != "") {
            audioRef.current.pause()
            setSelectedAudio("")
            return
        }

        setSelectedAudio(src)
        
        audioRef.current = new Audio(src)
        audioRef.current.play()

        setTimeout(() => {
            audioColabModel.rewardAudioCollab({
                 audio_id: audioId,
                 name: title
            })
        }, 30000);
    }

    useEffect(() => {
        audioColabModel.fetchAudioColab()
    }, [])

    return (
        <Wrapper>
            <DashboardHeader title={"Audio Collab"} subTitle={"Welcome " + profile.name}>
                
            </DashboardHeader>

            <BalanceWrapper>
                <BalanceContent>
                    <div className="img-overlay">
                        <img src="/assets/img/audiomac-overlay.png" alt="" />
                    </div>
                    <div className="text-content">
                        <h4>Wallet Balance</h4>
                        <h2>₦{audioColabModel.audioFiles?.wallet_balance?.toFixed(2)}</h2>
                        {/* <h5>Total Streamed Music : 13 Videos</h5> */}

                        <div className="row">
                            <button>Withdraw</button>
                            {/* <span>Withdrawal Limit : $100</span> */}
                        </div>
                    </div>

                    <div className="logo-box">
                        <img src="/assets/img/audiomac-icon.png" alt="" />
                    </div>
                </BalanceContent>
            </BalanceWrapper>

            <Container>
                <Categories>
                    <ul className="hide-scrollbar">
                        <li>
                            <img src="/assets/img/chill-hits-img.png" alt="" />
                            <span>Chill Hits</span>
                        </li>
                        <li>
                            <img src="/assets/img/top-hits-img.png" alt="" />
                            <span>Top Hits</span>
                        </li>
                        <li>
                            <img src="/assets/img/happy-hits-img.png" alt="" />
                            <span>Happy Hits</span>
                        </li>
                        <li>
                            <img src="/assets/img/good-time-img.png" alt="" />
                            <span>Good Time</span>
                        </li>
                    </ul>
                </Categories>

                <TrendingArtists>
                    <div className="head">
                        <h3>Trending Artists</h3>
                        <a href="#">VIEW ALL</a>
                    </div>

                    <ul>
                        {audioColabModel.audioFiles?.artists?.map((item, idx) => {
                            return <li key={idx}>
                                <img src={import.meta.env.VITE_FILE_URL + item?.image} alt="" />
                                <div className="content">
                                    <img src="/assets/img/music-icon.png" alt="" />
                                    <div className="info">
                                        <span>{item?.name}</span>
                                        <span>Collaborated</span>
                                        <span>{item?.count} music available</span>
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>
                </TrendingArtists>


                <Row>
                    <ForYou>
                        <h4>Just for you</h4>
                        <ul className="hide-scrollbar">
                            {audioColabModel.isFetchingAudioFiles ? <Loader styleTwo center /> : audioColabModel.audioFiles?.just_for_you?.map((item, idx) => {
                                return <li key={idx} onClick={() => {
                                    playAudio(import.meta.env.VITE_FILE_URL + item?.path, item?.id, item?.title)
                                }}>
                                <img src={import.meta.env.VITE_FILE_URL + item?.image} alt="" />
                                    <div className="row">
                                        <b>Daily Mix </b>
                                        <span>₦1550</span>
                                    </div>
                                    <p>{item?.title}</p>
                                </li>
                            })}
                        </ul>
                    </ForYou>

                    <ForYou>
                        <h4>Trending</h4>
                        <ul className="hide-scrollbar">
                            {audioColabModel.isFetchingAudioFiles ? <Loader styleTwo center /> : audioColabModel.audioFiles?.trending_music?.map((item, idx) => {
                                return <li key={idx} onClick={() => {
                                    playAudio(import.meta.env.VITE_FILE_URL + item?.path, item?.id, item?.title)
                                }}>
                                <img src={import.meta.env.VITE_FILE_URL + item?.image} alt="" />
                                    <div className="row">
                                        <b>Daily Mix </b>
                                        <span>₦1550</span>
                                    </div>
                                    <p>{item?.title}</p>
                                </li>
                            })}
                        </ul>
                    </ForYou>
                </Row>


                <Row>
                    <ForYou>
                        <h4>New Releases</h4>
                        <ul>
                            {audioColabModel.isFetchingAudioFiles ? <Loader styleTwo center /> : audioColabModel.audioFiles?.new_releases?.map((item, idx) => {
                                return <li key={idx} onClick={() => {
                                    playAudio(import.meta.env.VITE_FILE_URL + item?.path, item?.id, item?.title)
                                }}>
                                <img src={import.meta.env.VITE_FILE_URL + item?.image} alt="" />
                                    <div className="row">
                                        <b>Daily Mix </b>
                                        <span>₦1550</span>
                                    </div>
                                    <p>{item?.title}</p>
                                </li>
                            })}
                        </ul>
                    </ForYou>

                    <ForYou>
                        <h4>Daily mix</h4>
                        <ul>
                            {audioColabModel.isFetchingAudioFiles ? <Loader styleTwo center /> : audioColabModel.audioFiles?.daily_mix?.map((item, idx) => {
                                return <li key={idx} onClick={() => {
                                    playAudio(import.meta.env.VITE_FILE_URL + item?.path, item?.id, item?.title)
                                }}>
                                <img src={import.meta.env.VITE_FILE_URL + item?.image} alt="" />
                                    <div className="row">
                                        <b>Daily Mix </b>
                                        <span>₦1550</span>
                                    </div>
                                    <p>{item?.title}</p>
                                </li>
                            })}
                        </ul>
                    </ForYou>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default AudioColab