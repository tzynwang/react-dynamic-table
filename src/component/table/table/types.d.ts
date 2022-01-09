export interface DynamicTableProps {
  TableHeaderCol: any[]
  TableRow: any[]
  renderRowCol: (row: unknown, headerCol: unknown) => any
  renderRowUrl?: (row: unknown) => string
  isLink?: boolean
  isTable?: boolean
}
