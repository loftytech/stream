import { useState } from "react";
import AxiosCall from "../../../../utils/axios";
import Message from "../../../components/message/Message";


const useAudioColabModel = () => {
    const [isFetchingAudioFiles, setIsFetchingAudioFiles] = useState(false)
    const [audioFiles, setAudioFiles] = useState<any>(null)

    const fetchAudioColab = async () => {
        try {
            setIsFetchingAudioFiles(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/dashboard/applemusic"
            });

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



    return {
        fetchAudioColab,
        isFetchingAudioFiles,
        audioFiles
    }
}

export default useAudioColabModel
