import { React, useState } from "react";
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

function Login({isLogin}) {
  const valoresIniciales = {
    user: "",
    password: "",
  };
  const [user, setUser] = useState(valoresIniciales);
  const [redirect, setRedirect] = useState(false);

  const onchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/user/login";
      const config = { headers: { "Content-Type": "application/json" } };
      const response = await axios.post(url, user, config);
      if (response.status == 200) {
        Swal.fire("Excelente!", "Has ingresado correctamente", "success");
        console.log(response.data.token);
        sessionStorage.setItem("token", response.data.token);
        isLogin(true)
        setRedirect(true)

      } else {
        Swal.fire("Disculpa", "Algo ha salido mal", "error");
      }
    } catch (error) {
      if (error.response.status == 400) {
        Swal.fire("Disculpa", "Datos incorrectos", "error");
      } else {
        Swal.fire("Disculpa", "Algo ha salido mal", "error");
      }
    }
  };

  if (redirect == true) {
    return <Navigate to={"/"}></Navigate>;
  }

  return (
    <>
      <section className="w-full flex items-center justify-center py-10 bg-white dark:bg-blue-gray-800 bg-[url(/svg/bg1.svg)] bg-no-repeat bg-cover">
        <Card
          color="transparent"
          shadow={false}
          className="bg-white p-8 w-11/12 md:w-auto shadow-xl dark:bg-blue-gray-700"
        >
          <Typography variant="h4" className="text-blue-gray-900 dark:text-white">
            Login
          </Typography>
          <Typography className="mt-1 font-normal text-blue-gray-900 dark:text-white ">
            Ingresa tus datos
          </Typography>
          <form
            onSubmit={onsubmit}
            className="mt-8 mb-2 md:w-80 max-w-screen-lg w-full"
          >
            <div className="mb-4 flex flex-col gap-6 ">
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
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
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
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
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

            <input
              className="cursor-pointer align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-6"
              type="submit"
              value="Entrar"
            />
            <Typography className="mt-4 text-center font-normal text-gray-900 dark:text-white">
              No tienes cuenta?{" "}
              <Link
                to={"/register"}
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              >
                Registrate
              </Link>
            </Typography>
          </form>
        </Card>
      </section>
      {/* <section className="login-wrapper">
			<div className="container">
				<div className="col-md-6 col-sm-8 col-md-offset-3 col-sm-offset-2">
					<form onSubmit={onsubmit}>
						<img className="img-responsive" alt="logo" src="img/logo.png"/>
						<input name='user' value={user.user} onChange={onchange} type="text" className="form-control input-lg" placeholder="User Name"/>
						<input name='password' value={user.password} onChange={onchange} type="password" className="form-control input-lg" placeholder="Password"/>
						<button type="submit" className="btn btn-primary">Login</button>
						<p>Have't Any Account <Link to="/register">Create An Account</Link></p>
					</form>
				</div>
			</div>
		</section> */}
      <Footer></Footer>
    </>
  );
}

export default Login;
