import { Container, ContentHead, ExploreCard, ExploreCardWrapper, StreamersList, TopThreeStreamers, Wrapper } from './styles'
import HeaderAlt from '../../components/headerAlt/HeaderAlt'
import FooterAlt from '../../components/footerAlt/FooterAlt'
import useAuthModel from '../auth/useAuthModel'
import { useEffect } from 'react'
import Loader from '../../components/Loader/Loader'

const TopStreamers: React.FC = () => {
    const authModel = useAuthModel()
    
    useEffect(() => {
        authModel.fetchTopEarners()
    }, [])

    return (
        <Wrapper>
            <HeaderAlt />
            <Container>
                <ContentHead>
                    <div className="text-content">
                        <h2>Top Streamers</h2>
                        <h3>The Stream Champions: passionate creators who never stop moving, connecting, and evolving. Watch them, learn from them, and let their flow inspire yours.</h3>
                    </div>

                    <div className="switch-country">
                        <img src="/assets/svg/nigeria-flag.svg" alt="" />
                        <select name="" id="">
                            <option value="">Nigeria</option>
                        </select>
                    </div>
                </ContentHead>

                <TopThreeStreamers>
                    {authModel.topEarners?.[0] && <div className="items">
                        <div className="img-wrapper">
                            <img src="/assets/svg/crown-vector.svg" alt="" className="crown" />
                            <img src={authModel.topEarners?.[0]?.profile_photo ? import.meta.env.VITE_FILE_URL + authModel.topEarners?.[0]?.profile_photo : "/assets/img/avatar-img.png"} alt="" className="avatar" />

                            <span>1.</span>
                        </div>

                        <div className="text-info">
                            <div className="head">
                                <h3>{authModel.topEarners?.[0]?.username}</h3>
                                <img src="/assets/svg/nigeria-flag.svg" alt="" />
                            </div>

                            <h4>${authModel.topEarners?.[0]?.total_amount?.toFixed(2)}</h4>
                        </div>
                    </div>}

                    <div className="row">
                        {authModel.topEarners?.[1] && <div className="items">
                            <div className="img-wrapper">
                                <img src={authModel.topEarners?.[1]?.profile_photo ? import.meta.env.VITE_FILE_URL + authModel.topEarners?.[1]?.profile_photo : "/assets/img/avatar-img.png"} alt="" className="avatar" />

                                <span>2.</span>
                                <img src="/assets/svg/second-badge.svg" alt="" className="badge" />
                            </div>

                            <div className="text-info">
                                <div className="head">
                                    <h3>{authModel.topEarners?.[1]?.username}</h3>
                                    <img src="/assets/svg/nigeria-flag.svg" alt="" />
                                </div>

                                <h4>${authModel.topEarners?.[1]?.total_amount?.toFixed(2)}</h4>
                            </div>
                        </div>}


                        {authModel.topEarners?.[2] && <div className="items">
                            <div className="img-wrapper">
                                <img src={authModel.topEarners?.[2]?.profile_photo ? import.meta.env.VITE_FILE_URL + authModel.topEarners?.[1]?.profile_photo : "/assets/img/avatar-img.png"} alt="" className="avatar" />

                                <span>3.</span>
                                <img src="/assets/svg/third-badge.svg" alt="" className="badge" />
                            </div>

                            <div className="text-info">
                                <div className="head">
                                    <h3>{authModel.topEarners?.[2]?.username}</h3>
                                    <img src="/assets/svg/nigeria-flag.svg" alt="" />
                                </div>

                                <h4>${authModel.topEarners?.[2]?.total_amount?.toFixed(2)}</h4>
                            </div>
                        </div>}
                    </div>
                </TopThreeStreamers>

                <StreamersList>
                    {authModel.isFetchingTopEarners ? <Loader styleTwo center /> : authModel.topEarners?.slice(3)?.map((item, idx) => {
                        return <div key={idx} className="items">
                            <h4>{idx+4}.</h4>
                            <div className="img-wrapper">
                                <img src={item?.profile_photo ? import.meta.env.VITE_FILE_URL + item?.profile_photo : "/assets/img/avatar-img.png"} alt="" className="avatar" />
                            </div>

                            <div className="text-content">
                                <h3>{item?.username}</h3>
                                <div className="row">
                                    <img src="/assets/svg/nigeria-flag.svg" alt="" />
                                    <span>Nigeria</span>
                                </div>
                            </div>

                            <b>${item?.total_amount?.toFixed(2)}</b>
                        </div>
                    })}
                </StreamersList>
            </Container>

            <ExploreCardWrapper>
                <ExploreCard>
                    <p>Our website offers real opportunities to earn and grow. Join a trusted platform where effort meets reward and success is built together.</p>
                    <a href="#">Explore</a>
                </ExploreCard>
            </ExploreCardWrapper>
            <FooterAlt />
        </Wrapper>
    )
}

export default TopStreamers