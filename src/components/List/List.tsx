import { TrashSharp } from "react-ionicons";
import classes from "./List.module.css";

const List = () => {
    return (
        <div className={classes.list_container}>
            <div className={classes.list}>
                <div className={classes.task}>
                    <input type="checkbox" id="task1" />
                    <label htmlFor="task1">Learn Daily 1</label>
                </div>
                <div className={classes.trash}><TrashSharp /></div>
            </div>

            <div className={classes.list}>
                <div className={classes.task}>
                    <input type="checkbox" id="task2" />
                    <label htmlFor="task2">Learn Daily 2</label>
                </div>
                <div className={classes.trash}><TrashSharp /></div>
            </div>
        </div>
    );
};

export default List;
