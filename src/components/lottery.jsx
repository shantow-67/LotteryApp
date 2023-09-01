import { useState } from "react";


const Lottery = () => {
    const [name, setName] = useState('')
    const [nameList, setNameList] = useState([])
    const [result,setResult] = useState('')

    function handleaddName() {
        setNameList([...nameList, name]);
        setName('');

    }
    // const handleRemove = (index) => {
    //     nameList.splice(index,1)
    // }
     const RemoveItem = (index) => {
        const updatedList = nameList.filter((_, i) => i !== index);
       setNameList(updatedList);
    };

     const handleKeyPress = (e) => {
    // Check if the Enter key (keycode 13) was pressed
    if (e.key === 'Enter') {
      // Perform the action you want here, e.g., submit a form
      handleaddName();
    }
    };

    


    
    const lottery = () => {
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * nameList.length);
        // Use the random index to access the element at that index
        const randomElement = nameList[randomIndex];
        setResult(randomElement)
        

    }


    return (
        <div>
            <h1 className="text-5xl text-center py-4 bg-slate-300 text-blue-600 font-bold ">Lottery App</h1>
            <div className=" flex flex-col md:flex md:flex-row justify-center py-8  gap-4">
                <h3 className="text-3xl text-center font-semibold">write a name</h3>
                <div className="flex justify-center">
                    <input value={name} onChange={(e)=>setName(e.target.value)} onKeyPress={handleKeyPress} type="text" placeholder="Name...." className="border-2 border-blue-600 pl-2" />

                <button onClick={handleaddName}  className="bg-blue-500 ml-2  text-white rounded-sm text-xl p-2">Add</button>
                </div>
            </div>

            <div className=" flex flex-col md:flex-row justify-center gap-4">
                <table className="w-[80%] md:w-[40%] border-2 border-black mx-auto md:mx-0">
                    <thead>
                        <th>Name List</th>
                        
                    </thead>
                    <tbody>
                        {nameList.length !== 0 ? nameList.map((item, index) => (
                            <tr key={index}>
                                <td className="capitalize pl-2">{`${index + 1}. ${item}`}</td>
                                <button onClick={()=>RemoveItem(index)} className="border-1 border-black py-1 px-2 m-1 rounded-sm text-white bg-red-500">remove</button>
                          </tr>  
                        ))
                        :(<tr></tr>)}
                    </tbody>
                    
                </table>
                <div className="w-[80%] md:w-[40%] border-2 mx-auto md:mx-0 border-black flex justify-center items-center">
                    <h1 className="text-5xl py-5 md:py-0 text-red-500 capitalize font-bold">{result}</h1>
                 </div>
            </div>
            <div className="flex justify-center">
                <button onClick={lottery} className="bg-green-700 text-white text-center font-semibold text-2xl p-2 border-2 border-red-500  mt-4 rounded-xl">Select randomly</button>
            </div>


        </div>
    );
};

export default Lottery;