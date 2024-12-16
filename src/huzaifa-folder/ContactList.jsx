import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import Remove_user from "./Remove_user";
import InputData from "./InputData";

const ContactList = () => {
  const [updateUser, setUpdateUser] = useState(null);
  const [removeUser, setRemoveUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const contacts = useSelector((state) => state.HomePage.storeUserData);
  const dispatch = useDispatch();

  // Filter contacts based on search term
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.No.includes(searchTerm)
  );

  // Update user data
  const updateUserData = (user) => {
    setUpdateUser(user);
  };

  // Remove user data
  const removeUserData = (user) => {
    setRemoveUser(user);
  };

  const closeRemoveUser = () => {
    setRemoveUser(null);
  };

  return (
    <div>
      <div className="full-box py-3 px-[50px] mx-auto w-[50%] border-[3px] bg-slate-50 rounded-2xl border-black min-h-[75vh] my-[30px]">
        <div className="first-section flex justify-around gap-3 relative">
          <div className="my-4 searchbar relative">
            <input
              type="search"
              placeholder="Search Contact"
              className="border-[2px] w-[450px] h-[50px] p-3 rounded-3xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>
              <FontAwesomeIcon
                icon={faSearch}
                className="ml-4 text-[15px] text-white bg-slate-700 px-5 py-3 hover:bg-slate-950 border-[0px] rounded-3xl h-[18px] w-[35px] absolute top-[4px] right-[4px]"
              />
            </button>
          </div>
          <button className="add-user w-[20%] h-[45px] bg-slate-700 text-white border-[0px] border-black rounded-3xl my-[16px] mx-auto hover:bg-slate-950">
            <Link to="/details">
              <h1 className="text-[20px] font-sans font-semibold">Add User</h1>
            </Link>
          </button>
        </div>

        <div className="all-contacts">
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <div key={contact.id} className="contact-item border-b p-2 flex justify-between">
                <div className="data">
                  <h3 className="text-xl font-semibold font-sans">{contact.Name}</h3>
                  <p>Email: {contact.Email}</p>
                  <p>Phone: {contact.No}</p>
                </div>
                <div className="edits-btns flex flex-col h-full items-center relative">
                  <button
                    onClick={() => updateUserData(contact)}
                    type="button"
                    className="h-[40px] w-[80px] bg-green-700 text-white border-[0px] border-black rounded-3xl mb-[05px] mx-auto hover:bg-green-900 font-sans font-semibold"
                  >
                    <Link to="/details">
                      <FontAwesomeIcon
                        icon={faUserPen}
                        className="ml-4 text-[15px] text-white px-5 py-3 border-[0px] rounded-3xl h-[18px] w-[35px] absolute top-[-1px] right-[0px]"
                      />
                    </Link>
                  </button>
                  <button
                    onClick={() => removeUserData(contact)}
                    type="button"
                    className="h-[40px] w-[80px] bg-red-700 text-white border-[0px] border-black rounded-3xl mb-[05px] mx-auto hover:bg-red-900 font-sans font-semibold"
                  >
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="ml-4 text-[15px] text-white px-5 py-3 border-[0px] rounded-3xl h-[18px] w-[35px] absolute top-[43px] right-[2px]"
                    />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-contacts flex flex-col items-center mt-10">
              <h2 className="text-[25px] font-semibold">No contacts available</h2>
              <Link to="/details">
                <button className="mt-5 bg-slate-700 text-white px-5 py-2 rounded hover:bg-slate-950">
                  Add User
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {updateUser && <InputData data={updateUser} />}
      {removeUser && <Remove_user contact={removeUser} onClose={closeRemoveUser} />}
    </div>
  );
};

export default ContactList;
