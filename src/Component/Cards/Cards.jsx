const Cards = () => {
  return (
    <div>
    <div>
      <h4 className="font-bold px-16 mt-12 pb-2 border-b border-gray-200"> Latest Recipes</h4>
      
      <div className=" bg-white rounded overflow-hidden shadow-md relative ">
       
        <img src="./stew.jpg" alt="Stew" className="w-full h-32 sm:h-48 object-cover" />
        <div className="m-4">
          <span className="font-bold">5 bean chill stew</span>
          <span className="block text-gray-500 text-sm"> Recipe by Mario </span>
        </div>
        <div className="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2 ">
         <span>25 mins</span>
         </div>
        </div>
      </div>

        
      <div className=" bg-white rounded overflow-hidden shadow-md relative ">
       
       <img src="./noodles.jpg" alt="noodless" className="w-full h-32 sm:h-48 object-cover"/>
       <div className="m-4">
         <span className="font-bold">fresh nood</span>
         <span className="block text-gray-500 text-sm"> Recipe by Mario </span>
       </div>
       <div>
       <div className="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2 ">
        <span>25 mins</span>
        </div>
       </div>
     </div>

     <div className=" bg-white rounded overflow-hidden shadow-md relative">
       
       <img src="./curry.jpg" alt="Curry" className="w-full h-32 sm:h-48 object-cover"/>
       <div className="m-4">
         <span className="font-bold">tafu curry</span>
         <span className="block text-gray-500 text-sm"> Recipe by Mario </span>
       </div>
       <div>
       <div className="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2 ">
        <span>25 mins</span>
        </div>
       </div>
     </div>


















      <h4 className="font-bold px-16 mt-12 pb-2 border-b border-gray-200"> Most Popular</h4>

      <div className="flex justify-center">
      <div className="  bg-secondary-100 text-secondary-200">
          Load More
          </div>
      </div>
    </div>
  );
};

export default Cards;
