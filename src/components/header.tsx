import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between pt-6 px-5">
      <Image src="/logo.png" height={30} width={100} alt="Logo FSW" />
      <Button
        size="icon"
        variant="outline"
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
}
