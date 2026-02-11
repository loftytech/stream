import React, { useEffect, useRef, useState } from 'react';
import {  Content, Wrapper } from './styles';

interface PopupInterFace {
    closeModal?: () => void
    children: React.ReactNode
    maxWidth?: string
    background?: string
    showPopup: boolean
    isDashboard?: boolean
}
const PopupModal: React.FC<PopupInterFace> = ({showPopup, closeModal = () => {}, maxWidth = "480px", background = "#fff", isDashboard = true, children}) => {
    const topUpModalRef = useRef<any>(null)
    const [opacity, setOpacity] = useState(0)
    const [scale, setScale] = useState(0.5)
    const [popupStatus, setPopupStatus] = useState(showPopup)

    const hideTopUpModal = (e: any) => {
        if (e.target == topUpModalRef.current) {
            closeModal();
        }
    }

    const showModal = () => {
        setPopupStatus(true)
        setTimeout(() => { 
            setOpacity(1)
            setScale(1)
        }, 10);
    }

    const closePopup = () => {
        setOpacity(0)
        setScale(0.5)
        setTimeout(() => {
            setPopupStatus(false)
        }, 200);
    }

    const togglePopupStatus = () => {
        if (showPopup) {
            showModal()
        } else {
            closePopup()
        }
    }

    useEffect(() => {
        togglePopupStatus()
    }, [showPopup])
    
    return (
        <Wrapper $isDashboard={isDashboard} $showPopup={popupStatus} ref={topUpModalRef} onClick={hideTopUpModal}>
            <Content opacity={opacity} scale={scale} $maxWidth={maxWidth} $background={background}>
                {children}
            </Content>
        </Wrapper>
    );
}
 
export default PopupModal;