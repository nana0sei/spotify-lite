import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
const CustomAlert = ({ isOpen, onClose, children }: Props) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody bg="red.500">
            <Alert status="error" variant="solid">
              <AlertIcon />
              {children}
            </Alert>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomAlert;
