import {useForm} from "react-hook-form"

const UserForm=()=>{
    const {register, handleSubmit, formState:{errors, isValid}}=useForm();

    const save=(user)=>{
        fetch('https://jsonplaceholder.typicode.com/users',{
            headers:{'content-type':'application/json'},
            body: JSON.stringify(user),
            method: 'POST'
        }).then(user=>user.json()).then(console.log(user))
    }

    return(
        <div>
            <form onSubmit={handleSubmit(save)}>
                <label>Enter your name:
                    <input type="text" placeholder={'name'} {...register('name')}/>
                </label><br/>
                <label>Enter your username:
                    <input type='text' placeholder={'username'} {...register('username')}/>
                </label><br/>
                <label>Enter your email:
                    <input type='text' placeholder={"email"} {...register('email')}/>
                </label><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm