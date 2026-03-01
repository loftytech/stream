import { useState } from "react";
import AxiosCall from "../../../../utils/axios";
import Message from "../../../components/message/Message";
import DownloadUtility from "../../../../utils/axios/downloadUtility";


const useStreamPassModel = () => {
    const [isFetchingStreamPass, setISFetchingStreamPass] = useState(false)
    const [streamPass, setStreamPass] = useState<any>([])

    const fetchStreamPassCode = async () => {
        try {
            setISFetchingStreamPass(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/batch"
            });

            setISFetchingStreamPass(false)
            if (res.success) {
                setStreamPass(res.data)
            } else {
                Message.error(res?.message ?? "An error occurred")
            }
        } catch (err: any) {
            setISFetchingStreamPass(false)
            Message.error(err?.response.data.message ?? "An error occurred")
        }
    }

    const [isExporting, setIsExporting] = useState(false)
    const [currentBatch, setCurrentBatch] = useState("")
    const exportTransactions = async (batchId: string) => {
        try {
            setIsExporting(true)
            setCurrentBatch(batchId)
            
            await DownloadUtility({
                path: "/export-coupons/" + batchId,
                method: "GET",
                fileName: batchId+".csv"
            })

            setCurrentBatch("")
            
            setIsExporting(false)

        } catch (err) {
            setIsExporting(false)
            console.log(err);
            Message.error("An error occurred while exporting stream pass")
        }
    }

    return {
        fetchStreamPassCode,
        isFetchingStreamPass,
        streamPass,
        isExporting,
        exportTransactions,
        currentBatch
    }
}

export default useStreamPassModel
