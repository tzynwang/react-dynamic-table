export interface DynamicTableProps {
  TableHeaderCol: any[]
  TableRow: any[]
  renderRowCol: (row: any, headerCol: any) => any
  renderRowUrl?: (row: unknown) => string
  isLink?: boolean
  isTable?: boolean
}
