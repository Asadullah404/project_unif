import { useContext } from "react";
import myContext from "../../context/myContext";

const UserDetail = () => {
    const context = useContext(myContext);
    const { getAllUser } = context;

    return (
        <div className="bg-gray-900 text-white">
            <div className="py-5 flex justify-between items-center">
                {/* text  */}
                <h1 className="text-xl text-pink-300 font-bold">All User</h1>
            </div>

            {/* table  */}
            <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse border-separate border-gray-800 text-left">
                    <tbody>
                        <tr className="bg-gray-800">
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">S.No.</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Name</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Email</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Uid</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Role</th>
                            <th className="h-12 px-6 text-md border-l border-pink-100 font-bold">Date</th>
                        </tr>
                        {getAllUser.map((value, index) => (
                            <tr key={index} className="bg-gray-700">
                                <td className="h-12 px-6 text-md border-t border-l border-gray-800">{index + 1}</td>
                                <td className="h-12 px-6 text-md border-t border-l border-gray-800">{value.name}</td>
                                <td className="h-12 px-6 text-md border-t border-l border-gray-800 cursor-pointer">{value.email}</td>
                                <td className="h-12 px-6 text-md border-t border-l border-gray-800 cursor-pointer">{value.uid}</td>
                                <td className="h-12 px-6 text-md border-t border-l border-gray-800 cursor-pointer">{value.role}</td>
                                <td className="h-12 px-6 text-md border-t border-l border-gray-800 cursor-pointer">{value.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserDetail;
