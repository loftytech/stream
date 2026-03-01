import { useState } from "react";
import AxiosCall from "../../../../utils/axios";
import Message from "../../../components/message/Message";


const useVideoColabModel = () => {
    const [isFetchingVideoFiles, setIsFetchingVideoFiles] = useState(false)
    const [videoFIles, setVideoFiles] = useState<any>(null)

    const fetchVideoColab = async () => {
        try {
            setIsFetchingVideoFiles(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/videos"
            });

            setIsFetchingVideoFiles(false)
            if (res.success) {
                setVideoFiles(res.data)
            } else {
                Message.error(res?.message ?? "An error occurred")
            }
        } catch (err: any) {
            setIsFetchingVideoFiles(false)
            Message.error(err?.response.data.message ?? "An error occurred")
        }
    }

    const rewardVideoCollab = async (payload: any) => {
        try {
            const res: any = await AxiosCall({
                method: "POST",
                path: "/reward-video",
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
        fetchVideoColab,
        isFetchingVideoFiles,
        videoFiles: videoFIles,
        rewardVideoCollab
    }
}

export default useVideoColabModel
