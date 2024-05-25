import { Button } from "./Components/Button"
import { useContext, useRef } from "react";
import { userContext } from "./Components/Context";
function App() {

  const {remaning , setRemaning , spent , setSpent , addExpence , setAddExpence} = useContext(userContext);
  console.log("rems" , remaning)
  const bugget = 2000;
  //use ref
  const  productName = useRef(null)
  const productCost = useRef(null);
  return (
    <>
      {/* <h1 className="text-red-500  font-bold">Piku</h1>
    <Button bgColor={"#F8F9FA"}>{"Bugget : Rs "}{bugget}</Button>
    <Button textColor={"green"} bgColor={"#F8F9FA"}>{"Remaning : Rs "}</Button>
    <Button bgColor={"#CFF4FC"}>{"Spent so far : Rs "}</Button> */}

      <div className="mainContainer flex flex-col w-full h-screens">
        <h1 className="text-center text-3xl font-bold">MY Bugget Planner</h1>
        <div className="button flex justify-around m-4 bg-slate-400 items-center">
          <Button bgColor={"#F8F9FA"}>{"Bugget : Rs "}{bugget}</Button>
          <Button textColor={"green"} bgColor={"#F8F9FA"}>{"Remaning : Rs "}{remaning}</Button>
          <Button bgColor={"#CFF4FC"}>{"Spent so far : Rs "}{spent}</Button>
        </div>
        <div className="expences">
          <h1  className="text-center text-3xl font-bold m-4">Expences Entery</h1>
          <div className="addproduct  overflow-auto">
            {
              addExpence && addExpence.map((items , idx)=>{
                return(
                  <div key={idx} className="flex justify-around items-center w-1/2 m-auto border-4 border-black p-4 mb-4">
                  <h1>Product : {items.name}</h1>
                  <p>Cost : {items.amount}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-center text-3xl font-bold m-8 w-full">Add Expences</h1>
          <div className="flex w-full justify-around items-center">
            
            <div>
            <lable htmlFor= "product" className="font-bold text-2xl">Name : </lable>
            <input type="text" id = "product" placeholder="Enter your Prodduct Nmae" ref = {productName} className="w-[450px] m-4s p-2 border-2 border-black"/>
            </div>
           
           <div>
           <label htmlFor="cost" className="font-bold text-2xl">Cost : </label>
            <input type="text" id = "cost" placeholder="Amount" ref={productCost} className="w-[450px] m-4s p-2 border-2 border-black"/>
           </div>
           <button className="bg-blue-500 border-4 borsder-white pt-2 pb-2 pl-4 pr-4 text-white font-bold"
           onClick={()=>{
            //AddExpence
            const name = productName.current.value;
            const amount = parseInt(productCost.current.value);
  //setReamaning
  setRemaning((pre)=>{
              if(remaning === 0 || remaning < amount){
             
                alert("You don't have Suffecientt Balance to purchace the product!")
                return(setRemaning(remaning))
              }
              else{
                   return(pre-amount);
              }
             
            })

            if(remaning < amount){
              return;
            }
            else{
              setAddExpence((pre)=>{
              return([...pre , {name , amount}])
            })
            }
          
          
            //spent
            setSpent(pre=>pre+amount)
           }}>Save</button>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default App
