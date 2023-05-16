import React from 'react'

const Problems = (props) => {

    const problemArr = props.arr;
    
    return (
        <div className='allProblems'>
        <table className="min-w-full divide-y divide-gray-200">
        <tbody>

        <tr>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
          </tr>
        {problemArr.map((curr,index)=>{
            var i = "color"+index%2;
            
            return(

     <tr className={`border-solid border-black text-slate-200 ${i}`}>
        <td>
            {curr.title}
        </td>
        <td>
            {curr.acceptance}
        </td>
        <td className={`${curr.difficulty}`}>
            {curr.difficulty}
        </td>
    </tr>
            )
        })}
    </tbody>
    </table>
        </div>
    )
}

export default Problems