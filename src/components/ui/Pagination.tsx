import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import type { color, variant } from "@material-tailwind/react/types/components/button";
 
export function DefaultPagination({active, setActive}: {active: number, setActive: React.Dispatch<React.SetStateAction<number>>}) {
 
  const getItemProps = (index: number) =>
      ({
        variant: active === index ? "filled" : "text" as variant,
        color: 'gray' as color,
        onClick: () => setActive(index),
      } );
 
  const next = () => {
    if (active === 5) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };
 
  return (
    <div className="flex items-center gap-4">
      <Button
              variant="text"
              className="flex items-center gap-2"
              onClick={prev}
              disabled={active === 1} 
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Forrige
      </Button>
      <div className="flex items-center gap-2">
        <IconButton placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} {...getItemProps(1)}>1</IconButton>
        <IconButton placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} {...getItemProps(2)}>2</IconButton>
        <IconButton placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} {...getItemProps(3)}>3</IconButton>
        <IconButton placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} {...getItemProps(4)}>4</IconButton>
        <IconButton placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} {...getItemProps(5)}>5</IconButton>
      </div>
      <Button
              variant="text"
              className="flex items-center gap-2"
              onClick={next}
              disabled={active === 5}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}      >
        Neste
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}