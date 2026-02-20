import { Container, ContentRow, ExploreCard, ExploreCardWrapper, PlanTab, Wrapper } from './styles'
import { useRef, useState } from 'react'
import HeaderAlt from '../../../components/headerAlt/HeaderAlt'
import FooterAlt from '../../../components/footerAlt/FooterAlt'

const SigninScreen: React.FC = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const signin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            const response = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    username: username.current?.value,
                    password: password.current?.value
                })
            })

            const data = await response.json()

            if (data.status === true) {
                // Save token if provided
                if (data.data?.token) {
                    localStorage.setItem('token', data.data.token)
                    localStorage.setItem('user', JSON.stringify(data.data.user))
                }
                
                // Immediate redirect
                window.location.href = '/dashboard'
            } else {
                setError(data.message || 'Invalid username or password')
                setLoading(false)
            }
        } catch (err) {
            setError('Network error. Please try again.')
            console.error('Login error:', err)
            setLoading(false)
        }
    }

    return (
        <Wrapper>
            <HeaderAlt />
            <Container>
                <PlanTab>
                    <div className="row">
                        <span>1</span>
                        <span>Plan</span>
                    </div>
                    <div className="row">
                        <span>2</span>
                        <span>Profile and Security </span>
                    </div>
                </PlanTab>

                <ContentRow>
                    <div className="text-content">
                        <h2>Login Account</h2>
                        <h3>Log in to Continue your journey — stay in motion, stay in the Stream</h3>

                        <form onSubmit={signin}>
                            {error && (
                                <div style={{ 
                                    padding: '12px', 
                                    background: '#fee2e2', 
                                    color: '#991b1b', 
                                    borderRadius: '8px', 
                                    marginBottom: '16px',
                                    fontSize: '14px'
                                }}>
                                    {error}
                                </div>
                            )}

                            <input 
                                type="text" 
                                placeholder="Username" 
                                ref={username}
                                required
                                disabled={loading}
                            />
                            
                            <input 
                                type="password" 
                                placeholder="Password" 
                                ref={password}
                                required
                                disabled={loading}
                            />

                            <button 
                                type="submit"
                                disabled={loading}
                                style={{ opacity: loading ? 0.6 : 1 }}
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>

                            <div className="meta">
                                <a href="/signup">Don't Have Account With us?<span> Create Here</span></a>
                            </div>
                        </form>
                    </div>
                
                    <div className="img-content">
                        <img src="/assets/img/auth-side-img.png" alt="" />
                    </div>
                </ContentRow>
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

export default SigninScreen