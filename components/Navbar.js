import Link from 'next/link';
import Image from 'next/image';
import 'tw-elements';


function Navbar() {
  
  return (
    <nav className="flex justify-between items-center py-2 bg-black p-2 mt-0 fixed max-w-7xl w-full z-10 top-0">
      <Link href="/" passHref>
      <Image 
      src="https://mymexicotours.s3.amazonaws.com/new_graphics/mmt-logo.png" 
      width="500" 
      height="43" 
      className="text-2xl font-bold text-grey-800" 
      alt="My Mexico Tours Logo" />
      </Link>
      <div className="flex">
      <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div className="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-black invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-white top-0 right-0 border-none w-96" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header flex items-center justify-between p-4">
    <h5 className="offcanvas-title mb-0 leading-normal font-semibold text-white" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
    ...
  </div>
</div>
      </div>
    </nav>
  );
}

export default Navbar;
