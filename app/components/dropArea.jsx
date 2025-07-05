import { useState } from "react";

export default function DropArea(props) {
  const [showDropAreas, setShowDropAreas] = useState(false)
  return (
    <>
      <div onDragEnter={() => setShowDropAreas(true)}
           onDragLeave={() => setShowDropAreas(false)}
           onDrop={() => {
            if (props.column === "TODO") {
              props.setCategory("todo")
            } else if (props.column === "IN PROGRESS") {
              props.setCategory("inprogress")
            } else if (props.column === "DONE") {
              props.setCategory("done")
            }
            props.setPendingTaskText(props.text)
            props.setPendingTaskUpdate("pending")
            setShowDropAreas(false)
           }}
           onDragOver={e => e.preventDefault()}
           className={showDropAreas === true ? "max-w-[400px] rounded-lg m-1 p-2 bg-gray-900 text-white border border-solid border-gray-500":
                "hideDropAreaClass max-w-[400px] rounded-lg bg-gray-900 text-white border border-solid border-gray-500"
            }>
        + Add here
      </div>
    </>
  );
}
