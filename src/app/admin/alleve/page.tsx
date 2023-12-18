import SearchForm from "./Components/SearchForm";
import TestListCards from "./Components/TestListCards";
import Filters from "./Components/Filters";
const Admin = () => {
  const data = [
    {name:"Walkthon",date:'27/09/23',},
    {name:"Walkathon",date:'28/09/23'},

  ]
  return (
    <div className="">
      <title> ADMIN | fitaware </title>
      <section className="px-[4rem] max-md:p-0 my-[1rem] w-full">
        <div className="flex-center relative min-h-[334px] w-full flex-col rounded-xl bg-[url('https://cdn.pixabay.com/photo/2014/12/27/16/38/planet-581239_1280.jpg')] bg-cover bg-center text-center">
          <h1 className="max-sm:text-xl text-5xl mb-6 p-2 text-center text-white font-bold">Walk to Victory</h1>
        </div>
        <SearchForm />
      </section>
      <Filters/>
      <div className="h-8"/>
      <TestListCards data={data}/>

      </div>
  );
};

export default Admin;
