import { setProfile } from "../slices/profileSlice";
import AxiosCall from "../utils/axios";
import Message from "../views/components/message/Message";


export const fetchProfileAction = async (dispatch: Function) => {
    try {
        const res = await AxiosCall({
            method: "GET",
            path: "/v1/profile"
        });
        dispatch(setProfile({
            email: res.data.email,
            firstName: res.data.firstname,
            lastName: res.data.lastname,
            phone: res.data.phone,
            fetchedProfile: true,
            balance: res.data.balance
        }))
    } catch (err: any) {
        Message.error(err?.response.data.message)
    }
}