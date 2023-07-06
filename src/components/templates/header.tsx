import { AuthButtons, NavList } from "../molecules";

const Header = ():JSX.Element => {
  return (
    <section className="flex justify-between items-center py-3 lg:px-14 px-5">
      <div>
        <img src="/images/logo.svg" alt="" className="" />
      </div>
      <NavList />
      <AuthButtons />
    </section>
  )
}

export default Header;
