import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import DashboardHeader from '../../../../components/dashboardHeader/DashboardHeader'
import { Form, HeaderContainer, Wrapper } from './styles'
import { HiOutlineCloudUpload } from 'react-icons/hi'
import useOrderModel from '../useOrderModel'
import Loader from '../../../../components/Loader/Loader'
import { useEffect, useRef } from 'react'

const NewOrderScreen: React.FC = () => {
    const orderModel = useOrderModel()
    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        orderModel.fetchTerminals()
        orderModel.fetchProducts()
        orderModel.fetchUnits()
    }, [])

    return (
        <Wrapper>
            <DashboardHeader>
                
            </DashboardHeader>


            <HeaderContainer>
                <MdOutlineKeyboardArrowLeft />
                <div className="col">
                    <h2>Create a New Order</h2>
                    <span>Please fill in the following information to place an order</span>
                </div>
            </HeaderContainer>

            <Form ref={formRef}>
                <h4>Order Information</h4>
                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Marketer Name</label>
                        <input type="text" name="marketer" id="" placeholder="Enter marketer name" />
                    </div>

                    <div className="input-col">
                        <label htmlFor="">Order date</label>
                        <input type="date" name="orderDate" id="" />
                    </div>
                </div>

                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Terminal</label>
                        {orderModel.isFetchingTerminals ? <Loader /> : <select name="terminal" id="">
                            {orderModel.terminals.map((item, idx) => {[]
                                return <option key={idx} value={item.id}>{item.name}</option>
                            })}
                        </select>}
                    </div>


                    <div className="input-col">
                        <label htmlFor="">Unit </label>
                        {orderModel.isFetchingUnits ? <Loader /> : <select name="unit" id="">
                            {orderModel.units.map((item, idx) => {[]
                                return <option key={idx} value={item.id}>{item.name}</option>
                            })}
                        </select>}
                    </div>
                </div>


                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Product</label>
                        {orderModel.isFetchingProducts ? <Loader /> : <select name="product" id="">
                            {orderModel.products.map((item, idx) => {[]
                                return <option key={idx} value={item.id}>{item.name}</option>
                            })}
                        </select>}
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Plant quantity</label>
                        <input type="number" name="quantity" min={0} id="" />
                    </div>
                </div>


                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Price</label>
                        <input type="text" name="" id="rate[value]" placeholder="Enter price" />
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Plan date</label>
                        <input type="datetime-local" name="logistics[0][loadingDate]"  id="" />
                    </div>
                </div>

                <h4>Purchase Details</h4>

                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Account Name</label>
                        <input type="text" name="payments[0][accountName]" id="" placeholder="Enter account name" />
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Account Number</label>
                        <input type="text" name="payments[0][accountNumber]" id="" placeholder="Enter account number" />
                    </div>
                </div>

                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Name of Bank</label>
                        <input type="text" name="payments[0][bank]" id="" placeholder="Enter bank name" />
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Total Amount Paid (N)</label>
                        <input type="text" name="payments[0][amount][value]" id="" placeholder="Enter amount paid" />
                    </div>
                </div>

                <h4>Transportation & Destination</h4>

                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Driver Name</label>
                        <input type="text" name="logistics[0][driverName]" id="" placeholder="Enter driver name" />
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Truck Number</label>
                        <input type="text" name="logistics[0][truckNumber]" id="" placeholder="Enter truck no" />
                    </div>
                </div>

                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Plant Name</label>
                        <input type="text" name="logistics[0][plantName]" id="" placeholder="Enter plant name" />
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Plant Address</label>
                        <input type="text" name="logistics[0][plantAddress]" id="" placeholder="Enter plant address" />
                    </div>
                </div>

                <div className="row-alt">
                    <div className="input-col">
                        <label htmlFor="">Quantity Transported </label>
                        <input type="text" name="logistics[0][quantity]" id="" placeholder="Enter quantity" />
                    </div>
                </div>

                <h4>Authority to Load/Nomination</h4>

                <div className="row-alt">
                    <div className="input-col">
                        <label htmlFor="">Upload file (.pdf format only)</label>
                        <label htmlFor="attachment" className="upload-area">
                            {orderModel.attacchments.length ? 
                                <ul className="attachments">
                                    {orderModel.attacchments.map((item, idx) => {
                                        return <li key={idx}>{item}</li>
                                    })}
                                </ul>
                            : 
                            
                            <>
                                <HiOutlineCloudUpload />
                                <span>tap to upload document</span>
                            </>}
                            <input hidden type="file" multiple name="nomination[]" id="attachment" onChange={orderModel.handleFileInout} />
                        </label>
                    </div>
                </div>
                
                <div className="actions">
                    <button onClick={(e) => {e.preventDefault(); orderModel.newOrder(formRef.current!) }}>{orderModel.isPlacingOrder ? <Loader /> : "Place Order"}</button>
                    <button>Cancel</button>
                </div>
            </Form>
        </Wrapper>
    )
}

export default NewOrderScreen