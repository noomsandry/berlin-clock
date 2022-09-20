import { toNumericFormat } from "../../common/time";
import "./numeric-clock.css";

function NumericClock({ date }){
    const numericTime = toNumericFormat(date);
    return <p>
        Numeric Time : { numericTime }
    </p>
}

export default NumericClock;