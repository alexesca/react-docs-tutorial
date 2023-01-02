// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MyButton from './components/button';
import Profile from './profile/profile';
import Navbar from './navbar/navbar';
import './../styles.scss';

export default function App() {
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    };
    const dto = {title: "Do some great work!!!"}
    return (
        <>
            <Navbar name="Jeronimo" isLoggedIn={true}></Navbar>
            <h1 className="avatar">Welcome to my app</h1>
            <Profile user={user}></Profile>
            <MyButton dto={dto}/>
        </>
    );
}

