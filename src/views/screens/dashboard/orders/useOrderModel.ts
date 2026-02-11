import { useState } from "react"
import { Product, Purchase, Terminal, UnitQuantity } from "./types"
import AxiosCall from "../../../../utils/axios"
import Message from "../../../components/message/Message"
import { useNavigate } from "react-router-dom"
import { PurcchaseDetails } from "../../../components/order_details/types"
import { Order } from "./meta.types"
import { useResolveFilters } from "../../../../hooks/hooks"



const useOrderModel = () => {
    const { resolveFilters, resolveQueryParams } = useResolveFilters()
    const [attacchments, setAttachments] = useState<string[]>([])
    const [units, setUnits] = useState<UnitQuantity[]>([])
    const [terminals, setTerminals] = useState<Terminal[]>([])
    const [products, setProducts] = useState<Product[]>([])
    const [isFetchingProducts, setIsFetchingProducts] = useState(false)
    const [isFetchingTerminals, setIsFetchingTerminals] = useState(false)
    const [isFetchingUnits, setIsFetchingUnits] = useState(false)
    const [isPlacingOrder, setIsPlacingOrder] = useState(false)
    const [purchases, setPurchases] = useState<Purchase[]>([])
    const [orders, setOrders] = useState<Order[]>([])
    const [order, setOrder] = useState<PurcchaseDetails>()
    const [isFetchingPurchases, setIsFetchingPurchases] = useState(false)
    const [isFetchingOrders, setIsFetchingOrders] = useState(false)
    const [isFetchingPayments, setIsFetchingPayments] = useState(false)
    const [payments, setPayments] = useState<any[]>([])
    const [isFetchingOrder, setIsFetchingOrder] = useState(false)
    const [showPurchaseModal, setShowPurchaseModal] = useState(false)
    const [isFetchingTodayPrice, setIsFetchingTodayPrice] = useState(false)
    const [transactionsMeta, setTransactionsMeta] = useState<{
        totalPages: number
        totalItems: number
        limit: number
        nextPage: number
        currentPage: number
    }>({
        totalPages: 0,
        totalItems: 0,
        limit: 0,
        nextPage: 0,
        currentPage: 0
    })
    
    const [todayPrice, setTodayPrice] = useState({
        date: "2025-09-26T08:05:21.000Z",
        value: 0
    })

    const navigate = useNavigate()

    const fetchPurchases = async () => {
        try {
            const _queryFilters = await resolveFilters({limit: 20});
            const _queryParams = await resolveQueryParams(_queryFilters);

            setIsFetchingPurchases(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/v1/purchase" + _queryParams
            });

            setIsFetchingPurchases(false)
            if (res.status == "success") {
                setPurchases(res.data)

                setTransactionsMeta({
                    ...transactionsMeta,
                    totalItems: 6,
                    limit: _queryFilters.limit,
                })
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsFetchingPurchases(false)
            Message.error(err?.response.data.message)
        }
    }

    const fetchOrders = async () => {
        try {

            const _queryFilters = await resolveFilters({limit: 20});
            const _queryParams = await resolveQueryParams(_queryFilters);

            setIsFetchingOrders(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/v1/order" + _queryParams
            });

            setIsFetchingOrders(false)
            if (res.status == "success") {
                setOrders(res.data.orders)

                setTransactionsMeta({
                    ...transactionsMeta,
                    totalItems: res.data.count,
                    limit: res.data.limit,
                    totalPages: Math.ceil(res.data.count / res.data.limit),
                    currentPage: res.data.page
                })
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsFetchingOrders(false)
            Message.error(err?.response.data.message)
        }
    }

    const fetchOrderPayments = async (orderId: any) => {
        try {
            setIsFetchingPayments(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/v1/order/" + orderId + "/payment"
            });

            setIsFetchingPayments(false)
            if (res.status == "success") {
                setPayments(res.data.payments)
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsFetchingPayments(false)
            Message.error(err?.response.data.message)
        }
    }

    const fetchOrder = async (id: string) => {
        try {
            setIsFetchingOrder(true)
            setShowPurchaseModal(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/v1/purchase/" + id
            });

            setIsFetchingOrder(false)
            if (res.status == "success") {
                setOrder(res.data)
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsFetchingOrder(false)
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
                Message.success("Order created successfully")
                navigate("/dashboard")
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

    const getProducts = async () => {
        try {
            const res: any = await AxiosCall({
                method: "GET",
                path: "/v1/product"
            });

            if (res.status == "success") {
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            Message.error(err?.response.data.message)
        }
    }

    const getTodayPrice = async () => {
        try {
            setIsFetchingTodayPrice(true)
            const res: any = await AxiosCall({
                method: "GET",
                path: "/v1/product/1/price/last"
            });

            setIsFetchingTodayPrice(false)
            if (res.status == "success") {
                setTodayPrice(res.data)
            } else {
                Message.error(res.message)
            }
        } catch (err: any) {
            setIsFetchingTodayPrice(false)
            Message.error(err?.response.data.message)
        }
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
        isFetchingPurchases,
        purchases,
        orders,
        fetchPurchases,
        isFetchingOrder,
        order,
        fetchOrder,
        setShowPurchaseModal,
        showPurchaseModal,
        setIsFetchingOrders,
        isFetchingOrders,
        fetchOrders,
        fetchOrderPayments,
        isFetchingPayments,
        payments,
        getProducts,
        isFetchingTodayPrice,
        todayPrice,
        getTodayPrice,
        transactionsMeta
    }
}

export default useOrderModel