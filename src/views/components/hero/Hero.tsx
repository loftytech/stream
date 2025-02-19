import { Link } from 'react-router-dom'
import { BigContainer, Container, ImageContent, Stacks, TextContent, Wrapper } from './styles'
import { MdOutlineRocketLaunch } from 'react-icons/md'

const Hero: React.FC = () => {
    return (
        <Wrapper>
            <BigContainer>
                <Container>
                    <TextContent>
                        <h2>Rapidly build , test and deploy your applications </h2>
                        <h6>Emphasizes quick iteration, continuous testing, and efficient deployment to deliver high-quality applications to users faster. It's a fundamental principle in DevOps and software development methodologies.</h6>

                        <div className="link-sec">
                            <Link to="/signup"><span>Deploy a new project</span><MdOutlineRocketLaunch /></Link>
                            <a href="#how-it-works">How it works</a>
                        </div>
                    </TextContent>

                    <ImageContent>
                        <img src="/assets/svg/hero.svg" alt="launch banner" />
                    </ImageContent>
                </Container>
                <Stacks>
                    <h3 className="sec-title stack-title">Supported Stacks</h3>
                    <div className="stacks-wrapper">
                        <div className="img-wrapper">
                            <img src="/assets/img/reactjs-img.png" alt="stack logo" />
                        </div>
                        <div className="img-wrapper">
                            <img src="/assets/img/vuejs-img.png" alt="stack logo" />
                        </div>
                        <div className="img-wrapper">
                            <img src="/assets/img/nextjs-img.png" alt="stack logo" />
                        </div>
                        <div className="img-wrapper">
                            <img src="/assets/img/svelte-img.png" alt="stack logo" />
                        </div>
                        <div className="img-wrapper">
                            <img src="/assets/img/vanilla-img.png" alt="stack logo" />
                        </div>
                        <div className="img-wrapper">
                            <img src="/assets/img/nodejs-img.png" alt="stack logo" />
                        </div>
                        <div className="img-wrapper">
                            <img src="/assets/img/laravel-img.png" alt="stack logo" />
                        </div>
                        {/* <div className="img-wrapper">
                            <img src="/assets/svg/php-img.png" alt="stack logo" />
                        </div> */}
                    </div>
                </Stacks>
            </BigContainer>
        </Wrapper>
    )
}

export default Hero