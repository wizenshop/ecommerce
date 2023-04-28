import React from "react"
import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"

type ActiveLinkProps = {
  children: React.ReactNode
} & LinkProps

export function ActiveLink({ href, children, ...res }: ActiveLinkProps) {
  const pathName = usePathname()
  const isCurrentPath = pathName == href

  return <Link {...res} href={href}>{children}</Link>
}
