import { useEffect } from "react"

const Message = () => {

    useEffect(() => {
        console.log("Message has been run")
    },[])

    return (
        <div></div>
    )
}

export default Message