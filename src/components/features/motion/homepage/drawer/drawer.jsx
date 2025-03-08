// "use client"

// import * as React from "react"
// import { Minus, Plus } from "lucide-react"

// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer"

// interface SidebarDrawerProps {
//     open: boolean;
//     setOpen: (value: boolean) => void;
//   }

// export function SidebarDrawer({ open, setOpen }: SidebarDrawerProps) {
//     const [goal, setGoal] = React.useState(350)

//   function onClick(adjustment: number) {
//     setGoal(Math.max(200, Math.min(400, goal + adjustment)))
//   }



//   return (
//     <div className="    ">
//       <Drawer open={open} onOpenChange={setOpen} direction="bottom">
//       <DrawerContent className="fixed top-0 left-0 w-full h-screen bg-white shadow-lg z-50">
//         <div className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
//           <DrawerHeader>
//             <DrawerTitle> Owl Sync</DrawerTitle>
//             {/* <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
//           </DrawerHeader>
//           <div className="p-4 pb-0">
//             <div className="flex items-start justify-center space-x-2">
//                 Mens
//             </div>
//             <div className="flex items-start justify-center space-x-2">
//                 Women
//             </div>
//             <div className="flex items-start justify-center space-x-2">
//                 Kids
//             </div>
//           </div>
//           <DrawerFooter>
//             <DrawerClose asChild>
//               <button className="w-full sm:w-auto">Cancel</button>
//             </DrawerClose>
//           </DrawerFooter>
//         </div>
//       </DrawerContent>
//     </Drawer>
//     </div>

//   )
// }

import React from 'react'

const drawer = () => {
  return (
    <div>drawer</div>
  )
}

export default drawer