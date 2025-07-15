import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useState } from "react";
import {Input} from "@heroui/react";

export default function EditModal(props) {
    const [textEntered, setTextEntered] = useState('')
  return (
    <>
      <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Edit task</ModalHeader>
              <ModalBody>
                <h5>New task description:</h5>
                <Input placeholder="Enter new task description"
                                type="text"
                                onChange={(e)=> setTextEntered(e.target.value)} />

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={() => {
                    onClose();
                    props.setTaskInfo((prev) => {return prev.map(t => props.text === t.taskText ? {...t , taskText: textEntered} : t)})
                    props.setTasks((prevArr) => {
                        return prevArr.map(txt => txt === props.text ? textEntered : txt)
                    })
                }} >
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
