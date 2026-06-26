// components
import {Button} from '@/components/ui/button';

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import Logo from '@/components/Logo';
import MobileMenu from './ui/MobileMenu';


/**
 *  assets
 * */ 
import {Menu} from 'lucide-react';

/**
 * Constatnts
 */
import {navMenu} from '@/constants';


const Header = () => {
  return (
    <header className="h-16 grid grid-cols-1 items-center md:h-20 lg:h-24">
      <div className="container flex justify-between">
        <Logo variant='icon'/>

    
        <Popover>
          <PopoverTrigger asChild>
            <Button variant='outline' size='icon' className='lg:hidden'>
               <Menu />
            </Button>
          </PopoverTrigger>

          <PopoverContent>
            <MobileMenu />
          </PopoverContent>
        </Popover>

        
      </div>
    </header>

  )
}

export default Header