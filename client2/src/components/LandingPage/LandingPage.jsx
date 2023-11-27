import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <Link to='/home'>
                <button>Enter</button>
            </Link>
        </div>
    )
};

export default LandingPage;