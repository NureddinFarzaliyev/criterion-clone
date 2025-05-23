import { useEffect } from 'react'
import { fetchOrdersData } from '../../../../features/dashboard/dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { LuRefreshCcw } from "react-icons/lu";
import { TH, TD, TR } from '../../../ui/Table'

const Orders = () => {
    const dispatch = useDispatch()
    const ordersData = useSelector(state => state.dashboard.ordersData)

    useEffect(() => {
        if (ordersData.length === 0) {
            dispatch(fetchOrdersData())
        }
    }, [])

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full font-display">
                <thead className='relative'>
                    <button className='text-white absolute top-[50%] translate-y-[-50%] right-0  rounded-sm  shadow-lg cursor-pointer p-3 font-display uppercase text-lg mb-3 opacity-70 transition duration-500' onClick={() => { dispatch(fetchOrdersData()) }}><LuRefreshCcw /></button>
                    <tr>
                        <TH>Order ID</TH>
                        <TH>Date & Time</TH>
                        <TH>Payment Method</TH>
                        <TH>Payment ID</TH>
                        <TH>Shipping Address</TH>
                        <TH>Price</TH>
                        <TH>Products</TH>
                    </tr>
                </thead>
                <tbody>
                    {ordersData.map((order, index) => (
                        <TR key={index}>
                            <TD>{order.id}</TD>
                            <TD>{order.created_at.split('T')[0]} | {order.created_at.split('T')[1].split('.')[0]}</TD>
                            <TD>{order.payment_method}</TD>
                            <TD>{order.payment_id}</TD>
                            <TD>{order.shipping_address}</TD>
                            <TD>${order.price}</TD>
                            <TD>
                                {order.products.map((product, index) => <a key={index} className='underline mr-1 text-xs' href={`/shop/${product.split('/')[0]}`} target='_blank'>{product}</a>)}
                            </TD>
                        </TR>
                    )).reverse()}
                </tbody>
            </table>
        </div>
    )
}

export default Orders

