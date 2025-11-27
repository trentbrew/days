"use client"

import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"

export function DynamicBreadcrumb() {
  const pathname = usePathname()
  
  // Split pathname into segments and filter out empty strings
  const segments = pathname.split("/").filter(Boolean)
  
  // Capitalize first letter of each segment
  const formatSegment = (segment: string) => {
    return segment.charAt(0).toUpperCase() + segment.slice(1)
  }
  
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1
          const href = "/" + segments.slice(0, index + 1).join("/")
          
          return (
            <div key={segment} className="contents">
              <BreadcrumbItem className={index > 0 ? "hidden md:block" : ""}>
                {isLast ? (
                  <BreadcrumbPage>{formatSegment(segment)}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>
                    {formatSegment(segment)}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && (
                <BreadcrumbSeparator className="hidden md:block" />
              )}
            </div>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
