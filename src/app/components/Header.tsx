import BackButton from "./BackButton";
import LangSelector from "./LangSelector";

const Header = () => {
  return (
    <div className="fixed top-0 z-10 w-full py-3 text-white bg-purple-700">
      <div className="flex justify-between px-5 mx-auto max-w-screen-2xl 2xl:px-0">
        <h1 className="text-2xl font-bold">
          <span className="hidden md:block">PokeSearch</span>
          <span className="block md:hidden">PSearch</span>
        </h1>
        <LangSelector />
        <BackButton />
      </div>
    </div>
  );
};

export default Header;
