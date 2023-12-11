import SideMenu from "./Components/SideMenu";

export default function AdminLayout({children}){

    return (
        <div className="p-5 bg-white h-screen overflow-y-scroll">
      {/* <div className='flex gap-2'>
  <div className='border-2 border-gray-300 flex-2 p-5 rounded m-5 md:mt-10 mt-5  flex flex-col items-center '>
  <h1 className='text-2xl font-bold mt-5 border-b-2 pb-4'>Fitadmin</h1>
  <ol className='mt-10'>
    <li className='text-lg font-medium md:mt-6  mt-4 text-center  bg-black p-2 text-white rounded' >Contest Schedule</li>
    <li className='text-lg font-medium md:mt-6  mt-4 text-center text-gray-600 hover:bg-black p-2 hover:text-white rounded' ><Link href='alleve/events/login'>Add Admin</Link></li>
    <li className='text-lg font-medium md:mt-6  mt-4 text-center text-gray-600 hover:bg-black p-2 hover:text-white rounded' ><Link href='alleve/analytics'>Analytics</Link></li>
    <li className='text-lg font-medium md:mt-6  mt-4 text-center text-gray-600 hover:bg-black p-2 hover:text-white rounded' ><Link href='/'>LogOut</Link></li>
  </ol>

  <h1 className='text-lg font-bold mt-40 '>Admin</h1>
  <h1 className='text-md  mb-5'>Admin Name</h1>
  </div>  */}

    <SideMenu/>
        {children}
    </div>
    );

}