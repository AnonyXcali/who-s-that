"use client"
import React, { type PropsWithChildren} from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from './ui/button'

type DrawerComponent = {
  children: React.ReactNode,
  title?: string,
  drawerTitle?: string,
  drawerDescription?: string,
  customClassName?: string,
  customDrawerTitleClassName?: string,
  hideDrawerHeader: boolean,
}


export default function DrawerComponent({
  children,
  title = "Hints!",
  drawerTitle = "Hints!",
  drawerDescription = "Use the hints to guess the person!.",
  customClassName = "hint",
  customDrawerTitleClassName = "drawer-title",
  hideDrawerHeader = false,
} : DrawerComponent) {
  return (
    <Drawer>
      <DrawerTrigger
        className={customClassName}
      >
        {title}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader
          style={{
            display: hideDrawerHeader ? "none" : "block",
          }}
        >
          <DrawerTitle
            className={customDrawerTitleClassName}
          >
            {drawerTitle}
          </DrawerTitle>
          <DrawerDescription
            className='drawer-description'
          >
            {drawerDescription}
          </DrawerDescription>
        </DrawerHeader>
         {children}
        <DrawerFooter>
          
          <Button asChild>
            <DrawerClose>
                Close
            </DrawerClose>
          </Button>
        </DrawerFooter>
      </DrawerContent>
  </Drawer>
  )
}
