"use client";

import {Card, CardHeader, CardBody, CardFooter, Divider} from "@heroui/react";
import DropArea from "./dropArea";
import Image from 'next/image'
import bin from '../assets/delete.svg'
import DeleteTaskModal from "./deleteTaskModal";
import {
  useDisclosure,
} from "@heroui/react";

export default function Task(props) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
      <Card className = "max-w-[400px] mx-2 bg-white text-black flex-col" draggable
            onDragStart={() => {
              props.setActiveCard(props.index)
              props.setActiveText(props.text)
              props.setPendingActiveText("pending")
            }}
            onDragEnd={() => props.setActiveCard(null)}>
        <CardBody>
          <p className={props.column === "DONE" ? "line-through" : ""}>{props.text} </p>
        </CardBody>
        <CardFooter className="flex-row-reverse">
           <Image
            src={bin}
            width={20}
            height={20}
            alt="Delete icon"
            onClick={onOpen}
          />
        </CardFooter>
        <DeleteTaskModal
        onClick={()=> {
              props.setActiveText(props.text);
              props.setPendingActiveText("pending")
        }}
        onOpen={onOpen}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        removeTask={props.removeTask}
        column={props.column}
        text={props.text} />
        <Divider />
      </Card>
      <DropArea addTask={props.addTask}
                column={props.column}
                text={props.text}
                setPendingTaskUpdate={props.setPendingTaskUpdate}
                activeText={props.activeText}
                setUpdate={props.setUpdate}
                category={props.category}
                setCategory={props.setCategory}
      />
    </>
  );
}
