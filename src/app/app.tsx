// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MyButton from './button/button';
import Profile from './profile/profile';
import Navbar from './navbar/navbar';
import Products from './products/products';
import Counter from './counter/counter';

import './../styles.scss';

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

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
            <Products products={products}></Products>
            <Counter start={0}></Counter>
        </>
    );
}

