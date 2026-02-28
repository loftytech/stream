import { Container, ContentRow, ExploreCard, ExploreCardWrapper, VendorList, Wrapper } from './styles'
import HeaderAlt from '../../components/headerAlt/HeaderAlt'
import FooterAlt from '../../components/footerAlt/FooterAlt'
import { BiTrash } from 'react-icons/bi'

const VendorScreen: React.FC = () => {
    

    return (
        <Wrapper>
            <HeaderAlt />
            <Container>
                <ContentRow>
                    <div className="text-content">
                        <h2>StreamPass Agents</h2>
                        <h3>Stream's verified vendors are always active and ready to assist you with your StreamPass purchase available 24/7, wherever you are. Simply reach out.</h3>
                    </div>
                </ContentRow>

                <VendorList>
                    {[1,2,3,4,5,6,7].map((_item, idx) => {
                        return <div key={idx} className="items">
                            <div className="img-wrapper">
                                <img src="/assets/img/avatar-img.png" alt="" />
                            </div>

                            <div className="text-content">
                                <h3>Mideola0001</h3>
                                <div className="row">
                                    <img src="/assets/svg/nigeria-flag.svg" alt="" />
                                    <span>Nigeria</span>

                                    <div className="status">
                                        <BiTrash />
                                        <b>Pass sold out</b>
                                    </div>
                                </div>
                            </div>

                            <button>Message</button>
                        </div>
                    })}
                </VendorList>
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

export default VendorScreen