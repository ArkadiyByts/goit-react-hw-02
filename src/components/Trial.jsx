

const Trial = () => {
    const handleClick = (evt) => {
		console.log(evt);
	};

    return (
        <>
        <button onClick={handleClick}>First button</button>
			<button onClick={evt => console.log(evt)}>Second button</button>
        </>
        
    )
}

export default Trial