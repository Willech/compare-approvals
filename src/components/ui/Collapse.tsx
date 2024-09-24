import {
    Collapse,
    Button,
  } from "@material-tailwind/react";
import { useState } from "react";
   
export default function CollapseDefault({ title, children }: { title: string; children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => setOpen((cur) => !cur);

    return (
        <div>
        <Button className='mb-2' onClick={toggleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{open ? 'Lukk' : title}</Button>
        <Collapse open={open}>
            <div className='flex flex-col gap-2'>
                {children}
            </div>
        </Collapse>
            </div>
    );
}