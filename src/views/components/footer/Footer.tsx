import { Link } from 'react-router-dom'
import { BottomSection, BuiltByDevs, Container, FooterContent, Nav, TopSection, Wrapper } from './styles'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Footer: React.FC = () => (
    <Wrapper>
        <FooterContent>
            <BuiltByDevs>
                <div className="text-content">
                    <h2>Built by developers, <br />for developers.</h2>
                    <p>Join 1000+ developers, innovators, and engineers who have embraced excellence, innovation, and creativity.</p>
                    <div className="actions">
                        <a href="#">
                            <span>Use Dartmind</span>
                            <IoIosArrowRoundForward />
                        </a>
                    </div>
                </div>

                <div className="img-content">
                    <img src="/assets/svg/dartmind-vector.svg" alt="" />
                </div>
            </BuiltByDevs>
            <Container>
                <TopSection>
                    <Nav>
                        <ul>
                            <h5>Product</h5>
                            <li><a href="#">Editor</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Co-pilot</a></li>
                        </ul>
                        <ul>
                            <h5>Community</h5>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Discord</a></li>
                            <li><a href="#">Get Support</a></li>
                            <li><a href="#">Help Center</a></li>
                        </ul>
                        <ul>
                            <h5>Learn</h5>
                            <li><Link to="/documentation">Documentation</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><a href="#">Resources</a></li>
                        </ul>
                    </Nav>
                    <div className="logo-section">
                        <Link className="logo" to="/">
                            <img src="/assets/svg/banner.svg" alt="banner" />
                        </Link>
                        <ul className="social-links">
                            <li>
                                <a href="#">
                                    <img src="/assets/svg/youtube-icon.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/assets/svg/twitter-icon.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/assets/svg/github-icon.svg" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </TopSection>
                <BottomSection>
                    <ul className="credits">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                    </ul>
                    <div className="copyright">
                        <span>&copy; 2024 with Company</span>
                    </div>
                </BottomSection>
            </Container>
        </FooterContent>
    </Wrapper>
)

export default Footer