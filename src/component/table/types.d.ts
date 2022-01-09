export interface DynamicTableProps {
  TableHeaderCol: any[]
  TableRow: any[]
  renderRowCol: (row: any, headerCol: any) => any
}
