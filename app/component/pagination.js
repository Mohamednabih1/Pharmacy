import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="../" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/1" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/2">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/3">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="/4" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}