import Task from "./task";
import DropArea from "./dropArea";
export default function TaskColumn(props) {
  return (
    <div className="flex flex-col items-center"
        >
        <h3 className="text-2xl mb-5">{props.heading}</h3>
        <div className="bg-gray-900 w-60 min-h-80 rounded-lg">
            <DropArea  addTask={props.addTask} 
            column={props.heading} 
            setCategory={props.setCategory} 
            setPendingTaskUpdate={props.setPendingTaskUpdate}
            setPendingTaskText={props.setPendingTaskText}/>
            {props.tasks.map((item, index) => (
             <Task key={index}
                   index={index}
                   text={item}
                   setActiveCard={props.setActiveCard}
                   addTask={props.addTask}
                   column={props.heading}
                   setCategory={props.setCategory}
                   setPendingTaskUpdate={props.setPendingTaskUpdate}
                   setPendingTaskText={props.setPendingTaskText}
              />
            ))}
        </div>
    </div>
  );
}
