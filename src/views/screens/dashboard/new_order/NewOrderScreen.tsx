import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import DashboardHeader from '../../../components/dashboardHeader/DashboardHeader'
import { Form, HeaderContainer, Wrapper } from './styles'
import { HiOutlineCloudUpload } from 'react-icons/hi'

const NewOrderScreen: React.FC = () => {

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

            <Form>
                <h4>Order Information</h4>
                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Order date</label>
                        <input type="date" name="" id="" />
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Company</label>
                        <input type="text" name="" id="" placeholder="Enter company" />
                    </div>
                </div>

                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Marketer Name</label>
                        <input type="text" name="" id="" placeholder="Enter marketer name" />
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Terminal</label>
                        <select name="" id="">
                            <option value="NAVGAS">NAVGAS</option>
                        </select>
                    </div>
                </div>


                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Product</label>
                        <select name="" id="">
                            <option value="LPG">LPG</option>
                        </select>
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Plant quantity</label>
                        <input type="number" name="" min={0} id="" />
                    </div>
                </div>


                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Price</label>
                        <input type="text" name="" id="" placeholder="Enter marketer name" />
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Plan date</label>
                        <input type="date" name="" id="" />
                    </div>
                </div>

                <div className="row-alt">
                    <div className="input-col">
                        <label htmlFor="">Quantity </label>
                        <select name="" id="">
                            <option value="MTA">MTA</option>
                        </select>
                    </div>
                </div>


                <h4>Purchase Details</h4>

                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Account Name</label>
                        <input type="text" name="" id="" placeholder="Enter account name" />
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Account Number</label>
                        <input type="text" name="" id="" placeholder="Enter account number" />
                    </div>
                </div>

                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Name of Bank</label>
                        <input type="text" name="" id="" placeholder="Enter bank name" />
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Total Amount Paid (N)</label>
                        <input type="text" name="" id="" placeholder="Enter amount paid" />
                    </div>
                </div>

                <h4>Transportation & Destination</h4>

                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Driver Name</label>
                        <select name="" id="">
                            <option value="none">--choose driver</option>
                        </select>
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Truck Number</label>
                        <select name="" id="">
                            <option value="none">--choose truck no</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-col">
                        <label htmlFor="">Plant Name</label>
                        <select name="" id="">
                            <option value="LPG">LPG</option>
                        </select>
                    </div>
                    <div className="input-col">
                        <label htmlFor="">Plant Address</label>
                        <select name="" id="">
                            <option value="none">--choose plant address</option>
                        </select>
                    </div>
                </div>

                <h4>Authority to Load/Nomination</h4>

                <div className="row-alt">
                    <div className="input-col">
                        <label htmlFor="">Upload file (.pdf format only)</label>
                        <div className="upload-area">
                            <HiOutlineCloudUpload />
                            <span>tap to upload document</span>
                        </div>
                    </div>
                </div>
                
                <div className="actions">
                    <button>Place Order</button>
                    <button>Cancel</button>
                </div>
            </Form>
        </Wrapper>
    )
}

export default NewOrderScreen