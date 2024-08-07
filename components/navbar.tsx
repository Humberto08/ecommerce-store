import Container from "@/components/ui/container";
import Link from "next/link";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import MainNav from "@/components/main-nav";
import logo from "@/assets/logo.png";
import Image from "next/image";




const Navbar = async () => {
  const categories = await getCategories();



  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          <Image src={logo} alt="Hstore logo" width={40} height={40} />
          <p className="font-bold text-xl">Hstore</p>
          <p className="text-neutral-500 ">Store parfum</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
export default Navbar;
