import { Link } from "react-router"
import image from "../assets/login.jpg"
import Button from "../components/Button"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { useState } from "react";
import { login } from "../features/authSlice";
import { useDispatch } from "react-redux";

const LoginPage = () => {

    const [user, setUser] = useState({
      email: "",
      password: ""
    })
  
    const handleChange = (e) => {
      const {name,value} = e.target
      setUser((u) => {
        return { ...u, [name]: value}
      })
    }

    const dispatch = useDispatch()


  const handleLogin = (e)=> {
    e.preventDefault()
    dispatch(login(user))

    setUser({
      email: "", password: ""
    })

    alert("Login successfully")
   
  }

  return (
    <section>
      <div className="grid grid-cols-[5fr_4fr]">
        <div className="">
          <img src={image} alt="image" />
        </div>
        <div className="py-31 px-33 bg-white">
          <div>
            <h2 className="text-[34px] font-medium">Log in to Exclusive</h2>
            <p className="pt-6 pb-12">Enter your details below</p>
            <form className="space-y-10">
              <input onChange={(e) => handleChange(e)} name="email" type="text" placeholder="Email or Phone Number" className="bg-transparent w-full block border-b border-b-border focus:outline-0 placeholder:text-[#7D8184]" />
              <input  onChange={(e) => handleChange(e)} name="password" type="password" placeholder="Password" className="bg-transparent w-full block border-b border-b-border focus:outline-0 placeholder:text-[#7D8184]" />
              <div className="flex justify-between items-center gap-4">
                <Button onClick={(e)=> handleLogin(e)} className={"flex justify-center"} type="submit">
                Login
              </Button>
              <button className="text-secondary">Forget Password?</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage