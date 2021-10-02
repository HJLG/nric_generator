import { Button } from "antd"

export function Mainbutton({handleClick}) {
    return (
        <div>
            <Button title="nricButton" type="primary" onClick ={handleClick}>Create NRIC</Button>
        </div>
    )
}