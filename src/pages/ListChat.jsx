import { React, useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-tailwind/react";

import {
  List,
  ListItem,
  ListItemSuffix,
  Card,
  IconButton,
  Select,
  Option,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";

import {
  Drawer,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

function ListChat() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [list, setList] = useState([]);
  const [message, setMessage] = useState([]);
  const [idChat, setIdChat] = useState(null);
  const [normas, setNormas] = useState([]);



  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  //formulario reg
  const valoresIniciales = {
    prompt: "",
    id_chat: "",
    iso: "",
  };
  const [chatData, setChatData] = useState(valoresIniciales);

  const onchange = (e) => {
    setChatData({ ...chatData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    console.log(sessionStorage.getItem("token"));
    try {
      const url = "http://localhost:3000/chatgpt/";
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      };
      const response = await axios.post(url, chatData, config);
      if (response.status == 200) {
        getChats(selectedChat._id);
        setMessage([...message, response.data]);
        console.log(response.data + "AQUI ESTA LA RESPUESTA");
        //   setRedirect(true)
      } else {
        console.log(response.status);
      }
    } catch (error) {
      if (error.response.status == 400) {
        console.log(error);
      } else {
        console.log(error.response);
      }
    }
  };

  //acaba formulario reg

  useEffect(() => {
    console.log(chatData);
  }, [chatData]);

  useEffect(() => {
    getChats();
  }, []);

  const getChats = async () => {
    try {
      const url = "http://localhost:3000/chatgpt/list_chats";
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      };
      const response = await axios.get(url, config);
      console.log(response.status);
      if (response.status == 200) {
        console.log(response);
        setList(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMessage = async (id) => {
    try {
      const url = `http://localhost:3000/chatgpt/chat/${id}`;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      };
      const response = await axios.get(url, config);
      console.log(response.status);
      if (response.status == 200) {
        console.log(response);
        setMessage(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChatClick = async (item) => {
    const chatId = item._id;
    getMessage(chatId);
    setIdChat(chatId);
    await setSelectedChat(item);
    await setChatData({ ...chatData, ["id_chat"]: chatId });
    const obj = JSON.parse(item.response);
    setNormas(obj.normasISO);
  };

  return (
    <>
      <section className="w-full flex">
        <Card className="hidden lg:block overflow-hidden lg:overflow-y-scroll lg:w-1/5">
          <List>
            {list.map((item, key) => (
              <ListItem
                ripple={false}
                className="py-1 pr-1 pl-4"
                key={key}
                onClick={() => handleChatClick(item)}
              >
                {item.empresa}
                <ListItemSuffix>
                  <IconButton variant="text" color="blue-gray">
                    <TrashIcon className="h-5 w-5" />
                  </IconButton>
                </ListItemSuffix>
              </ListItem>
            ))}
          </List>
        </Card>
        <div className="w-full lg:w-4/5 screen90">
          {/* <!-- Component Start --> */}
          <div className="flex w-full h-full bg-white">
            <div className="flex flex-col flex-grow h-full p-4 overflow-auto relative">


              <Button onClick={openDrawer} className="lg:hidden w-max">Chats</Button>
              <Drawer open={open} onClose={closeDrawer} className="p-4">
                <div className="mb-6 flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    Material Tailwind
                  </Typography>
                  <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={closeDrawer}
                  >
                    <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                  </IconButton>
                </div>
                <List>
            {list.map((item, key) => (
              <ListItem
                ripple={false}
                className="py-1 pr-1 pl-4"
                key={key}
                onClick={() => {handleChatClick(item);
                closeDrawer();}}
              >
                {item.empresa}
                <ListItemSuffix>
                  <IconButton variant="text" color="blue-gray">
                    <TrashIcon className="h-5 w-5" />
                  </IconButton>
                </ListItemSuffix>
              </ListItem>
            ))}
          </List>
              </Drawer>


              {selectedChat ? (
                <>
                  {/* <h2 className="relative top-0 left-0">Chat {selectedChat.empresa}</h2> */}

                  <select
                    name="iso"
                    value={chatData.iso}
                    onChange={onchange}
                    className=" border-2 my-4 py-2 px-4 rounded-md"
                  >
                    <option className="">Escoge una ISO</option>
                    {normas.map((item, key) => (
                      <option key={key} value={item.iso}>
                        {item.iso}
                      </option>
                    ))}
                  </select>
                  <div className="d-flex flex-column mb-3 containerMessages h-full overflow-y-scroll py-9">
                    {message.map((item, key) => (
                      <div
                        className="flex w-full mt-2 space-x-3 max-w-xl ml-auto justify-end"
                        key={key}
                      >
                        <div>
                          <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                            <p
                              className="text-sm"
                              style={{ whiteSpace: "pre-line" }}
                            >
                              {item.response}
                            </p>
                          </div>
                          <span className="text-xs text-gray-500 leading-none">
                            2 min ago
                          </span>
                        </div>
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                      </div>
                    ))}
                  </div>
                  <form
                    className="bg-gray-300 p-4 flex gap-2 items-center bottom-4 relative"
                    onSubmit={onsubmit}
                  >
                    <input
                      className="flex items-center h-10 w-full rounded px-3 text-sm"
                      onChange={onchange}
                      type="text"
                      name="prompt"
                      placeholder="Type your message…"
                    />

                    <input
                      type="submit"
                      value={"enviar"}
                      className="cursor-pointer align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-max"
                    />
                  </form>
                </>
              ) : (
                <div className="flex items-center justify-center text-center h-full w-full">
                  <p className="font-bold underline text-red-400 text-xl">
                    Seleccione un chat
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* <!-- Component End  --> */}
        </div>
      </section>
      {/* <div className="">
        <div className="mainListChat row">
          <div className=" col-md-4 listchats">
            <h2>Lista de Chats</h2>
            <div className="list-group">
              {list.map((item, key) => (
                <button
                  key={key}
                  className={`list-group-item list-group-item-action ${
                    selectedChat === key ? "active" : ""
                  }`}
                  onClick={() => handleChatClick(item)}
                >
                  {item.empresa}
                </button>
              ))}
            </div>
          </div>
          <div className="listMessage col-md-8 position-relative">
            <div className="chat-details h-100">
              {selectedChat ? (
                <>
                  <h2>Chat {selectedChat.empresa}</h2>
                  <select
                    name="iso"
                    value={chatData.iso}
                    onChange={onchange}
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="escoge una iso" selected>
                      Escoge una ISO
                    </option>
                    {normas.map((item, key) => (
                      <option key={key} value={item.iso} selected>
                        {item.iso}
                      </option>
                    ))}
                  </select>
                  <div class="d-flex flex-column mb-3 containerMessages">
                    {message.map((item, key) => (
                      <div class="p-2 message" key={key}>
                        {item.response}
                      </div>
                    ))}
                  </div>
                  <form className="formChat" onSubmit={onsubmit}>
                    <input
                      className="col-10"
                      onChange={onchange}
                      type="text"
                      name="prompt"
                      id=""
                    />
                    <input type="submit" value="Enviar" />
                  </form>
                </>
              ) : (
                <div className="seleccionarchat d-flex align-items-center justify-content-center">
                  <p className="font-bold underline text-red-400 text-9xl">
                    Seleccione un chat
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div> */}
      <Footer></Footer>
    </>
  );
}

export default ListChat;
