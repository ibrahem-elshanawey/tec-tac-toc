import { type } from "os";
import { Dispatch, SetStateAction } from "react";

type cellprop = {
    go: string;
    setgo: Dispatch<SetStateAction<string>>;
    id: number;
    cells: string[];
    setcell: Dispatch<SetStateAction<string[]>>;
    cell: string;
    winningmessage:string;
}
const Cell = ({ go, setgo, id, cells, setcell, cell,winningmessage }: cellprop) => {
    const handelclick = (e:any) => {
        if (winningmessage) {
            return
        }
        const nottaken = !cells[id]
        if (nottaken) {
            if (go === "circle") {
                handlecellchange("circle");
                setgo("cross");
            } else if (go === "cross") {
                handlecellchange("cross");
                setgo("circle");
            }
        };
    }
    const handlecellchange = (tocellchange: string) => {
        let copyofarray = [...cells];
        copyofarray[id] = tocellchange;
        setcell(copyofarray)
    }
    return (
        <div className="mycell" onClick={handelclick}>
            <div className={cell}>{cell ? (cell === "circle" ? "o" : "x") : ""}</div>
        </div>
    )
}
export default Cell;