import Link from 'next/link';

const MenuBar = () => {
  return (
    <nav className='h-20'>
      <ul className='flex'>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/printing">Printing</Link>
        </li>
        <li>
          <Link href="/digital">Digital</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
