import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function Modals({onclick}: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-red-500 mb-4' variant="outline">Reset Cart</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="leading-5">Anda yakin ingin mengosongkan keranjang?</DialogTitle>
        </DialogHeader>
        
            
        <DialogFooter className='flex gap-2'>
          <DialogClose asChild>
          <Button>Batalkan</Button>
          </DialogClose>
          <Button variant={'outline'} onClick={onclick}>Reset</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
