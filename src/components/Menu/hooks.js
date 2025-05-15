import { useState } from 'react';

function useMenu() {
  const [open, setOpen] = useState(false);

  return { open, setOpen };
}

export default useMenu;