"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter, PT_Sans, Abril_Fatface } from 'next/font/google'
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const Pt = PT_Sans({
  subsets: ['latin'],
  variable: '--font-Pt_Sans',
  weight: '700'
})

const abril = Abril_Fatface({
  subsets: ['latin'],
  variable: '--font-abril_Fatface',
  weight: '400'
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Archivo+Black&family=Monoton&display=swap" rel="stylesheet"/>
        <title>Blair Chappell Portfolio</title>
        <link rel="icon" href="/plane.png" />
      </head>
      
      <AnimatePresence mode='wait'>
        <body className={`${Pt.variable}`}>{children}</body>
      </AnimatePresence>
      
    </html>
  )
}
