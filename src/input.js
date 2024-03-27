
import { forwardRef } from "react";

const Input=forwardRef((props,ref)=>{
    return(
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <Input
                type={props.type}
                // name="first-name"
                id={props.name}
                ref={ref}
                autoComplete={props.autoComplete}
                className={props.className}
                onChange={props.onChange}
            >
            </Input>
        </div>
    )
});
export default Input;