
const Login = () => {
    return (
   
      <div className="flex justify-center items-center h-screen">
      
        <div className="flex flex-col flex-col-reverse hover:flex-col space-y-4 items-center bg-slate-300 px-40 py-20 rounded-lg">
           
       
        <h1 className='text-center text-xl'>Welcome to My Design</h1>
        <input className='w-full px-4 p-2 rounded-md focus:ring hover:placeholder:bg-zinc-600' type="email" placeholder='Email'/>
        <input className='w-full px-4 p-2 rounded-md focus:ring' type="text" placeholder='input'/>
        <input className='w-full px-4 p-2 rounded-md focus:ring' type="password" placeholder='password'/>
        <button className='w-full bg-rose-500 px-2 py-2 rounded-2xl text-center hover:bg-fuchsia-700' type="submit">submit</button>
    
      </div>
      </div>
    )
  }
  export default Login