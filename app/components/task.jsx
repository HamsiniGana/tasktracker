"use client";

import {Card, CardHeader, CardBody, CardFooter, Divider} from "@heroui/react";
import DropArea from "./dropArea";
export default function Task(props) {
  return (
    <>

      <Card className = "max-w-[400px] mx-2 bg-white text-black" draggable
            onDragStart={() => {
              props.setActiveCard(props.index)
              props.setActiveText(props.text)
              props.setPendingActiveText("pending")
            }}
            onDragEnd={() => props.setActiveCard(null)}>
        <CardBody >
          <p className={props.column === "DONE" ? "line-through" : ""}>{props.text}</p>
        </CardBody>
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
