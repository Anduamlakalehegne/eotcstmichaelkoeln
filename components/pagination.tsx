"use client"

import * as React from "react"
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeftIcon as DoubleArrowLeft,
  ArrowRightIcon as DoubleArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Pagination = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("mx-auto w-full flex justify-center items-center", className)} {...props} />
  },
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => {
    return <ul ref={ref} className={cn("flex list-none flex-row items-center justify-center", className)} {...props} />
  },
)
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => {
    return <li ref={ref} className={cn("", className)} {...props} />
  },
)
PaginationItem.displayName = "PaginationItem"

const PaginationLink = React.forwardRef<
  HTMLAnchorElement,
  React.HTMLAttributes<HTMLAnchorElement> & {
    isActive?: boolean
  }
>(({ className, isActive, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="outline"
      size="icon"
      className={cn(
        "h-8 w-8 border-transparent bg-transparent font-normal data-[active=true]:bg-secondary data-[active=true]:text-secondary-foreground",
        isActive && "bg-secondary text-secondary-foreground",
        className,
      )}
      {...props}
      aria-current={isActive}
      data-active={isActive}
    />
  )
})
PaginationLink.displayName = "PaginationLink"

const PaginationNext = React.forwardRef<HTMLAnchorElement, React.HTMLAttributes<HTMLAnchorElement>>(
  ({ className, ...props }, ref) => {
    return (
      <Button ref={ref} variant="outline" size="icon" className={cn("h-8 w-8", className)} {...props}>
        <span className="sr-only">Go to next page</span>
        <ChevronRight className="h-4 w-4" />
      </Button>
    )
  },
)
PaginationNext.displayName = "PaginationNext"

const PaginationPrevious = React.forwardRef<HTMLAnchorElement, React.HTMLAttributes<HTMLAnchorElement>>(
  ({ className, ...props }, ref) => {
    return (
      <Button ref={ref} variant="outline" size="icon" className={cn("h-8 w-8", className)} {...props}>
        <span className="sr-only">Go to previous page</span>
        <ChevronLeft className="h-4 w-4" />
      </Button>
    )
  },
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationFirst = React.forwardRef<HTMLAnchorElement, React.HTMLAttributes<HTMLAnchorElement>>(
  ({ className, ...props }, ref) => {
    return (
      <Button ref={ref} variant="outline" size="icon" className={cn("h-8 w-8", className)} {...props}>
        <span className="sr-only">Go to first page</span>
        <DoubleArrowLeft className="h-4 w-4" />
      </Button>
    )
  },
)
PaginationFirst.displayName = "PaginationFirst"

const PaginationLast = React.forwardRef<HTMLAnchorElement, React.HTMLAttributes<HTMLAnchorElement>>(
  ({ className, ...props }, ref) => {
    return (
      <Button ref={ref} variant="outline" size="icon" className={cn("h-8 w-8", className)} {...props}>
        <span className="sr-only">Go to last page</span>
        <DoubleArrowRight className="h-4 w-4" />
      </Button>
    )
  },
)
PaginationLast.displayName = "PaginationLast"

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationFirst,
  PaginationLast,
}
