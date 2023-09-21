import React from 'react'
import LetsTalkComponent from '../Components/LetsTalkComponent'
import Logo from "../assets/Images/mainLogo.png";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import CustomizedHeader from '../Components/CustomizedHeader';
import PageNotFound from '../Components/PageNotFound';

const LetsTalkPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <CustomizedHeader />
            <LetsTalkComponent />
            <div className='d-none d-lg-block d-print-block'>
                <PageNotFound />
            </div>
        </>
    )
}

export default LetsTalkPage