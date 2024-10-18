import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Remove_user from "./Remove_user";

const ContactList = () => {
  const [removeUser, setRemoveUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const contacts = useSelector((state) => state.HomePage.storeUserData);
  console.log(contacts);

  // Filter contacts based on search term
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.No.includes(searchTerm)
  );

  const removeUserData = (user) => {
    setRemoveUser(user);
    console.log(user);
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
            filteredContacts.map((contact, index) => (
              <div
                key={index}
                className="contact-item border-b p-2 flex justify-between"
              >
                <div className="data">
                  <h3 className="text-xl font-semibold font-sans">{contact.Name}</h3>
                  <p>Email: {contact.Email}</p>
                  <p>Phone: {contact.No}</p>
                </div>
                <div className="edits-btns flex flex-col h-full items-center relative">
                  <button className="h-[40px] w-[80px] bg-green-700 text-white border-[0px] border-black rounded-3xl mb-[05px] mx-auto hover:bg-green-900 font-sans font-semibold">
                    <FontAwesomeIcon
                      icon={faUserPen}
                      className="ml-4 text-[15px] text-white px-5 py-3 border-[0px] rounded-3xl h-[18px] w-[35px] absolute top-[-1px] right-[0px]"
                    />
                  </button>
                  <button
                    onClick={() => removeUserData(contact.Name)}
                    type="button"
                    className="h-[40px] w-[80px] bg-red-700 relative text-white border-[0px] border-black rounded-3xl mb-[05px] mx-auto hover:bg-red-900 font-sans font-semibold"
                  >
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="ml-4 text-[15px] text-white px-5 py-3 border-[0px] rounded-3xl h-[18px] w-[35px] absolute top-[-1px] right-[2px]"
                    />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h2 className="text-[25px] font-sans font-semibold ml-5 mt-[100px]">
              THERE ARE NO SAVED CONTACTS RIGHT NOW
              <button className="add-user w-[100%] h-[45px] bg-slate-700 text-white border-[0px] border-black rounded-3xl mb-[15px] mx-auto hover:bg-slate-950">
                <Link to="/details">
                  <h1 className="text-[20px] font-sans font-semibold">Add User</h1>
                </Link>
              </button>
            </h2>
          )}
        </div>
      </div>

      {removeUser && (
        <Remove_user contact={removeUserData} data={removeUser} onClose={closeRemoveUser} />
      )}
    </div>
  );
};

export default ContactList;
