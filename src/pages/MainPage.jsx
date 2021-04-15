import { NavLink } from 'react-router-dom';
import '../components/contacts/styles/PhoneBook.module.css'


const MainPage = () => {
    return (
        <>
        <h2 > Welcome to your personal PhoneBook!</h2>
        <h3>Please, <NavLink to="/login"> login </NavLink> before start!</h3>
        <h3>If you don't have a personal account, please <NavLink to='/registration'>Sign up</NavLink> !
         </h3>
            <ul>What are the features:
                <li>1.Easy to use</li>
                <li>2.The ability to store an unlimited number of contacts</li>
                <li>3.Premium subscription for only 4$ per year!</li>    
            </ul>
        </>
    )
}

export default MainPage;