import {CircularProgress} from "@heroui/react";

export default function Progress(props) {
  return (
    <>
        <CircularProgress
        aria-label="Loading..."
        classNames={{
            value: "text-l font-bold text-white",
            svg: "w-[70px] h-[70px] text-emerald-400",
          }}
        showValueLabel={true}
        value={props.value}
        strokeWidth={"3"}
        />
    </>
  );
}
