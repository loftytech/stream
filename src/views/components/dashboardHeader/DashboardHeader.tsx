import React from 'react';
import { Content, HeaderWrapper, HeadMeta, Title } from './styles';
import { IoMenuOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { setNavigation } from '../../../slices/navigationSlice';
import { useAppSelector } from '../../../hooks/hooks';


const  DashboardHeader: React.FC<{title?: String, customHeader?: React.ReactNode}> = ({title, customHeader}) => {
    const userProfile = useAppSelector(state => state.profile.state);
    const dispatch = useDispatch();
    return (
        <HeaderWrapper>
            <Content>
                <div className="toggle-menu" onClick={() => dispatch(setNavigation({dashboard: true}))}>
                    <IoMenuOutline />
                </div>
                {customHeader ?? <Title>
                    {title}
                </Title>}
                <HeadMeta>
                    <img src="/assets/img/avatar-img.png" alt="" />
                    <div className="info">
                        <h4>{userProfile.name}</h4>
                        <span>{userProfile.email}</span>
                    </div>
                </HeadMeta>
            </Content>
        </HeaderWrapper>
    )
}

export default DashboardHeader