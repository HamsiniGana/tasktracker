// TODO:
// add task err check
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
import AddTaskModal from '../components/addTaskModal'
import Progress from "../components/progress";


export default function tasksPage() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [textEntered, setTextEntered] = useState('');
    const [toDoTasks, setToDoTasks] = useState([]);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);
    const [activeCard, setActiveCard] = useState(null);
    const [activeText, setActiveText] = useState('');
    const [hydrated, setHydrated] = useState(false);
    const [taskInfo, setTaskInfo] = useState([]); // structure of state variable: [{taskText: '', taskParent: ''}]

    const [pendingActiveText, setPendingActiveText] = useState(null)
    const [update, setUpdate] = useState({text: '', from: '', to: '', status: null})
    const [progressValue, setProgressValue] = useState(0);

    const addTask = (textPassed, categoryPassed) => {
            if (categoryPassed === "todo") {
                const exists = toDoTasks.find(txt => txt === textPassed)
                if (!exists) {
                    setToDoTasks(prevArr => [...prevArr, textPassed])
                    setTaskInfo(prevArr => [...prevArr, {taskText: textPassed, taskParent: categoryPassed}])
                }

            } else if (categoryPassed === "in progress") {
                const exists = inProgressTasks.find(txt => txt ===textPassed)
                if (!exists) {
                    setInProgressTasks(prevArr => [...prevArr, textPassed])
                    setTaskInfo(prevArr => [...prevArr, {taskText: textPassed, taskParent: categoryPassed}])

                }
            } else if (categoryPassed === "done"){
                   const exists = doneTasks.find(txt => txt ===textPassed)
                if (!exists) {
                    setDoneTasks(prevArr => [...prevArr, textPassed])
                    setTaskInfo(prevArr => [...prevArr, {taskText: textPassed, taskParent: categoryPassed}])

                }
            }
            // setPendingTaskUpdate(null)
    }

    const removeTask = (textPassed, categoryPassed) => {

        if (categoryPassed === "todo") {
            const foundTask = toDoTasks.find(txt => txt === textPassed)
            if (foundTask) {
                setToDoTasks(prevArr => prevArr.filter(txt => txt !== textPassed))
                setTaskInfo(prev => prev.filter(t => t.taskText !== textPassed))
            }
        } else if (categoryPassed === "in progress") {
            const foundTask = inProgressTasks.find(txt => txt === textPassed)
            if (foundTask) {
                setInProgressTasks(prevArr => prevArr.filter(txt => txt !== textPassed))
                setTaskInfo(prev => prev.filter(t => t.taskText !== textPassed))

            }
        } else if (categoryPassed === "done"){
            const foundTask = doneTasks.find(txt => txt === textPassed)
            if (foundTask) {
                setDoneTasks(prevArr => prevArr.filter(txt => txt !== textPassed))
                setTaskInfo(prev => prev.filter(t => t.taskText !== textPassed))

            }
        }
    }

    useEffect(() => {
        if (update.status !== null) {
            removeTask(update.text, update.from)
            addTask(update.text, update.to)
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
            const tasksInfo = localStorage.getItem("tasksInfo");

            if (storedToDo) setToDoTasks(JSON.parse(storedToDo));
            if (storedInProgress) setInProgressTasks(JSON.parse(storedInProgress));
            if (storedDone) setDoneTasks(JSON.parse(storedDone));
            if (tasksInfo) setTaskInfo(JSON.parse(tasksInfo));
            setHydrated(true); // Only render after this
        }
    }, [])

    useEffect(() => {
        if (typeof window !== "undefined" && hydrated) {
            localStorage.setItem("toDoTasks", JSON.stringify(toDoTasks));
            localStorage.setItem("inProgressTasks", JSON.stringify(inProgressTasks));
            localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
            localStorage.setItem("tasksInfo", JSON.stringify(taskInfo))
        }
    }, [toDoTasks, inProgressTasks, doneTasks, hydrated, taskInfo]);


    useEffect(() => {
        if (toDoTasks.length === 0 && inProgressTasks.length === 0 && doneTasks.length === 0) {
            setProgressValue(0)
        } else {
            setProgressValue((doneTasks.length / (toDoTasks.length + inProgressTasks.length + doneTasks.length)) * 100)

        }
    }, [toDoTasks, inProgressTasks, doneTasks])

    if (!hydrated) return null; // Don’t render yet
    return (
        <div className="flex flex-col">
            <div className="text-5xl flex flex-row items-center justify-center pb-5">
                <h2 className="flex-1">My tasks</h2>
                <Button onPress={onOpen} className="ms-5 flex-2 bg-gradient-to-r from-blue-500 to-emerald-400 text-black">+ Add task</Button>
                <AddTaskModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                onOpen={onOpen}
                addTask={addTask}
                setTextEntered={setTextEntered}
                // setCategory={setCategory}
                textEntered={textEntered}
                // taskInfo={taskInfo}
                setTaskInfo={setTaskInfo}
                />

            </div>
            <div className="text-6xl flex flex-row items-center  pb-5">
                <Progress value={progressValue}/>
            </div>
            {/* <Calender /> */}
            <div className="flex flex-row justify-between mt-5 pt-5">
                <TaskColumn
                    tasks={toDoTasks}
                    setTasks={setToDoTasks}
                    heading="TODO"
                    setActiveCard={setActiveCard}
                    setActiveText={setActiveText}
                    activeText={activeText}
                    setPendingActiveText={setPendingActiveText}
                    setUpdate={setUpdate}
                    removeTask={removeTask}
                    taskInfo={taskInfo}
                    setTaskInfo={setTaskInfo}
                />

                <TaskColumn
                    tasks={inProgressTasks}
                    setTasks={setInProgressTasks}
                    heading="IN PROGRESS"
                    setActiveCard={setActiveCard}
                    setActiveText={setActiveText}
                    activeText={activeText}
                    setPendingActiveText={setPendingActiveText}
                    setUpdate={setUpdate}
                    removeTask={removeTask}
                    taskInfo={taskInfo}
                    setTaskInfo={setTaskInfo}
                />

                <TaskColumn
                    tasks={doneTasks}
                    setTasks={setDoneTasks}
                    heading="DONE"
                    setActiveCard={setActiveCard}
                    setActiveText={setActiveText}
                    activeText={activeText}
                    setPendingActiveText={setPendingActiveText}
                    setUpdate={setUpdate}
                    removeTask={removeTask}
                    taskInfo={taskInfo}
                    setTaskInfo={setTaskInfo}
                />
            </div>
            {/* <h1 className="text-white">Active card: {activeCard}</h1> */}
        </div>
    )
}
