import React, { useEffect } from 'react'
import { Content, MainLayoutWrapper } from './styles'
import DashboardHeader from '../dashboardHeader/DashboardHeader';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import Sidebar from '../sidebar/Sidebar';
import { fetchProfileAction } from '../../../actions/profileAction';
import { useLocation } from 'react-router-dom';

const MainLayout: React.FC<{title?: String, children: React.ReactNode}> = ({title, children}) => {
    // const { height, width } = useWindowDimensions()
    const { pathname } = useLocation();
    const userProfile: any = useAppSelector(state => state.profile.state);
    const dispatch = useAppDispatch()

    const fetchProfile = async () => {
        if (userProfile.fetchedProfile) {
            return;
        }
        fetchProfileAction(dispatch);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
   

    useEffect(() => {
        // fetchProfile()

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