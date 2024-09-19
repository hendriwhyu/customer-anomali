import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';
import { CircleUser, Menu, Package2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { User } from '@/types';

function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function CartButton({ itemCount = 0 }) {
  return (
    <Button variant="outline" size="icon" className="relative">
      <ShoppingCart className="h-5 w-5" />
      <span className="sr-only">View Cart</span>

      {/* Badge for notification */}
      {itemCount > 0 && (
        <Badge
          variant="secondary"
          className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 justify-center bg-black text-white">
          {itemCount}
        </Badge>
      )}
    </Button>
  );
}

function Navbar() {
  const [user, setUser] = React.useState<User | null>(null);

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="flex items-center justify-between w-full">
        {/* Logo dan Search Bar */}
        <div className="flex items-center gap-8">
          <Link
            to="#"
            className="flex items-center gap-2 text-lg font-semibold">
            <h2>Anomali</h2>
          </Link>

          <div className="hidden md:flex items-center">
            <form className="flex-1 sm:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[400px]"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Button dan menu di bagian kanan */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Menu links hanya di desktop */}
          <nav className="hidden md:flex gap-5">
            <Link
              to="#"
              className="text-muted-foreground transition-colors hover:text-foreground font-semibold">
              Home
            </Link>
            <Link
              to="#"
              className="text-muted-foreground transition-colors hover:text-foreground font-semibold">
              Products
            </Link>
            <Link
              to="#"
              className="text-muted-foreground transition-colors hover:text-foreground font-semibold">
              Services
            </Link>
          </nav>

          {/* Sign In button hanya di desktop */}
          <div className="hidden md:flex gap-2">
            <Button>Sign In</Button>
          </div>

          {/* User Dropdown atau Cart Button, tetap terlihat di mobile */}
          {user ? <UserDropdown /> : <CartButton itemCount={3} />}

          {/* Mobile Menu (Hamburger) hanya untuk mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-5 text-lg font-medium">
                <Link
                  to="#"
                  className="flex items-center gap-2 text-lg font-semibold">
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Anomali</span>
                </Link>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground font-semibold">
                  Home
                </Link>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground font-semibold">
                  Products
                </Link>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground font-semibold">
                  Services
                </Link>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground font-semibold">
                  Sign In
                </Link>

              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
