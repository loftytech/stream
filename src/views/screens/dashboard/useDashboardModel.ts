import { useState } from "react";
import AxiosCall from "../../../utils/axios";
import Message from "../../components/message/Message";

const useDashboardModel = () => {
    const [isFetchingStats, setIsFetchingStats] = useState(false)
    const [stats, setStats] = useState<any>(null)

    const fetchStats = async () => {
        try {
            setIsFetchingStats(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/dashboard"
            });

            setIsFetchingStats(false)
            if (res.success) {
                setStats(res.data)
            } else {
                Message.error(res?.message ?? "An error occurred")
            }
        } catch (err: any) {
            setIsFetchingStats(false)
            Message.error(err?.response.data.message ?? "An error occurred")
        }
    }

    const earnVideoReward = async (videoId: string) => {
        try {
            setIsFetchingStats(true)
            const res: any = await AxiosCall({
                method: "POST",
                path: "/reward-video",
                data: {
                    video_id: videoId
                }
            });


            if (res.success) {
                Message.success("Reward credited successfully")
            } else {
                Message.error(res?.message ?? "An error occurred")
            }
        } catch (err: any) {
            Message.error(err?.response.data.message ?? "An error occurred")
        }
    }


    return {
        fetchStats,
        isFetchingStats,
        stats,
        earnVideoReward
    }
}

export default useDashboardModel
