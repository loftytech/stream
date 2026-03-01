import { useState } from "react";
import AxiosCall from "../../../../utils/axios";
import Message from "../../../components/message/Message";


const useDownloadablesModel = () => {
    const [isFetchingDownloadables, setIsFetchingDownloadables] = useState(false)
    const [downloadables, setDoanloadables] = useState<any>(null)

    const fetchDownloadables = async () => {
        try {
            setIsFetchingDownloadables(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/downloadables"
            });

            setIsFetchingDownloadables(false)
            if (res.success) {
                setDoanloadables(res.data)
            } else {
                Message.error(res?.message ?? "An error occurred")
            }
        } catch (err: any) {
            setIsFetchingDownloadables(false)
            Message.error(err?.response.data.message ?? "An error occurred")
        }
    }

    const [liveStreamDetails, setLiveStreamDetails] = useState<any>(null)

    const fetchDownloadablesDetails = async (id: string) => {
        try {
            setIsFetchingDownloadables(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/livestreams/" + id
            });

            setIsFetchingDownloadables(false)
            if (res.success) {
                setLiveStreamDetails(res.data?.livestream)
            } else {
                Message.error(res?.message ?? "An error occurred")
            }
        } catch (err: any) {
            setIsFetchingDownloadables(false)
            Message.error(err?.response.data.message ?? "An error occurred")
        }
    }

    const rewardDownloadables = async (fileId: any) => {
        try {
            const res: any = await AxiosCall({
                method: "POST",
                path: "/downloadables/" + fileId,
            });


            if (res.success) {
                Message.success("Reward Earned")
            } else {
                Message.error(res?.message ?? "An error occurred")
            }
        } catch (err: any) {
            Message.error(err?.response.data.message ?? "An error occurred")
        }
    }



    return {
        fetchDownloadables,
        isFetchingDownloadables,
        downloadables,
        rewardDownloadables,
        fetchDownloadablesDetails,
        liveStreamDetails
    }
}

export default useDownloadablesModel
