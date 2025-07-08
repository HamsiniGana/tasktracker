// TODO:
// add task err check
// Edit tasks
// Add calender
// Design landing page
// update navbar
"use client";
import {
  Button,
  useDisclosure,
} from "@heroui/react";

import { useState } from "react";
import { useEffect } from "react";
import TaskColumn from '../components/taskColumn'
import AddTaskModal from "../components/addTaskModal";
import DeleteModal from "../components/deleteModal";
export default function tasksPage() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [textEntered, setTextEntered] = useState('');
    const [toDoTasks, setToDoTasks] = useState([]);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);
    const [activeCard, setActiveCard] = useState(null);
    const [activeText, setActiveText] = useState('');
    const [hydrated, setHydrated] = useState(false);
    const [category, setCategory] = useState("todo");
    // const [pendingTaskUpdate, setPendingTaskUpdate] = useState(null)
    const [pendingActiveText, setPendingActiveText] = useState(null)
    const [update, setUpdate] = useState({text: '', from: '', to: '', status: null})

    const addTask = (textPassed) => {
            if (category === "todo") {
                const exists = toDoTasks.find(txt => txt === textPassed)
                if (!exists) {
                    setToDoTasks(prevArr => [...prevArr, textPassed])
                } 

            } else if (category === "in progress") {
                const exists = inProgressTasks.find(txt => txt ===textPassed)
                if (!exists) {
                    setInProgressTasks(prevArr => [...prevArr, textPassed])
                }
            } else if (category === "done"){
                   const exists = doneTasks.find(txt => txt ===textPassed)
                if (!exists) {
                    setDoneTasks(prevArr => [...prevArr, textPassed])
                }
            }
            // setPendingTaskUpdate(null)
    }

    const removeTask = (textPassed, categoryPassed) => {

        if (categoryPassed === "todo") {
            const foundTask = toDoTasks.find(txt => txt === textPassed)
            if (foundTask) {
                 setToDoTasks(prevArr => prevArr.filter(txt => txt !== textPassed))
            }
        } else if (categoryPassed === "in progress") {
            const foundTask = inProgressTasks.find(txt => txt === textPassed)
            if (foundTask) {
                setInProgressTasks(prevArr => prevArr.filter(txt => txt !== textPassed))
            }
        } else if (categoryPassed === "done"){
            const foundTask = doneTasks.find(txt => txt === textPassed)
            if (foundTask) {
                setDoneTasks(prevArr => prevArr.filter(txt => txt !== textPassed))
            }
        }
    }

    useEffect(() => {
        if (update.status !== null) {
            console.log(update, category)
            removeTask(update.text, update.from)
            addTask(update.text)
            setUpdate({text: '', from: '', to: '', status: null})
        }
    }, [update])

    useEffect(() => {
        if (pendingActiveText !== null) {
            setPendingActiveText(null)
        }
    }, [pendingActiveText])

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedToDo = localStorage.getItem("toDoTasks");
            const storedInProgress = localStorage.getItem("inProgressTasks");
            const storedDone = localStorage.getItem("doneTasks");

            if (storedToDo) setToDoTasks(JSON.parse(storedToDo));
            if (storedInProgress) setInProgressTasks(JSON.parse(storedInProgress));
            if (storedDone) setDoneTasks(JSON.parse(storedDone));
            setHydrated(true); // Only render after this
        }
    }, [])
    useEffect(() => {
        if (typeof window !== "undefined" && hydrated) {
            localStorage.setItem("toDoTasks", JSON.stringify(toDoTasks));
            localStorage.setItem("inProgressTasks", JSON.stringify(inProgressTasks));
            localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
        }
    }, [toDoTasks, inProgressTasks, doneTasks, hydrated]);


    if (!hydrated) return null; // Don’t render yet
    return (
        <div className="flex flex-col">

            <div className="text-6xl flex flex-row items-center justify-center pb-5">
                <h1 className="flex-1">My tasks</h1>
                <Button onPress={onOpen} className="ms-5 flex-2 bg-gradient-to-r from-blue-500 to-green-600">+ Add task</Button>
                <AddTaskModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                onOpen={onOpen}
                addTask={addTask}
                setTextEntered={setTextEntered}
                setCategory={setCategory}
                textEntered={textEntered}
                />

            </div>
            <div className="flex flex-row justify-between mt-5 pt-5">
                <TaskColumn
                    tasks={toDoTasks}
                    setTasks={setToDoTasks}
                    heading="TODO"
                    setActiveCard={setActiveCard}
                    setCategory={setCategory}
                    category={category}
                    setActiveText={setActiveText}
                    activeText={activeText}
                    setPendingActiveText={setPendingActiveText}
                    setUpdate={setUpdate}
                    removeTask={removeTask}
                />

                <TaskColumn
                    tasks={inProgressTasks}
                    setTasks={setInProgressTasks}
                    heading="IN PROGRESS"
                    setActiveCard={setActiveCard}
                    setCategory={setCategory}
                    category={category}
                    setActiveText={setActiveText}
                    activeText={activeText}
                    setPendingActiveText={setPendingActiveText}
                    setUpdate={setUpdate}
                    removeTask={removeTask}
                />

                <TaskColumn
                    tasks={doneTasks}
                    setTasks={setDoneTasks}
                    heading="DONE"
                    setActiveCard={setActiveCard}
                    setCategory={setCategory}
                    category={category}
                    setActiveText={setActiveText}
                    activeText={activeText}
                    setPendingActiveText={setPendingActiveText}
                    setUpdate={setUpdate}
                    removeTask={removeTask}
                />
            </div>
            {/* <h1 className="text-white">Active card: {activeCard}</h1> */}
        </div>
    )
}
