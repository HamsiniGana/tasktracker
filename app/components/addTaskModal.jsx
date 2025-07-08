import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import {Input} from "@heroui/react";
import {RadioGroup, Radio} from "@heroui/radio";


export default function AddTaskModal (props) {
   
    return (
        
         <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
                    <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col gap-1">Add task</ModalHeader>
                        <ModalBody>
                            <h3 className="text-gray-400">Task description:</h3>
                            <Input placeholder="Enter task description"
                                type="text"
                                onChange={(e)=> props.setTextEntered(e.target.value)} />

                            <RadioGroup label="Add to:">
                                <Radio value="todo" onChange={()=> props.setCategory("todo")}>Todo</Radio>
                                <Radio value="in progress" onChange={()=> props.setCategory("in progress")}>In progress</Radio>
                                <Radio value="done" onChange={()=> props.setCategory("done")}>Done</Radio>
                            </RadioGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                            Close
                            </Button>
                            <Button className="bg-gradient-to-r from-blue-500 to-green-600"
                                    onPress={() => {
                                        onClose();
                                        props.addTask(props.textEntered);
                                        }}>
                                Confirm
                            </Button>
                        </ModalFooter>
                        </>
                    )}
                    </ModalContent>
                </Modal>
    )
}