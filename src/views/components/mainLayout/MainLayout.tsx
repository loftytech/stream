import React, { useEffect } from 'react'
import { Content, MainLayoutWrapper } from './styles'
import Sidebar from '../sidebar/Sidebar';

import { useLocation } from 'react-router-dom';

const MainLayout: React.FC<{title?: String, children: React.ReactNode}> = ({children}) => {
    // const { height, width } = useWindowDimensions()
    const { pathname } = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
   

    useEffect(() => {
        // authModel.fetchProfile()
    }, [])

    return (
        <MainLayoutWrapper>
            <Sidebar />
            <Content>
                {/* <DashboardHeader title={title} /> */}
                {children}
            </Content>
        </MainLayoutWrapper>
    )
}

export default MainLayout