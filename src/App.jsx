import { useState } from "react";
import {
  RiHome4Line,
  RiUserHeartLine,
  RiSettings2Line,
  RiDownloadCloud2Line,
  RiCheckboxBlankCircleFill,
  RiCloseLine,
  RiNotification3Line,
  RiSearchLine,
  RiArrowRightSLine,
  RiArrowRightCircleLine,
  RiArrowLeftCircleLine,
} from "react-icons/ri";
import { AiOutlineAppstoreAdd, AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineLiveTv } from "react-icons/md";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="bg-[#141414] min-h-screen">
        <sidebar
          className={`lg:left-0 fixed  top-0 w-80 h-full overflow-y-scroll border-r border-gray-800 p-8 flex flex-col justify-between transition-all z-50 ${
            showMenu ? "left-0" : "-left-full"
          }`}
        >
          <div>
            {/* Logo */}
            <h1 className="uppercase text-gray-300 font-bold text-2xl tracking-[2px] mb-10">
              E.P Game Store
            </h1>

            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
                >
                  <RiHome4Line />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
                >
                  <AiOutlineAppstoreAdd />
                  Store
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
                >
                  <AiOutlineAppstore />
                  Library
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
                >
                  <RiUserHeartLine />
                  Friends
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
                >
                  <MdOutlineLiveTv />
                  Live
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
                >
                  <RiDownloadCloud2Line />
                  Downloads
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
                >
                  <RiSettings2Line />
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors"
                >
                  <img
                    src="https://cdn.dribbble.com/users/63303/screenshots/2770549/media/10aa7791278421baaf53c249eb1c2981.png?compress=1&resize=400x300&vertical=top"
                    className="w-6 h-6 object-cover rounded-full ring-2 ring-gray-200"
                  />
                  <RiCheckboxBlankCircleFill className="absolute text-green-600 bottom-3 left-8 text-xs text-[8px]" />
                  Esteban Pastor
                </a>
              </li>
            </ul>
          </div>
          {/* Responsive button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden bg-blue-600 text-white fixed bottom-6 right-6 p-2 text-lg rounded-full z-50"
          >
            {showMenu ? <RiCloseLine /> : <AiOutlineAppstore />}
          </button>
        </sidebar>
        {/* Header */}
        <header className="lg:pl-[340px] w-full flex flex-col md:flex-row items-center justify-between gap-4 p-4 ">
          <nav className="flex items-center gap-4 order-1 lg:order-none">
            <a
              href="#"
              className="bg-blue-600 text-white p-2 px-4 rounded-full"
            >
              Discover
            </a>
            <a href="#" className=" text-gray-500 p-2 px-4 rounded-full">
              Browse
            </a>
            <a href="#" className=" text-gray-500 p-2 px-4 rounded-full">
              Wishlist
            </a>
          </nav>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#" className="text-gray-500 text-lg">
                <RiNotification3Line />
              </a>
            </li>
            <li>
              <form className="relative">
                <RiSearchLine className="text-gray-500 absolute top-3 left-2" />
                <input
                  type="text"
                  className=" bg-[#232323] outline-none text-gray-300 py-2 pl-8 pr-4 rounded-full w-full"
                  placeholder="Search games"
                />
              </form>
            </li>
          </ul>
        </header>
        {/* Content */}
        <main className="lg:pl-[340px] pt-36 p-8">
          <div className="grid grid:cols-1 md:grid-cols-6 gap-2">
            <div className="md:col-span-5 relative">
              <img
                src="https://www.cronista.com/files/image/445/445542/61f5f904a41b5.jpg"
                className="w-full h-[500px] object-cover lg:rounded-tl-xl lg:rounded-bl-xl"
              />
              <h1 className="absolute top-4 left-4 text-3xl text-white font-bold">
                Fortnite
              </h1>
              <div className="absolute left-0 bottom-0 p-8 max-w-xl">
                <p className="text-gray-200">Update</p>
                <h2 className="text-3xl text-white font-extrabold mb-4">
                  The hunt is on in Fortnite Chapter 2 - Season 5: Zero Point.
                </h2>
                <button className="bg-blue-600 text-white py-4 px-6 rounded-xl flex items-center gap-3 text-lg group">
                  Play for free
                  <RiArrowRightSLine className="group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
            {/* Games */}
            <div className="col-span-1 w-full h-[500px] bg-[#232323] lg:rounded-tr-xl lg:rounded-br-xl">
              <ul className="p-4 flex flex-col gap-6 h-full overflow-y-scroll">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 text-white text-lg"
                  >
                    <img
                      src="https://culturageek.com.ar/wp-content/uploads/2021/12/fortnite-chapter-3-season-1-battle-pass-1920x1080-1b5b99af947a.jpg"
                      className="w-20 h-full object-cover "
                    />
                    <span className="md:hidden lg:block"> Fortnite</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 text-white text-lg"
                  >
                    <img
                      src="https://www.muycomputer.com/wp-content/uploads/2021/02/Gu%C3%ADa-Valheim-todo-lo-que-debes-saber-1000x600.jpg"
                      className="w-20 h-full object-cover "
                    />
                    <span className="md:hidden lg:block">Valheim</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 text-white text-lg"
                  >
                    <img
                      src="https://media.vandal.net/i/640x360/4-2021/20214281225070_1.jpg"
                      className="w-20 h-full object-cover "
                    />
                    <span className="md:hidden lg:block">
                      The binding of Isaac
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 text-white text-lg"
                  >
                    <img
                      src="https://as01.epimg.net/meristation/imagenes/2022/12/12/avances/1670850764_905786_1670852753_noticia_normal.jpg"
                      className="w-20 h-full object-cover "
                    />
                    <span className="md:hidden lg:block">The Witcher 3</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 text-white text-lg"
                  >
                    <img
                      src="https://as01.epimg.net/meristation/imagenes/2020/09/23/noticias/1600849560_494635_1600849813_portada_normal.jpg"
                      className="w-20 h-full object-cover "
                    />
                    <span className="md:hidden lg:block">Rocket League</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 text-white text-lg"
                  >
                    <img
                      src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/BPRQAKGVMNDF3FDBLDW5S3SXLU.jpg"
                      className="w-20 h-full object-cover "
                    />
                    <span className="md:hidden lg:block">Elden Ring</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Slide video games */}
          <div className="mt-10 mb-6 flex items-center justify-between">
            <h5 className="text-gray-300 text-2xl">Games on sale</h5>
            <div className="text-gray-500 text-4xl flex items-center gap-4">
              <RiArrowLeftCircleLine className="cursor-pointer" />
              <RiArrowRightCircleLine className="cursor-pointer text-white" />
            </div>
          </div>
          {/* Video games */}

          <div className="grid lg:grid-cols-5">
            <div className="p-4">
              <img
                src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/f/fire-emblem-three-houses-switch/hero"
                className="w-full h-80 object-cover rounded-xl mb-2"
              />
              <h3 className="text-gray-300 text-lg">Fire emblem</h3>
              <p className="text-gray-500 mb-3">Tactical role </p>
              <span className="text-white">$5.00</span>
            </div>
            <div className="p-4">
              <img
                src="https://cdn1.epicgames.com/offer/df2da503f2074f078f8090da3c27ec47/EGS_BioShockInfiniteCompleteEdition_MassMediaGames_S1_2560x1440-bf29199cfe7a76f62965f582571024f6"
                className="w-full h-80 object-cover rounded-xl mb-2"
              />
              <h3 className="text-gray-300 text-lg">Bioshock Infinite</h3>
              <p className="text-gray-500 mb-3">Shooter </p>
              <span className="text-white">$5.00</span>
            </div>
            <div className="p-4">
              <img
                src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AF4C70A83DD2C1CA3D3500078634529CAE4FF03C615532DB83FBFE8329DCEAE8/scale?width=1200&aspectRatio=1.78&format=jpeg"
                className="w-full h-80 object-cover rounded-xl mb-2"
              />
              <h3 className="text-gray-300 text-lg">Hitman</h3>
              <p className="text-gray-500 mb-3">Tactical Shooter </p>
              <span className="text-white">$7.50</span>
            </div>
            <div className="p-4">
              <img
                src="https://i.3djuegos.com/juegos/17182/the_punisher__capcom_/fotos/ficha/the_punisher__capcom_-5097524.jpg"
                className="w-full h-80 object-cover rounded-xl mb-2"
              />
              <h3 className="text-gray-300 text-lg">The Punisher</h3>
              <p className="text-gray-500 mb-3">Arcade Shooter </p>
              <span className="text-white">$8.00</span>
            </div>
            <div className="p-4">
              <img
                src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/f/fire-emblem-three-houses-switch/hero"
                className="w-full h-80 object-cover rounded-xl mb-2"
              />
              <h3 className="text-gray-300 text-lg">Cadillacs & Dinosaurs</h3>
              <p className="text-gray-500 mb-3">Arcade shooter</p>
              <span className="text-white">$12.00</span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
