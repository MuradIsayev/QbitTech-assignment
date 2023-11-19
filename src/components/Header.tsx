import { ModeToggle } from './mode-toggle';
import { Separator } from './ui/separator';

const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between mb-2">
        <h3 className="text-3xl">MyHouse</h3>
        <ModeToggle />
      </nav>
      <Separator />
    </>
  );
};

export default Header;
