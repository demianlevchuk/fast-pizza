import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

export default function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-3 font-serif uppercase bg-yellow-400 border-b border-stone-200 sm:px-6 font-pizza bg-pizza">
            <Link to="/" className="tracking-widest">
                Fast React Pizza Co.
            </Link>

            <SearchOrder />

            <Username />
        </header>
    );
}
