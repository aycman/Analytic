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


// assets
import {Menu} from 'lucide-react';


const Header = () => {
  return (
    <header className="h-16 grid grid-cols-1 items-center">
      <div className="container flex justify-between">
        <Logo variant='icon'/>

        <Button variant='outline' size='icon' className='lg:hidden'>
            <Menu />
        </Button>
      </div>
    </header>

  )
}

export default Header