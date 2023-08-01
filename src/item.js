import {useState} from "react";

function MyItem(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [persons, setPersons] = useState([]);

    return (
        <>
       <input type="text"
       placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
            />
            <input type="email"
                   placeholder="Enter Your Email"
                   onChange={(e) => setEmail(e.target.value)}
            />
            <h1>{name.length > 5 && <span>Name length is greater than 5</span>}</h1>
            <h1>{name.length < 5 && <span>Name length is lower than 5</span>}</h1>
            <h1>{email}</h1>
        </>
    )
}
export default MyItem

// State management

