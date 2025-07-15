import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

export default function ErrorModal(props) {
  return (
    <>
      <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">ERROR!</ModalHeader>
              <ModalBody>
                <h5>Task already exists!</h5>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={() => {props.setDispErr(false); onClose()}}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
