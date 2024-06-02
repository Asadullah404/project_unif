import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const ProductDetail = () => {
    const context = useContext(myContext);
    const { loading, setLoading, getAllProduct, getAllProductFunction } = context;

    // navigate 
    const navigate = useNavigate();

    // Delete product 
    const deleteProduct = async (id) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'products', id))
            toast.success('Product Deleted successfully')
            getAllProductFunction();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <div className="bg-gray-900 text-white p-8">
            <div className="py-5 flex justify-between items-center">
                {/* text  */}
                <h1 className="text-xl text-pink-300 font-bold">All Product</h1>
                {/* Add Product Button  */}
                <Link to={'/addproduct'}>
                    <button className="px-5 py-2 bg-pink-50 border border-pink-100 rounded-lg">Add Product</button>
                </Link>
            </div>

            {/* Loading  */}
            {loading && <Loader className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}

            {/* table  */}
            <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse border-separate border-gray-800 text-left">
                    <tbody>
                        <tr className="bg-gray-800">
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">S.No.</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Image</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Title</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Price</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Category</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Date</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Action</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Action</th>
                        </tr>
                        {getAllProduct.map((item, index) => {
                            const { id, title, price, category, date, productImageUrl } = item;
                            return (
                                <tr key={index} className="bg-gray-700">
                                    <td className="h-12 px-6 text-md border-t border-l border-gray-800">{index + 1}</td>
                                    <td className="h-12 px-6 text-md border-t border-l border-gray-800"><img className="w-20" src={productImageUrl} alt="" /></td>
                                    <td className="h-12 px-6 text-md border-t border-l border-gray-800">{title}</td>
                                    <td className="h-12 px-6 text-md border-t border-l border-gray-800">₹{price}</td>
                                    <td className="h-12 px-6 text-md border-t border-l border-gray-800">{category}</td>
                                    <td className="h-12 px-6 text-md border-t border-l border-gray-800">{date}</td>
                                    <td onClick={() => navigate(`/updateproduct/${id}`)} className="h-12 px-6 text-md border-t border-l border-gray-800 text-green-500 cursor-pointer">Edit</td>
                                    <td onClick={() => deleteProduct(id)} className="h-12 px-6 text-md border-t border-l border-gray-800 text-red-500 cursor-pointer">Delete</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductDetail;
