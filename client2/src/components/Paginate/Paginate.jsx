// import { useState } from "react";

// const Paginate = ({ paginate, setPaginate, totalPages }) => {
//     const [input, setInput] = useState(1);
//     const final = Math.ceil(totalPages)

//     const handlerNext = () => {
//         setInput(input + 1);
//         setPaginate(paginate + 1);
//     };

//     const handlerBack = () => {
//         setInput(input - 1);
//         setPaginate(paginate - 1);
//     };


//     const handlerInput = (event) => {
//         if (event.keyCode == 13) {
//             setPaginate(parseInt(event.target.value));
//         } else {
//             const value = parseInt(event.target.value);
//             if (value < 1 || value > final || isNaN(value)) {
//                 setPaginate(1);
//                 setInput(1);
//             } else {
//                 setPaginate(value);
//             }
//         }
//     };

//     const onChange = (event) => {
//         setInput(event.target.value)
//     };

//     return (
//         <div>
//             <button onClick={handlerBack}>back</button>
//             <input
//                 id="page"
//                 name="page"
//                 value={input}
//                 onKeyDown={(event) => handlerInput(event)}
//                 onChange={(event) => onChange(event)}
//             />
//             <p> de {final}</p>
//             <button onClick={handlerNext}> next </button>
//         </div>
//     )
// };

// export default Paginate;

import { useState } from "react";

const Paginate = ({ setPaginate, totalPages }) => {
    const [input, setInput] = useState(1);
    const final = Math.ceil(totalPages);


    const handlePageClick = (pageNumber) => {
        setPaginate(pageNumber);
        setInput(pageNumber);
    };

    const pages = [];
    for (let i = 1; i <= final; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map((pageNumber) => (
                <button key={pageNumber} onClick={(pageNumber) => handlePageClick(pageNumber)}>
                    {pageNumber}
                </button>
            ))}
        </div>
    );
};

export default Paginate;

