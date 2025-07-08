import Task from "./task";
import DropArea from "./dropArea";
import {Button} from "@heroui/react";
import {
  useDisclosure,
} from "@heroui/react";
import DeleteModal from "./deleteModal";

export default function TaskColumn(props) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="flex flex-col items-center"
        >
        <h3 className="text-2xl mb-5">{props.heading}</h3>
        <div className="bg-gray-900 w-60 min-h-80 rounded-lg">
          {props.tasks.length > 0 &&
            <Button className="bg-gradient-to-r from-green-600 to-blue-500 my-2 ml-[145px] text-white" onPress={onOpen}>Clear all</Button>
          }
          <DeleteModal
                  onClick={()=> {
                        props.setActiveText(props.text);
                        props.setPendingActiveText("pending")
                  }}
                  onOpen={onOpen}
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  purpose="deleteAllTasks"
                  setTasks={props.setTasks}
                  />
            <DropArea
                 addTask={props.addTask}
                 column={props.heading}
                 setCategory={props.setCategory}
                 activeText={props.activeText}
                 setUpdate={props.setUpdate}
                 category={props.category}
                />
            {props.tasks.map((item, index) => (
             <Task key={index}
                  index={index}
                  text={item}
                  setActiveCard={props.setActiveCard}
                  addTask={props.addTask}
                  column={props.heading}
                  setCategory={props.setCategory}
                  setActiveText={props.setActiveText}
                  activeText={props.activeText}
                  setPendingActiveText={props.setPendingActiveText}
                  setUpdate={props.setUpdate}
                  category={props.category}
                  removeTask={props.removeTask}
              />
            ))}
        </div>
    </div>
  );
}
