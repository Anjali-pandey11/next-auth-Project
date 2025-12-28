"use client"
import { logout } from "@/action/logout";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Card,CardHeader,CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { settings } from "@/action/setting";
import { useTransition } from "react";
import { useSession } from "next-auth/react";


const SettingsPage =  () => {

  const {update} = useSession()
  const [isPending, startTransition] = useTransition()

  const onClick = () => {
    startTransition(() => {
      settings({
      name:"New Name!"
    })
    .then(()=>{
      update()
    })
    })
    
  }

  return (
    <Card className="w-[600px]">
       <CardHeader>
        <p className="text-2xl font-semibold text-center">
         ❄️ Settings
        </p>
       </CardHeader>
       <CardContent>
         <Button disabled={isPending}
         onClick={onClick}>
          update name
         </Button>
       </CardContent>
    </Card>
  )
}

export default SettingsPage;