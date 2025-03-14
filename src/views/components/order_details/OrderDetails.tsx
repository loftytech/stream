import React from "react"
import PopupModal from "../popupModal/PopupModal"
import { PurchaseModal } from "./styles"
import Loader from "../Loader/Loader"
import useOrderModel from "../../screens/dashboard/orders/useOrderModel"
import dayjs from "dayjs"

const OrderDetails: React.FC<{isLoading: boolean, showModal: boolean, closeModal: () => void}> = ({isLoading = false, showModal = false, closeModal= () => {}}) => {
    const orderModel = useOrderModel()

    return (
        <PopupModal showPopup={showModal} maxWidth="720px" closeModal={closeModal}>
            {isLoading ? <Loader styleTwo center /> : <PurchaseModal>
                <div className="header">
                    <div className="col">
                        <h2>Purchase Details</h2>
                        <h6>Here is a preview of purchase summary</h6>
                    </div>

                    <img src="/assets/svg/close.-icon.svg" alt="" onClick={() => closeModal()} />
                </div>
                <h3>Order Information</h3>
                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Order date</label>
                        <input type="text" name="marketer" id="" value={dayjs(orderModel?.order?.orderDate!).format("DD, MMM YYYY")} />
                    </div>

                </div>
                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Marketer Name</label>
                        <input type="text" name="marketer" id="" value={orderModel?.order?.marketer} />
                    </div>

                    <div className="input-col">
                        <label htmlFor="">Terminal</label>
                        <input type="text" name="orderDate" id="" value={orderModel?.order?.marketer} />
                    </div>
                </div>
                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Product</label>
                        <input type="text" name="marketer" id="" value={orderModel?.order?.marketer} />
                    </div>

                    <div className="input-col">
                        <label htmlFor="">Plant quantity</label>
                        <input type="text" name="orderDate" id="" value={orderModel?.order?.quantity} />
                    </div>
                </div>
                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Price</label>
                        <input type="text" name="marketer" id="" value={orderModel?.order?.price} />
                    </div>

                    <div className="input-col">
                        <label htmlFor="">Plan date</label>
                        <input type="text" name="orderDate" id="" value={dayjs(orderModel?.order?.loadingDate!).format("DD, MMM YYYY")} />
                    </div>
                </div>
                <div className="row-alt">
                    <div className="input-col">
                        <label htmlFor="">Quantity</label>
                        <input type="text" name="marketer" id="" value={orderModel?.order?.unit?.fullSingular} />
                    </div>
                </div>

                <h3>Purchase Details</h3>

                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Account Name</label>
                        <input type="text" name="payments[0][accountName]" id="" placeholder="Enter account name" value={orderModel?.order!.payments![0].accountName} />
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Account Number</label>
                        <input type="text" name="payments[0][accountNumber]" id="" placeholder="Enter account number"  value={orderModel?.order!.payments![0].accountNumber} />
                    </div>
                </div>

                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Name of Bank</label>
                        <input type="text" name="payments[0][bank]" id="" placeholder="Enter bank name"  value={orderModel?.order!.payments![0].bank} />
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Total Amount Paid (N)</label>
                        <input type="text" name="payments[0][amount][value]" id="" placeholder="Enter amount paid"  value={orderModel?.order!.payments![0].amount?.value} />
                    </div>
                </div>

                <h3>Transportation & Destination</h3>

                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Driver Name</label>
                        <input type="text" name="logistics[0][driverName]" id="" placeholder="Enter driver name" value={orderModel?.order!.logistics![0].driverName} />
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Truck Number</label>
                        <input type="text" name="logistics[0][truckNumber]" id="" placeholder="Enter truck no" value={orderModel?.order!.logistics![0].truckNumber} />
                    </div>
                </div>

                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Plant Name</label>
                        <input type="text" name="logistics[0][plantName]" id="" placeholder="Enter plant name" value={orderModel?.order!.logistics![0].plantName} />
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Plant Address</label>
                        <input type="text" name="logistics[0][plantAddress]" id="" placeholder="Enter plant address" value={orderModel?.order!.logistics![0].plantAddress} />
                    </div>
                </div>

                <div className="row-alt">
                    <div className="input-col">
                        <label htmlFor="">Quantity Transported </label>
                        <input type="text" name="logistics[0][quantity]" id="" placeholder="Enter quantity" value={orderModel?.order!.logistics![0].quantity} />
                    </div>
                </div>
            </PurchaseModal>}
        </PopupModal>
    )
}

export default OrderDetails