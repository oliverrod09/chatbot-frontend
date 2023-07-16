import {React, useState} from 'react'
import Footer from '../components/Footer'
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

function RegChat() {
    const valoresIniciales = {
        empresa: "",
        cantidad_clientes: "",
        ubicacion: ""
    }
    const [chatData, setChatData] = useState(valoresIniciales)
    const [redirect, setRedirect] = useState(false)


    const onchange = (e)=>{
        setChatData({...chatData, [e.target.name]:e.target.value})
    }

    const onsubmit = async(e)=>{
        e.preventDefault()
        console.log(sessionStorage.getItem("token"))
        try {
            const url = "http://localhost:3000/chatgpt/crear_chat"
            const config = { headers: {"Content-Type": "application/json",
                             'Authorization': 'Bearer ' + sessionStorage.getItem("token")   }}
            const response = await axios.post(url, chatData, config)
            if (response.status==200) {
                Swal.fire(
                    'Excelente!',
                    'Chat creado correctamente',
                    'success'
                  )
                  console.log(response.data)
                //   setRedirect(true)

            }else{
                Swal.fire(
                    'Disculpa',
                    'Algo ha salido mal',
                    'error'
                  )
            }
        } catch (error) {
            if (error.response.status == 400) {
                Swal.fire(
                    'Disculpa',
                    'Datos incorrectos',
                    'error'
                  )
            }else{
                Swal.fire(
                'Disculpa',
                'Algo ha salido mal',
                'error'
              ) 
              console.log(error.response)
            }
            
        }
    }

    if (redirect==true) {
        return <Navigate to={"/"}></Navigate>
    }



  return (
    <>
    <section className="w-full flex items-center justify-center py-10 bg-white bg-[url(/svg/bg1.svg)] bg-no-repeat bg-cover">
        <Card color="transparent" shadow={false} className="bg-white p-8 w-11/12 md:w-auto shadow-xl">
          <Typography variant="h4" color="blue-gray">
            Crear Chat
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Ingresa los datos para buscar posibles ISOS 
          </Typography>
          <form
            onSubmit={onsubmit}
            className="mt-8 mb-2 md:w-80 max-w-screen-lg w-full"
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                name='empresa' value={chatData.empresa} onChange={onchange} type="text"
                size="lg"
                label="De que es tu empresa?"
              />
              <Input
                name='cantidad_clientes' value={chatData.cantidad_clientes} onChange={onchange} type="number"
                size="lg"
                label="Que cantidad de clientes recibes por mes?"
              />
              <Input
                name='ubicacion' value={chatData.ubicacion} onChange={onchange} type="text"
                size="lg"
                label="En que país esta tu empresa?"
              />
            </div>
            
            <input className="cursor-pointer align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-6" type="submit" value="Crear" />
            
          </form>
        </Card>
      </section>
    {/* <section className="login-wrapper">
			<div className="container">
				<div className="col-md-6 col-sm-8 col-md-offset-3 col-sm-offset-2">
					<form onSubmit={onsubmit}>
						<img className="img-responsive" alt="logo" src="img/logo.png"/>
						<input name='empresa' value={chatData.empresa} onChange={onchange} type="text" className="form-control input-lg" placeholder="¿Qué hace tu empresa?"/>
						<input name='cantidad_clientes' value={chatData.cantidad_clientes} onChange={onchange} type="number" className="form-control input-lg" placeholder="Que cantidad de clientes recibe al mes?"/>
                        <input name='ubicacion' value={chatData.ubicacion} onChange={onchange} type="text" className="form-control input-lg" placeholder="¿En que país esta su empresa?"/>
						<button type="submit" className="btn btn-primary">Crear</button>
					</form>
				</div>
			</div>
		</section> */}
        <Footer></Footer>
    </>
  )
}

export default RegChat