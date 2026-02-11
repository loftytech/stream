import React from "react"
import PopupModal from "../popupModal/PopupModal"
import { PurchaseModal } from "./styles"
import Loader from "../Loader/Loader"
import dayjs from "dayjs"
import { PurcchaseDetails } from "./types"

const OrderDetails: React.FC<{isLoading: boolean, showModal: boolean, closeModal: () => void, order: PurcchaseDetails}> = ({isLoading = false, showModal = false, closeModal= () => {}, order}) => {


    return (
        <PopupModal $showPopup={showModal} maxWidth="720px" closeModal={closeModal}>
            {isLoading ? <Loader styleTwo center /> : <PurchaseModal>
                <div className="header">
                    <div className="col">
                        <h2>Purchase Details</h2>
                        <h6>Here is a preview of purchase summary</h6>
                    </div>

                    <img src="/assets/svg/close.-icon.svg" alt="" onClick={() => closeModal()} />
                </div>


                <h3>Authority to Load/Nomination</h3>
                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Document Link</label>
                        <div className="attachment">
                            <a href={order?.files![0]?.url ?? ""} target="_blank">{order?.files![0]?.url ?? ""}</a>
                            <img src="/assets/svg/copy-icon.svg" alt="" />
                        </div>
                    </div>
                </div>
            
                <h3>Order Information</h3>
                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Order date</label>
                        <input disabled type="text" name="marketer" id="" value={dayjs(order?.orderDate!).format("DD, MMM YYYY")} />
                    </div>

                </div>
                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Marketer Name</label>
                        <input disabled type="text" name="marketer" id="" value={order?.marketer} />
                    </div>

                    <div className="input-col">
                        <label htmlFor="">Terminal</label>
                        <input disabled type="text" name="orderDate" id="" value={order?.marketer} />
                    </div>
                </div>
                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Product</label>
                        <input disabled type="text" name="marketer" id="" value={order?.marketer} />
                    </div>

                    <div className="input-col">
                        <label htmlFor="">Plant quantity</label>
                        <input disabled type="text" name="orderDate" id="" value={order?.quantity} />
                    </div>
                </div>
                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Price</label>
                        <input disabled type="text" name="marketer" id="" value={order?.price} />
                    </div>

                    <div className="input-col">
                        <label htmlFor="">Plan date</label>
                        <input disabled type="text" name="orderDate" id="" value={dayjs(order?.loadingDate!).format("DD, MMM YYYY")} />
                    </div>
                </div>
                <div className="row-alt">
                    <div className="input-col">
                        <label htmlFor="">Quantity</label>
                        <input disabled type="text" name="marketer" id="" value={order?.unit?.fullSingular} />
                    </div>
                </div>

                <h3>Purchase Details</h3>

                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Account Name</label>
                        <input disabled type="text" name="payments[0][accountName]" id="" placeholder="Enter account name" value={order?.payments![0].accountName} />
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Account Number</label>
                        <input disabled type="text" name="payments[0][accountNumber]" id="" placeholder="Enter account number"  value={order?.payments![0].accountNumber} />
                    </div>
                </div>

                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Name of Bank</label>
                        <input disabled type="text" name="payments[0][bank]" id="" placeholder="Enter bank name"  value={order?.payments![0].bank} />
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Total Amount Paid (N)</label>
                        <input disabled type="text" name="payments[0][amount][value]" id="" placeholder="Enter amount paid"  value={order?.payments![0].amount?.value} />
                    </div>
                </div>

                <h3>Transportation & Destination</h3>

                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Driver Name</label>
                        <input disabled type="text" name="logistics[0][driverName]" id="" placeholder="Enter driver name" value={order?.logistics![0].driverName} />
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Truck Number</label>
                        <input disabled type="text" name="logistics[0][truckNumber]" id="" placeholder="Enter truck no" value={order?.logistics![0].truckNumber} />
                    </div>
                </div>

                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Plant Name</label>
                        <input disabled type="text" name="logistics[0][plantName]" id="" placeholder="Enter plant name" value={order?.logistics![0].plantName} />
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Plant Address</label>
                        <input disabled type="text" name="logistics[0][plantAddress]" id="" placeholder="Enter plant address" value={order?.logistics![0].plantAddress} />
                    </div>
                </div>

                <div className="row-alt">
                    <div className="input-col">
                        <label htmlFor="">Quantity Transported </label>
                        <input disabled type="text" name="logistics[0][quantity]" id="" placeholder="Enter quantity" value={order?.logistics![0].quantity} />
                    </div>
                </div>
            </PurchaseModal>}
        </PopupModal>
    )
}

export default OrderDetails