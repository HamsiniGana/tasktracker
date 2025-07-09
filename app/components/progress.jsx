import {CircularProgress} from "@heroui/react";

export default function Progress(props) {
  return (
    <>
        <CircularProgress
        aria-label="Loading..."
        color="warning"
        showValueLabel={true}
        size="lg"
        value={props.value}
        />
    </>
  );
}
