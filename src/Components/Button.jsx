
export const Button = ({bgColor , textColor , children}) => {
  return (
    <>
        <div>
            <button className='p-4 rounded
            font-bold text-lg m-4  border-2 border-black' style={{backgroundColor : bgColor  , color : textColor}} >{children}</button>
        </div>
    </>
  )
} 
