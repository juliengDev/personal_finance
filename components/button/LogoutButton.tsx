import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { LogOut } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

function LogoutButton({ isVisible }: { isVisible?: boolean }) {
  const [open, setOpen] = useState(false);

  function handleLogout() {
    signOut({
      callbackUrl: '/',
    });
  }

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        style={{ paddingLeft: '4px' }}
        className={`z-10 flex flex-col pl-2 whitespace-nowrap text-gray-300 transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-gray-100 xl:flex-row ${isVisible ? 'max-w-32 opacity-100' : 'max-w-0 overflow-hidden opacity-0'}`}
      >
        <LogOut
          size={20}
          style={{
            transform: 'rotate(180deg)',
            width: '20px',
            height: '20px',
          }}
        />
        <p className="text-grey-300 hover:text-grey-100 z-50 ml-2 hidden text-base whitespace-nowrap opacity-100 transition-all duration-300 ease-in-out xl:block">
          Logout
        </p>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-[35rem] rounded-2xl border-none bg-white p-8 shadow-xl sm:w-auto">
          <DialogHeader>
            <DialogTitle
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '20px',
              }}
              className="text-grey-900"
            >
              Logout
            </DialogTitle>
            <DialogDescription
              className="text-grey-500"
              style={{
                fontSize: '0.875rem',
                marginBottom: '20px',
              }}
            >
              Are you sure you want to logout from the application?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-row justify-end gap-2">
            <Button
              className="cursor-pointer"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="cursor-pointer"
              variant="destructive"
              onClick={handleLogout}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default LogoutButton;
