import { useState } from "react";
import AxiosCall from "../../../utils/axios";
import Message from "../../components/message/Message";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { setProfile } from "../../../slices/profileSlice";

const useAuthModel = () => {
    const [isSigningUp, setIsSigningUp] = useState(false)
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const userProfile: any = useAppSelector(state => state.profile.state);
    const dispatch = useAppDispatch()

    const navigation = useNavigate()

    const signup = async (data: any) => {
        try {
            setIsSigningUp(true)
            const res: any = await AxiosCall({
                method: "POST",
                path: "/signup",
                data: data
            });

            setIsSigningUp(false)
            if (res.success) {
                setShowSuccessModal(true)
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsSigningUp(false)
            Message.error(err?.response.data.message)
        }
    }

    const signin = async (data: any) => {
        try {
            setIsSigningIn(true)
            const res: any = await AxiosCall({
                method: "POST",
                path: "/login",
                data: data
            });

            setIsSigningIn(false)
            
            if (res.status == true) {
                // localStorage.setItem("authToken", res.data.accessToken)
                // localStorage.setItem("user_id", res.data.id)

                localStorage.setItem('authToken', res.data.token)
                localStorage.setItem('user', JSON.stringify(res.data.user))
                navigation("/dashboard")

                // dispatch(setProfile({
                //     email: res.data.email,
                //     name: res.data.name,
                //     phone: res.data.phone,
                //     fetchedProfile: true,
                // }))

                Message.success("Signin in successfull")

            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsSigningIn(false)
            Message.error(err?.response.data.message)
        }
    }

    const [isSendingOtp, setIsSendingOtp] = useState(false)

    const forgotPassword = async (data: any) => {
        try {
            setIsSendingOtp(true)
            const res: any = await AxiosCall({
                method: "POST",
                path: "/api/auth/forgot-password",
                data: data
            });

            setIsSendingOtp(false)
            if (res.success) {
                Message.success(res?.message ?? "success")
                navigation("/forgot-password-otp")
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsSendingOtp(false)
            Message.error(err?.response.data.message)
        }
    }

    const [isResetingPassword, setIsResetingPassword] = useState(false)

    const resetPassword = async (data: any) => {
        try {
            setIsResetingPassword(true)
            const res: any = await AxiosCall({
                method: "POST",
                path: "/api/auth/reset-password",
                data: data
            });

            setIsResetingPassword(false)
            if (res.success) {
                Message.success(res?.message ?? "success")

                navigation("/forgot-password-success")
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsResetingPassword(false)
            Message.error(err?.response.data.message)
        }
    }

    const [isFetchingInstallToken, setIsFetchingInstallToken] = useState(false)

    const getInstallationAccessToken = async () => {
        try {
            setIsFetchingInstallToken(true)
            await AxiosCall({
                method: "GET",
                path: "/api/auth/installation-token"
            });

            // setIsFetchingInstallToken(false)
            // if (res?.success) {
                // setFetchedInstallToken(true)
                // setGitInfo(res?.data ?? null)
                const token = localStorage.getItem("authToken")
        
                window.location.href = "https://fletch.coralscale.com?acceess_token=" + token
            // } else {
            //     Message.error(res.message)
            // }
        } catch (err: any) {
            setIsFetchingInstallToken(false)
            Message.error(err?.response.data.message)
        }
    }
    
    const [isFetchingRepo, setIsFetchingRepo] = useState(false)
    const [repoList, setRepoList] = useState([])

    const fetchRepos = async () => {
        try {
            setIsFetchingRepo(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/api/github/fetch-connected-repo"
            });

            setIsFetchingRepo(false)
            if (res.success) {

                console.log('====================================');
                console.log(res);
                console.log('====================================');
                setRepoList(res.data)

            } else {
                Message.error(res?.message)
            }
        } catch (err: any) {
            setIsFetchingRepo(false)
            Message.error(err?.response?.data?.message)
        }
    }

    const fetchProfile = async () => {
        if (userProfile.fetchedProfile) {
            return;
        }
        try {
            const res = await AxiosCall({
                method: "GET",
                path: "/profile"
            });
            if (res.success == true) {
                dispatch(setProfile({
                    email: res.data.email,
                    name: res.data.name,
                    username: res.data.username
                }))
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            Message.error(err?.response.data.message)
        }
    }

    const [vendors, setVendors] = useState([])
    const [isFetchingVendors, setIsFetchingVendors] = useState(false)

    const fetchVendors = async () => {
        setIsFetchingVendors(true)
        try {
            const res = await AxiosCall({
                method: "GET",
                path: "/vendors"
            });
            setIsFetchingVendors(false)
            if (res.success == true) {
                setVendors(res.data)
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsFetchingVendors(false)
            Message.error(err?.response.data.message)
        }
    }

    const [topEarners, setTopEarners] = useState<any[]>([])
    const [isFetchingTopEarners, setIsFetchingTopEarners] = useState(false)

    const fetchTopEarners = async () => {
        setIsFetchingTopEarners(true)
        try {
            const res = await AxiosCall({
                method: "GET",
                path: "/top-earners"
            });
            setIsFetchingTopEarners(false)
            if (res.success == true) {
                setTopEarners(res.data)
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsFetchingTopEarners(false)
            Message.error(err?.response.data.message)
        }
    }


    return {
        signup,
        signin,
        fetchProfile,
        isSigningIn,
        isSigningUp,
        isFetchingInstallToken,
        getInstallationAccessToken,
        isFetchingRepo,
        repoList,
        fetchRepos,
        isSendingOtp,
        forgotPassword,
        resetPassword,
        isResetingPassword,
        showSuccessModal,
        setShowSuccessModal,
        fetchVendors,
        vendors,
        isFetchingVendors,
        topEarners,
        fetchTopEarners,
        isFetchingTopEarners
    }
}

export default useAuthModel
