import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const NavBar: React.FC = () => {
  return (
    <NavigationMenu>
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <Link to="/" className="text-lg font-bold">MyApp</Link>
        <NavigationMenuList className="flex space-x-4">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/about" className="hover:text-gray-300">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>More</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/services" className="hover:text-gray-300">Services</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/faq" className="hover:text-gray-300">FAQ</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <Button asChild>
          <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Login</Link>
        </Button>
      </div>
      <NavigationMenuIndicator />
      <NavigationMenuViewport />
    </NavigationMenu>
  );
};

export default NavBar;
