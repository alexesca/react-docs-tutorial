function MyButton({ dto }: { dto: { title: string } }) {
    return (
        <button>{dto.title}</button>
    );
}


export default  MyButton;
