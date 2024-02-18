const NewComment=()=>{
    return(
        <form>
            <label>Enter id of post you comment:
                <input type='number'/>
            </label><br/>
            <label>Enter your name:
                <input type='text'/>
            </label><br/>
            <label>Enter your email:
                <input type='text'/>
            </label><br/>
            <label>Enter your comment:
                <input type='text'/>
            </label><br/>
            <button>Add comment</button>
        </form>
    )
}

export default NewComment