import React, {useState} from 'react';
import Cards from './Cards';
function Form(){
    const [input, setInput] = useState({name:"", email: "", role: ""});
    const [display, setDisplay] = useState({});
    const handleChange = event => {
        setInput({ ...input, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        console.log(input.name);
        console.log(input.email);
        console.log(input.role)
      };
    return(
        <div className="Form">
           {console.log(input)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
            Role:
            <input
            type="text"
            name="role"
            onChange={event => handleChange(event)}
            />
        </label>
        <button>Submit!</button>
      </form> 
        </div>
    )
}
export default Form