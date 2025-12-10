import {Poppins} from "next/font/google";
import { Button } from "@/components/ui/button"
import {cn} from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets:["latin"],
  weight:["600"]
})

export default function Home() {
  return (
 <main className="h-full flex items-center justify-center flex-col 
  [background:radial-gradient(circle_at_top,var(--tw-gradient-from),var(--tw-gradient-to))]
  from-sky-400 to-blue-800">
   <div className="space-y-6 text-center">
     <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md",font.className,
     )}>🔐 Auth</h1>
     <p className="text-white text-lg">
      A simple authentication services
     </p>
     <div>
      <LoginButton >
      <Button variant="secondary" size="lg">
        Sign in
      </Button>
      </LoginButton>
     </div>
   </div>
</main>
  );
}  

