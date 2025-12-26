"use client"
import { logout } from "@/action/logout";
import { useCurrentUser } from "@/hooks/use-current-user";


const SettingsPage =  () => {

  const user = useCurrentUser();

  const onClick = () => {
    logout();
  }

  return (
    <div className="bg-white p-8 rounded-xl">
        <button onClick={onClick} type="submit">
          Sign Out
        </button>
      
    </div>
  )
}

export default SettingsPage;