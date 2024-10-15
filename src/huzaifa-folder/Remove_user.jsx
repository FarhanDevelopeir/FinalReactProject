import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "./features/HomeSlice";

const Remove_user = ({ contact, onClose,  }) => {
    const dispatch = useDispatch();
    console.log(contact);
    

    const handleRemove = () => {
        dispatch(removeUser(contact));
        onClose(); 
    };

    return (
        <div className="absolute top-[50px] right-[100px] w-[400px] h-[130px] box-border p-[20px] bg-slate-500  border border-black rounded-lg">
            <h2 className="font-sans font-semibold text-[22px] pb-[22px]">Are you sure you want to remove {contact.Name}?</h2>
            <div className="btns flex justify-around">
            <button onClick={handleRemove} className="bg-red-700 border-[1px] font-semibold hover:bg-red-900 text-white border-black rounded-lg w-[80px] h-[40px]">Yes</button>
            <button onClick={onClose} className="bg-green-700 border-[1px] font-semibold hover:bg-green-900 text-white border-black rounded-lg w-[80px] h-[40px]">No</button>
            </div>
        </div>
    );
};

export default Remove_user;