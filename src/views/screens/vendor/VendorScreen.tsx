import { Container, ContentRow, ExploreCard, ExploreCardWrapper, VendorList, Wrapper } from './styles'
import HeaderAlt from '../../components/headerAlt/HeaderAlt'
import FooterAlt from '../../components/footerAlt/FooterAlt'
import { BiTrash } from 'react-icons/bi'
import useAuthModel from '../auth/useAuthModel'
import { useEffect } from 'react'
import Loader from '../../components/Loader/Loader'

const VendorScreen: React.FC = () => {
    const authModel = useAuthModel()

    useEffect(() => {
        authModel.fetchVendors()
    }, [])

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
                    {authModel.isFetchingVendors ? <Loader styleTwo center /> : authModel.vendors.map((item: any, idx) => {
                        return <div key={idx} className="items">
                            <div className="img-wrapper">
                                <img src={item?.profile_photo ? import.meta.env.VITE_FILE_URL + item?.profile_photo : "/assets/img/avatar-img.png"} alt="" />
                            </div>

                            <div className="text-content">
                                <h3>{item?.username}</h3>
                                <div className="row">
                                    <img src="/assets/svg/nigeria-flag.svg" alt="" />
                                    <span>{item?.country}</span>

                                    {item?.coupon_status == "out_of_stock" ? <div className="status">
                                        <BiTrash />
                                        <b>Pass sold out</b>
                                    </div> : <div className="status active">
                                        <BiTrash />
                                        <b>Pass Available</b>
                                    </div>}
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