import { useState } from "react";

export default function DropArea(props) {
  const [showDropAreas, setShowDropAreas] = useState(false)
  return (
    <>
      <div onDragEnter={() => setShowDropAreas(true)}
           onDragLeave={() => setShowDropAreas(false)}
           onDrop={() => {
            props.setUpdate({text: props.activeText, from: props.category, to: props.column.toLowerCase(), status:'pending'})
            props.setCategory(props.column.toLowerCase())
            setShowDropAreas(false)
           }}
           onDragOver={e => e.preventDefault()}
           className={showDropAreas === true ? "max-w-[400px] h-20 rounded-lg m-1 p-2 bg-gray-900 text-white border border-2 border-solid border-white-500":
                "hideDropAreaClass max-w-[400px] rounded-lg bg-gray-900 text-white border border-solid border-gray-500"
            }>
        + Add here
      </div>
    </>
  );
}
