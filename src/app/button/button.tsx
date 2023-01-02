function MyButton({ dto }: { dto: { title: string } }) {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <button onClick={handleClick}>{dto.title}</button>
    );
}


export default  MyButton;
