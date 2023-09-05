import gql from './assets/gql.png';

export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
        <div className="container">
            <a className='navbar-brand' href='/'>
                <div className="d-flex">
                    <img src={gql} alt='graphql logo' className='mr-2' />
                    <div>Project Management</div>
                </div>
            </a>
        </div>
    </nav>
  );
}
