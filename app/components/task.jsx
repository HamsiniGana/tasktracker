"use client";

import {Card, CardBody, CardFooter, Divider} from "@heroui/react";
import DropArea from "./dropArea";
import Image from 'next/image'
import bin from '../assets/delete.svg'
import edit from '../assets/edit.svg'
import DeleteModal from "./deleteModal";
import {
  useDisclosure,
} from "@heroui/react";
import EditModal from "./editModal";

export default function Task(props) {
  const {isOpen: isOpenDeleteModal, onOpen: onOpenDeleteModal, onOpenChange: onOpenChangeDeleteModal} = useDisclosure();
  const {isOpen: isOpenEditModal, onOpen: onOpenEditModal, onOpenChange: onOpenChangeEditModal} = useDisclosure();

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
                onClick={onOpenDeleteModal}
              />
              <Image
                src={edit}
                width={20}
                height={20}
                alt="Edit icon"
                onClick={onOpenEditModal}
                className="me-2"
            />
            </CardFooter>
            <DeleteModal
            onClick={()=> {
                props.setActiveText(props.text);
                props.setPendingActiveText("pending")
            }}
            onOpen={onOpenDeleteModal}
            isOpen={isOpenDeleteModal}
            onOpenChange={onOpenChangeDeleteModal}
            removeTask={props.removeTask}
            column={props.column}
            text={props.text}
            purpose="deleteTask"/>

            <EditModal
            onOpen={onOpenEditModal}
            isOpen={isOpenEditModal}
            onOpenChange={onOpenChangeEditModal}
            setTaskInfo={props.setTaskInfo}
            text={props.text}
            column={props.column}
            setTasks={props.setTasks}
            />
            <Divider />
        </Card>
        <DropArea addTask={props.addTask}
                    column={props.column}
                    text={props.text}
                    setPendingTaskUpdate={props.setPendingTaskUpdate}
                    activeText={props.activeText}
                    setUpdate={props.setUpdate}
                    taskInfo={props.taskInfo}
                    setTaskInfo={props.setTaskInfo}
        />
    </>
  );
}
