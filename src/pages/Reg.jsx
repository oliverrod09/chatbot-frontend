import { useState } from "react";
import Footer from "../components/Footer";
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

function Reg() {
  const valoresIniciales = {
    user: "",
    password: "",
    name: "",
  };
  const [user, setUser] = useState(valoresIniciales);
  const [redirect, setRedirect] = useState(false);

  const onchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/user";
      const config = { headers: { "Content-Type": "application/json" } };
      const response = await axios.post(url, user, config);
      if (response.status == 200) {
        Swal.fire("Excelente!", "Se ha registrado correctamente", "success");
        setRedirect(true);
      } else {
        console.log("error al insertar");
      }
    } catch (error) {
      Swal.fire("Disculpa", "Algo ha salido mal", "error");
    }
  };

  if (redirect == true) {
    return <Navigate to={"/"}></Navigate>;
  }

  return (
    <>
      <section className="w-full flex items-center justify-center py-10 dark:bg-blue-gray-800 bg-white bg-[url(/svg/bg1.svg)] bg-no-repeat bg-cover">
        <Card
          color="transparent"
          shadow={false}
          className="bg-white p-8 w-11/12 md:w-auto shadow-xl dark:bg-blue-gray-700"
        >
          <Typography variant="h4" className="text-blue-gray-900 dark:text-white">
            Registrarse
          </Typography>
          <Typography className="mt-1 font-normal text-gray-900 dark:text-white">
            Ingresa tus datos
          </Typography>
          <form
            onSubmit={onsubmit}
            className="mt-8 mb-2 md:w-80 max-w-screen-lg w-full"
          >
            <div className="mb-4 flex flex-col gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  name="name"
                  value={user.name}
                  onChange={onchange}
                  type="text"
                  placeholder="Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                />
              </div>
              {/* <Input
                name="name"
                value={user.name}
                onChange={onchange}
                type="text"
                size="lg"
                label="Name"
              /> */}
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Username
                </label>
                <input
                  name="user"
                  value={user.user}
                  onChange={onchange}
                  type="text"
                  placeholder="Username"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                />
              </div>
              {/* <Input
                name="user"
                value={user.user}
                onChange={onchange}
                type="text"
                size="lg"
                label="Username"
              /> */}
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Password
                </label>
                <input
                  name="password"
                  value={user.password}
                  onChange={onchange}
                  type="password"
                  placeholder="Password"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
                />
              </div>
              {/* <Input
                name="password"
                value={user.password}
                onChange={onchange}
                type="password"
                size="lg"
                label="Password"
              /> */}
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal dark:text-white"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-blue-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <input
              className="cursor-pointer align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-6"
              type="submit"
              value="Registrar"
            />
            <Typography color="gray" className="mt-4 text-center font-normal dark:text-white">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              >
                Sign In
              </a>
            </Typography>
          </form>
        </Card>
      </section>

      {/* <section className="login-wrapper">
			<div className="container">
				<div className="col-md-6 col-sm-8 col-md-offset-3 col-sm-offset-2">
					<form onSubmit={onsubmit}>
						<img className="img-responsive" alt="logo" src="img/logo.png"/>
                        <input name='name' value={user.name} onChange={onchange} type="text" className="form-control input-lg" placeholder="Name"/>
						<input name='user' value={user.user} onChange={onchange} type="text" className="form-control input-lg" placeholder="User Name"/>
						<input name='password' value={user.password} onChange={onchange} type="password" className="form-control input-lg" placeholder="Password"/>
						<button type="submit" className="btn btn-primary">Register</button>
						<p>already have an account? <Link to="/login">Login</Link></p>
					</form>
				</div>
			</div>
		</section> */}
      <Footer></Footer>
    </>
  );
}

export default Reg;
