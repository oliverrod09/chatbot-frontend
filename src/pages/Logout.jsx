import {React, useState} from 'react'
import { Navigate } from "react-router-dom";
import Footer from '../components/Footer'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

function Logout({isLogout}) {
  const [redirect, setRedirect] = useState(false);



  function cerrar() {
    sessionStorage.clear()
    isLogout()
    setRedirect(true);
  } 

  if (redirect == true) {
    return <Navigate to={"/"}></Navigate>;
  }
  return (
    <>
    <div className='screen90 dark:bg-blue-gray-800'>
      <div className='w-full h-full flex justify-center items-center'>
      <Card className="mt-6 w-96">
        <CardBody>
          <RocketLaunchIcon className="text-blue-800 w-12 h-12 mb-4" />
          <Typography variant="h5" color="blue-gray" className="mb-2">
            CERRAR SESION
          </Typography>
          <Typography>
            Estas seguro que deseas cerrar la sesion?
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-end">
        <Button color="red" onClick={cerrar}>Cerrar</Button>
        </CardFooter>
      </Card>
      </div>
      
    </div>
    <Footer></Footer>
    </>

  )
}

export default Logout