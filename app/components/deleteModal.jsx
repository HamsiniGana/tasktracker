import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

export default function DeleteModal(props) {
  return (
    <>
      <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange} placement="auto">
        <ModalContent>
            {(onClose) => (
                <>
                    {(props.purpose==="deleteTask" ||  props.purpose==="deleteAllTasks") && <ModalHeader className="flex flex-col gap-1">Are you sure?</ModalHeader>}
                    {props.purpose==="taskExists" && <ModalHeader className="flex flex-col gap-1">Task already exists!!!!!!!!</ModalHeader>}

                    <ModalBody>
                        {props.purpose==="deleteTask" && <p>Do you really want to delete this task?</p>}
                        {props.purpose==="deleteAllTasks" && <p>Do you really want to delete all tasks?</p>}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" variant="light" onPress={onClose}>
                            Cancel
                        </Button>
                        <Button color="danger" onPress={() => {
                            onClose();
                            if (props.purpose==="deleteTask") {
                            props.removeTask(props.text, props.column.toLowerCase())
                            } else if (props.purpose === "deleteAllTasks") {
                            props.setTasks([])
                            props.setTaskInfo([])
                            }
                        }}>
                        Ok
                        </Button>
                </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
