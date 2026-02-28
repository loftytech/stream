import { Container, ContentHead, ExploreCard, ExploreCardWrapper, StreamersList, TopThreeStreamers, Wrapper } from './styles'
import HeaderAlt from '../../components/headerAlt/HeaderAlt'
import FooterAlt from '../../components/footerAlt/FooterAlt'

const TopStreamers: React.FC = () => {
    

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
                    <div className="items">
                        <div className="img-wrapper">
                            <img src="/assets/svg/crown-vector.svg" alt="" className="crown" />
                            <img src="/assets/img/avatar-img.png" alt="" className="avatar" />

                            <span>1.</span>
                        </div>

                        <div className="text-info">
                            <div className="head">
                                <h3>Bisi Olamide</h3>
                                <img src="/assets/svg/nigeria-flag.svg" alt="" />
                            </div>

                            <h4>$4500</h4>
                        </div>
                    </div>

                    <div className="row">

                        <div className="items">
                            <div className="img-wrapper">
                                <img src="/assets/img/avatar-img.png" alt="" className="avatar" />

                                <span>2.</span>
                                <img src="/assets/svg/second-badge.svg" alt="" className="badge" />
                            </div>

                            <div className="text-info">
                                <div className="head">
                                    <h3>Bisi Olamide</h3>
                                    <img src="/assets/svg/nigeria-flag.svg" alt="" />
                                </div>

                                <h4>$4500</h4>
                            </div>
                        </div>


                        <div className="items">
                            <div className="img-wrapper">
                                <img src="/assets/img/avatar-img.png" alt="" className="avatar" />

                                <span>3.</span>
                                <img src="/assets/svg/third-badge.svg" alt="" className="badge" />
                            </div>

                            <div className="text-info">
                                <div className="head">
                                    <h3>Bisi Olamide</h3>
                                    <img src="/assets/svg/nigeria-flag.svg" alt="" />
                                </div>

                                <h4>$4500</h4>
                            </div>
                        </div>
                    </div>
                </TopThreeStreamers>

                <StreamersList>
                    {[4,5,6,7].map((item, idx) => {
                        return <div key={idx} className="items">
                            <h4>{item}.</h4>
                            <div className="img-wrapper">
                                <img src="/assets/img/avatar-img.png" alt="" />
                            </div>

                            <div className="text-content">
                                <h3>Mideola0001</h3>
                                <div className="row">
                                    <img src="/assets/svg/nigeria-flag.svg" alt="" />
                                    <span>Nigeria</span>
                                </div>
                            </div>

                            <b>$3900</b>
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