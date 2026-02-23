import React from 'react';
import { Content, HeaderWrapper, HeadMeta, Title } from './styles';
import { IoMenuOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { setNavigation } from '../../../slices/navigationSlice';



const  DashboardHeader: React.FC<{title?: String, subTitle?: string, customHeader?: React.ReactNode}> = ({title, subTitle, customHeader}) => {

    const dispatch = useDispatch();
    return (
        <HeaderWrapper>
            <Content>
                <div className="toggle-menu" onClick={() => dispatch(setNavigation({dashboard: true}))}>
                    <IoMenuOutline />
                </div>
                {customHeader ?? <Title>
                    <h5>{title}</h5>
                    <h6>{subTitle}</h6>
                </Title>}
                <HeadMeta>
                    <img src="/assets/img/avatar-img.png" alt="" />
                    <svg width="38" height="28" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.22222 0C3.10242 0 2.02848 0.44484 1.23666 1.23666C0.44484 2.02848 0 3.10242 0 4.22222L0 23.2222C0 24.342 0.44484 25.416 1.23666 26.2078C2.02848 26.9996 3.10242 27.4444 4.22222 27.4444H12.6667V0H4.22222Z" fill="#009A49"/>
                        <path d="M12.667 0H25.3337V27.4444H12.667V0Z" fill="#EEEEEE"/>
                        <path d="M33.7775 0H25.333V27.4444H33.7775C34.8973 27.4444 35.9712 26.9996 36.763 26.2078C37.5548 25.416 37.9997 24.342 37.9997 23.2222V4.22222C37.9997 3.10242 37.5548 2.02848 36.763 1.23666C35.9712 0.44484 34.8973 0 33.7775 0Z" fill="#009A49"/>
                    </svg>

                    <div className="info">
                        <h4>PREMIUM</h4>
                        <div className="row">
                            <span>nga</span>
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 0.5L6.5 6.5L12.5 0.5" stroke="#2F4F4E" stroke-linecap="round"/>
                            </svg>

                        </div>
                    </div>
                </HeadMeta>
            </Content>
        </HeaderWrapper>
    )
}

export default DashboardHeader