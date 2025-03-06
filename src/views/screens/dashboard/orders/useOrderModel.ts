import { useState } from "react"
import { Product, Purchase, Terminal, UnitQuantity } from "./types"
import AxiosCall from "../../../../utils/axios"
import Message from "../../../components/message/Message"

const useOrderModel = () => {
    const [attacchments, setAttachments] = useState<string[]>([])
    const [units, setUnits] = useState<UnitQuantity[]>([])
    const [terminals, setTerminals] = useState<Terminal[]>([])
    const [products, setProducts] = useState<Product[]>([])
    const [isFetchingProducts, setIsFetchingProducts] = useState(false)
    const [isFetchingTerminals, setIsFetchingTerminals] = useState(false)
    const [isFetchingUnits, setIsFetchingUnits] = useState(false)
    const [isPlacingOrder, setIsPlacingOrder] = useState(false)
    const [orders, setOrders] = useState<Purchase[]>([])
    const [isFetchingOrders, setIsFetchingOrders] = useState(false)

    const fetchOrders = async () => {
        try {
            setIsFetchingOrders(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/v1/purchase"
            });

            setIsFetchingOrders(false)
            if (res.status == "success") {
                setOrders(res.data)
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsFetchingOrders(false)
            Message.error(err?.response.data.message)
        }
    }

    const fetchTerminals = async () => {
        try {
            setIsFetchingTerminals(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/v1/terminal"
            });

            setIsFetchingTerminals(false)
            if (res.status == "success") {
                setTerminals(res.data)
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsFetchingTerminals(false)
            Message.error(err?.response.data.message)
        }
    }

    const fetchProducts = async () => {
        try {
            setIsFetchingProducts(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/v1/product"
            });

            setIsFetchingProducts(false)
            if (res.status == "success") {
                setProducts(res.data)
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsFetchingProducts(false)
            Message.error(err?.response.data.message)
        }
    }

    const fetchUnits = async () => {
        try {
            setIsFetchingUnits(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/v1/unit"
            });

            setIsFetchingUnits(false)
            if (res.status == "success") {
                setUnits(res.data)
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsFetchingUnits(false)
            Message.error(err?.response.data.message)
        }
    }

    const newOrder = async (data: HTMLFormElement) => {
        try {
            const formData = new FormData(data);
            formData.append("payments[0][amount][currency]", "NGN")

            console.log("formData: ", formData);
            
            setIsPlacingOrder(true)
            const res: any = await AxiosCall({
                method: "POST",
                contentType: "multipart/form-data",
                path: "/v1/purchase",
                data: formData
            });

            setIsPlacingOrder(false)
            if (res.status == "success") {

            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsPlacingOrder(false)
            Message.error(err?.response.data.message)
        }
    }

    const handleFileInout = (e: any) => {
        const _attachments: string[] = []

        for (let index = 0; index < e.target.files.length; index++) {
            const element = e.target.files[index];
            _attachments.push(element.name)
        }

        setAttachments([...attacchments, ..._attachments])
    }
    

    return {
        terminals,
        fetchTerminals,
        isFetchingTerminals,
        products,
        fetchProducts,
        isFetchingProducts,
        isFetchingUnits,
        fetchUnits,
        units,
        attacchments,
        handleFileInout,
        isPlacingOrder,
        newOrder,
        isFetchingOrders,
        orders,
        fetchOrders
    }
}

export default useOrderModel