import Nav from '../Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  // Keeps track of the current page.
  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <header>
      <h1>Ryan Arnold</h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;