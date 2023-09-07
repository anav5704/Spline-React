import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <div className='relative w-screen h-screen'>
    <div className='b absolute top-0 right-0 w-screen h-screen -z-10'>
      <nav className=' flex items-center justify-between w-screen p-3 text-white'>
        <div  className='ml-5 cursor-pointer'>
          <img className='scale-75' src="/logo.svg" alt="" />
        </div>
        <ul className=' flex items-center'>
          <li className='mr-5 cursor-pointer'>Home</li>
          <li className='mr-5 cursor-pointer'>About</li>
          <li className='mr-5 cursor-pointer'>Pricing</li>
          <button  className='mr-5 cursor-pointer'>Get Started</button>
        </ul>
      </nav>
      <main className='text-white w-1/2  h-80v my-auto flex flex-col justify-center items-start p-5'>
        <h1 className='font-semibold text-6xl'>The Future is Now</h1>
        <h3 className='my-5 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, perferendis atque qui nostrum sequi aliquid. Voluptates ipsum nam suscipit quam.</h3>
        <div className="flex gap-5 items-center">
          <button className='pri'>Create Account</button>
          <button>Log In</button>
        </div>
      </main>
    </div>
    <Spline className='spline' scene="https://prod.spline.design/qZVRVwoO115vt9NN/scene.splinecode" />
    </div>
  );
}
