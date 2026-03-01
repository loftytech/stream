import { useState } from "react";
import AxiosCall from "../../../../utils/axios";
import Message from "../../../components/message/Message";


const useLiveStreamModel = () => {
    const [isFetchingLiveStreamFiles, setIsFetchingVideoFiles] = useState(false)
    const [liveStreamFiles, setLiveStreamFiles] = useState<any>(null)

    const fetchLiveStreamColab = async () => {
        try {
            setIsFetchingVideoFiles(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/livestreams"
            });

            setIsFetchingVideoFiles(false)
            if (res.success) {
                setLiveStreamFiles(res.data)
            } else {
                Message.error(res?.message ?? "An error occurred")
            }
        } catch (err: any) {
            setIsFetchingVideoFiles(false)
            Message.error(err?.response.data.message ?? "An error occurred")
        }
    }

    const [liveStreamDetails, setLiveStreamDetails] = useState<any>(null)

    const fetchLiveStreamColabDetails = async (id: string) => {
        try {
            setIsFetchingVideoFiles(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/livestreams/" + id
            });

            setIsFetchingVideoFiles(false)
            if (res.success) {
                setLiveStreamDetails(res.data?.livestream)
            } else {
                Message.error(res?.message ?? "An error occurred")
            }
        } catch (err: any) {
            setIsFetchingVideoFiles(false)
            Message.error(err?.response.data.message ?? "An error occurred")
        }
    }

    const rewardLiveStream = async (payload: any) => {
        try {
            const res: any = await AxiosCall({
                method: "POST",
                path: "/reward",
                data: payload
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
        fetchLiveStreamColab,
        isFetchingLiveStreamFiles,
        liveStreamFiles,
        rewardLiveStream,
        fetchLiveStreamColabDetails,
        liveStreamDetails
    }
}

export default useLiveStreamModel
