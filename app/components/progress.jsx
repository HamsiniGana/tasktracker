import {CircularProgress} from "@heroui/react";
import { px } from "framer-motion";

export default function Progress(props) {
  return (
    <>
        <CircularProgress
        aria-label="Loading..."
        color="success"
        classNames={{
            value: "text-l font-bold text-white",
          }}
        showValueLabel={true}
        size="lg"
        value={props.value}
        strokeWidth={"4"}
        />
    </>
  );
}
