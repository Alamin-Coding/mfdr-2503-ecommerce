import { Link } from "react-router"
import image from "../assets/login.jpg"
import Button from "../components/Button"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { useState } from "react";

const SignupPage = () => {
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

  // let handleChange = (e) => {
  //   const [name,value] = e.target
  // }

  console.log(user)

  function registration(email, password) {
    console.log("first")
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }


  return (
    <section>
      <div className="grid grid-cols-[5fr_4fr]">
        <div className="">
          <img src={image} alt="image" />
        </div>
        <div className="py-31 px-33 bg-white">
          <div>
            <h2 className="text-[34px] font-medium">Create an account</h2>
            <p className="pt-6 pb-12">Enter your details below</p>
            <div className="space-y-10" >
              <input onChange={handleChange} name="name" type="text" placeholder="name" className="bg-transparent w-full block border-b border-b-border focus:outline-0 placeholder:text-[#7D8184]" />
              <input  onChange={(e)=> handleChange(e)} name="email" type="text" placeholder="Email or Phone Number" className="bg-transparent w-full block border-b border-b-border focus:outline-0 placeholder:text-[#7D8184]" />
              <input  onChange={(e)=> handleChange(e)} name="password" type="text" placeholder="Password" className="bg-transparent w-full block border-b border-b-border focus:outline-0 placeholder:text-[#7D8184]" />
              <Button onClick={() => registration(user.email, user.password)} className={"w-full flex justify-center"} type="submit">
                Create Account
              </Button>

            </div>
            <Button className={"w-full flex justify-center mt-4"} outlate={true} type="submit">
              <img src="google-icon.png" alt="" />
              Sign up with Google
            </Button>
            <p className="pt-4 text-center ">Already have account? <Link className="font-bold" to="/login">Log in</Link></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignupPage