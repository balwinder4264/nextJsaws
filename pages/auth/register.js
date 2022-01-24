
// import { useRouter } from 'next/router';
// import Link from "next/link"
// import { HiOutlineMailOpen } from "react-icons/hi"
// import { MdOutlineLockOpen } from "react-icons/md"
// import { AiOutlineUser } from "react-icons/ai"
// import IconSection from '../../components/auth/iconSection';

// const Register = () => {
//     const router = useRouter();
//     // router.push('/post/abc')}
//     const registerHandler = () => {
//         alert("You are registered!!!")
//     }
//     return <div className="min-h-screen flex flex-col items-center justify-center ">

//         <div className="flex flex-col" >
//             <IconSection />
//             <div className="flex flex-col gap-1 text-center font-Poppins-Bold text-2xl text-v1-purple">
//                 {/* mt-6 text-center text-3xl font-extrabold text-gray-900 */}
//                 <span>We to the family </span>
//                 <span >Create your admin account</span>

//             </div>

//             <div className="mt-10 pl-2">
//                 {/* <form action="#"> */}
//                 <div className="flex flex-col mb-5  " >
//                     <div className="relative" >
//                         <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 pl-4 ">
//                             {/* <MailOpenIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
//                             <AiOutlineUser className=' text-lg text-black' style={{ opacity: "70%" }} />
//                         </div>
//                         <input
//                             placeholder='Fullname'
//                             type={"text"}
//                             className=' pl-16 text-sm placeholder-black placeholder:opacity-40 opacity-60 font-Nunito-Light   pr-4 w-full py-2 focus:outline-none shadow-lg rounded-xl '
//                             style={{ width: 320, height: 48, backgroundColor: "white", boxShadow: "0px 3px 6px #00000029" }} />

//                     </div>
//                 </div>
//                 <div className="flex flex-col mb-5  " >
//                     <div className="relative" >
//                         <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 pl-4 ">
//                             {/* <MailOpenIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
//                             <HiOutlineMailOpen className=' text-lg text-black' style={{ opacity: "70%" }} />
//                         </div>
//                         <input
//                             placeholder='Email'
//                             type={"email"}
//                             className=' pl-16 text-sm placeholder-black  placeholder:opacity-40 opacity-60 font-Nunito-Light   pr-4 w-full py-2 focus:outline-none shadow-lg rounded-xl '
//                             style={{ width: 320, height: 48, backgroundColor: "white", boxShadow: "0px 3px 6px #00000029" }} />

//                     </div>
//                 </div>
//                 <div className="flex flex-col mb-6">
//                     <div className="relative">
//                         <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 pl-4 ">
//                             <span>
//                                 <MdOutlineLockOpen className=' text-lg text-black' style={{ opacity: "70%" }} />
//                                 {/* <LockClosedIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
//                             </span>
//                         </div>
//                         <input placeholder='Password' type={"password"}
//                             className='pl-16 text-sm placeholder-black placeholder:opacity-40 opacity-60 pr-4 w-full py-2 focus:outline-none shadow-lg rounded-xl font-Nunito-Light'
//                             style={{ width: 320, height: 48, backgroundColor: "white", boxShadow: "0px 3px 6px #00000029" }} />
//                     </div>
//                 </div>


//                 {/* //error area  */}
//                 <div className="flex w-full ">
//                     <button className="rounded-2xl bg-v1-purple text-white"
//                         style={{ width: 320, height: 52 }} onClick={() => registerHandler()}>
//                         <span className="font-Nunito-Bold text-sm uppercase">Sign Up</span>
//                     </button>


//                 </div>

//                 {/* </form> */}
//             </div>

//             <div className="flex justify-center items-center mt-6">
//                 <span className="ml-2 font-Nunito-Light  text-black">Do you have account?
//                     <Link href="/auth/forgetpassword">
//                         <a className="text-s ml-2 text-purple font-Nunito-Bold">Sign in</a>
//                     </Link>
//                 </span>

//             </div>
//         </div>
//     </div >

// }

// export default Register;