import { useContext } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
    const context = useContext(myContext);
    const { getAllOrder, orderDelete } = context;

    return (
        <div className="bg-gray-900 text-white">
            <div className="py-5">
                {/* text  */}
                <h1 className="text-xl text-pink-300 font-bold">All Order</h1>
            </div>

            {/* table  */}
            <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse border-separate border-gray-800 text-left">
                    <tbody>
                        <tr className="bg-gray-800">
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">S.No.</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Order Id</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Image</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Title</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Category</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Price</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Quantity</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Total Price</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Status</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Name</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Address</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Pincode</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Phone Number</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Email</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Date</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Action</th>
                        </tr>
                        {getAllOrder.map((order, orderIndex) => (
                            order.cartItems.map((item, itemIndex) => {
                                const { id, productImageUrl, title, category, price, quantity } = item;
                                const totalPrice = price * quantity;
                                return (
                                    <tr key={orderIndex + '-' + itemIndex} className="bg-gray-700">
                                        <td className="h-12 px-6 text-md border-t border-l border-gray-800">{orderIndex + 1}</td>
                                        <td className="h-12 px-6 text-md border-t border-l border-gray-800">{id}</td>
                                        <td className="h-12 px-6 text-md border-t border-l border-gray-800"><img src={productImageUrl} alt="img" /></td>
                                        <td className="h-12 px-6 text-md border-t border-l border-gray-800">{title}</td>
                                        <td className="h-12 px-6 text-md border-t border-l border-gray-800">{category}</td>
                                        <td className="h-12 px-6 text-md border-t border-l border-gray-800">₹{price}</td>
                                        <td className="h-12 px-6 text-md border-t border-l border-gray-800">{quantity}</td>
                                        <td className="h-12 px-6 text-md border-t border-l border-gray-800">RS{totalPrice}</td>
                                        <td className="h-12 px-6 text-md border-t border-l border-gray-800 text-green-500">{order.status}</td>
                                        <td className="h-12 px-6 text-md border-t border-l border-gray-800">{order.addressInfo.name}</td>
                                        <td className="h-12 px-6 text-md border-t border-l border-gray-800">{order.addressInfo.address}</td>
                                        <td className="h-12 px-6 text-md border-t border-l border-gray-800">{order.addressInfo.pincode}</td>
                                        <td className="h-12 px-6 text-md border-t border-l border-gray-800">{order.addressInfo.mobileNumber}</td>
                                        <td className="h-12 px-6 text-md border-t border-l border-gray-800">{order.email}</td>
                                        <td className="h-12 px-6 text-md border-t border-l border-gray-800">{order.date}</td>
                                        <td onClick={() => orderDelete(order.id)} className="h-12 px-6 text-md border-t border-l border-gray-800 text-red-500 cursor-pointer">Delete</td>
                                    </tr>
                                )
                            })
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrderDetail;
