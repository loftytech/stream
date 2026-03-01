import { useState } from "react";
import AxiosCall from "../../../../utils/axios";
import Message from "../../../components/message/Message";
import UploadUtility from "../../../../utils/axios/UploadUtility";


const useProfileModel = () => {
    const [isFetchingAudioFiles, setIsFetchingAudioFiles] = useState(false)
    const [audioFiles, setAudioFiles] = useState<any>(null)

    const uploadProfilePage = async (file: File) => {
        try {
            setIsFetchingAudioFiles(true)
            const res: any = await UploadUtility(file);

            setIsFetchingAudioFiles(false)
            if (res.success) {
                setAudioFiles(res.data)
            } else {
                Message.error(res?.message ?? "An error occurred")
            }
        } catch (err: any) {
            setIsFetchingAudioFiles(false)
            Message.error(err?.response.data.message ?? "An error occurred")
        }
    }

    const [isFetchingBanks, setIsFetchingBanks] = useState<any>(null)
    const [banks, setBanks] = useState<any[]>([])
    
    const fetchBanks = async () => {
        try {
            setIsFetchingBanks(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/profile/banks"
            });

            setIsFetchingBanks(false)

            if (res.success) {
                setBanks(res.data)
                console.log("data: ", res.data);

            } else {
                Message.error(res?.message ?? "An error occurred")
            }
        } catch (err: any) {
            setIsFetchingBanks(false)
            Message.error(err?.response.data.message ?? "An error occurred")
        }
    }

    const [resolvedName, setResolvedName] = useState<string>("")
    const [isResolvingAccount, setIsResolvingAccount] = useState(false)

     const resolveAccount = async (payload: any) => {
        try {
            setIsResolvingAccount(true)
            const res: any = await AxiosCall({
                method: "POST",
                path: "/profile/resolve-account",
                data: payload
            });

            setIsResolvingAccount(false)

            if (res.success) {
                setResolvedName(res.data?.account_name)
                console.log("data: ", res.data);

            } else {
                Message.error(res?.message ?? "An error occurred")
            }
        } catch (err: any) {
            setIsResolvingAccount(false)
            Message.error(err?.response.data.message ?? "An error occurred")
        }
    }

    const [isUpdatingProfile, setIsUpdatingProfile] = useState(false)

    const updateProfile = async (payload: any) => {
        try {
            setIsUpdatingProfile(true)
            const res: any = await AxiosCall({
                method: "POST",
                path: "/profile/update",
                data: payload
            });

            setIsUpdatingProfile(false)

            if (res.success) {

                Message.success("Profile updated")

            } else {
                Message.error(res?.message ?? "An error occurred")
            }
        } catch (err: any) {
            setIsUpdatingProfile(false)
            Message.error(err?.response.data.message ?? "An error occurred")
        }
    }

    const [isFetchingProfile, setIsFetchingProfile] = useState(false)
    const [profile, setProfile] = useState<any>(null)

    const fetchProfile = async () => {
        try {
            setIsFetchingProfile(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/profile/details"
            });

            setIsFetchingProfile(false)

            if (res.success) {
                setProfile(res.data)
            } else {
                Message.error(res?.message ?? "An error occurred")
            }
        } catch (err: any) {
            setIsFetchingProfile(false)
            Message.error(err?.response.data.message ?? "An error occurred")
        }
    }


    return {
        uploadProfilePage,
        isFetchingAudioFiles,
        audioFiles,
        fetchBanks,
        isFetchingBanks,
        banks,
        isResolvingAccount,
        resolvedName,
        resolveAccount,
        updateProfile,
        isUpdatingProfile,
        profile,
        fetchProfile,
        isFetchingProfile
    }
}

export default useProfileModel
