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

    const [snap, setSnap] = useState<any>(null)
    const fetchSnapCollab = async () => {
        try {
            setIsFetchingStats(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/dashboard/snap"
            });

            if (res.success) {
                setSnap(res.data)
                console.log("data: ", res.data);
                
                Message.success("Fetched snap successfully")
            } else {
                Message.error(res?.message ?? "An error occurred")
            }
        } catch (err: any) {
            Message.error(err?.response.data.message ?? "An error occurred")
        }
    }

    const [snapDetails, setSnapDetails] = useState<any>(null)

    const fetchSnapCollabDetails = async (id: string) => {
        try {
            setIsFetchingStats(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/dashboard/snap/"+id
            });

            if (res.success) {
                setSnapDetails(res.data)
                console.log("data: ", res.data);
                
                Message.success("Fetched  details successfully")
            } else {
                Message.error(res?.message ?? "An error occurred")
            }
        } catch (err: any) {
            Message.error(err?.response.data.message ?? "An error occurred")
        }
    }

    const earnSnapReward = async (id: string) => {
        try {
            setIsFetchingStats(true)
            const res: any = await AxiosCall({
                method: "POST",
                path: "/snap-reward",
                data: {
                    post_id: id
                }
            });

            if (res.status == "success") {
                setSnapDetails(res.data)
                console.log("data: ", res.data);
                
                Message.success("Reward  earned successfully")
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
        earnVideoReward,
        fetchSnapCollab,
        snapDetails,
        snap,
        fetchSnapCollabDetails,
        earnSnapReward
    }
}

export default useDashboardModel
