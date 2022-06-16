import { useState } from 'react'
import { FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function Search() {
   // to navigate to page wich user will enter name in form 
    const navigate = useNavigate();
    const [inputstate, setinputstate] = useState("");
    function getinputvalue(e) { 
        setinputstate(e.target.value)
        
    }
    const submitHandelar = (e) => { 
        e.preventDefault();
        navigate(`/searched/${inputstate}`);
        setinputstate('');
       
    }
  return (
      <form onSubmit={submitHandelar} className='my-10 relative flex justify-center'>
          <div className='relative'>
          <FaSearch className='absolute text-white top-1/2 -translate-y-1/2 ml-3 hover:scale-125 transition-all cursor-pointer'></FaSearch>
          <input onChange={getinputvalue} type="text" className='bg-input-bg text-white px-4 pl-9 py-2 rounded-lg'/>
              
          </div>
   </form>
  )
}

export default Search