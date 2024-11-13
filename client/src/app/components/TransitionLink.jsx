'use client'
import React from 'react'
import Link  from "next/link"
import {useRouter} from "next/navigation"
import "../globals.css"


function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

const TransitionLink = ({
    children,
    href,
    ...props
}) => {

    const router = useRouter();

    const handleTransition = async (e) => {
        e.preventDefault();

        const body = document.querySelector("body");
        body?.classList.add('page-transition')

         await sleep(500)

        router.push(href)

        await sleep(500)
        body?.classList.remove('page-transition')
    }
  return (
    <Link 
    onClick={handleTransition}
    href={href} {...props}>{children}</Link>
  )
}

export default TransitionLink
