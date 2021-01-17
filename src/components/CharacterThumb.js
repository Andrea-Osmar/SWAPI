import React from "react"
import { Link } from "react-router-dom"

export const CharacterThumb = ({ name, id }) => {
  return (
    <div className="cards-info" key={name}>
      <h2>
        <Link to={`/characters/${id}`}>{name} </Link>
      </h2>
    </div>
  )
}








// import React from "react"

// export const CharacterThumb = ({characters}) => {
//   if (!characters || characters.length === 0 ) {
//    // console.log(characters)
//     return "Not working"
//   } else {
//     return (
//         <ul>
//           {characters.result.map(char => {
//             return (
//             <li key={url}>{name}</li>
//             );
//           })}
//         </ul>
//     );
//   }  
// }

