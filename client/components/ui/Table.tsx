import {
  ReactNode,
  HTMLAttributes,
  ThHTMLAttributes,
  TdHTMLAttributes,
} from "react";
import { cn } from "../../lib/utils";

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children: ReactNode;
}

interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
  hover?: boolean;
}

interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}

interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}

// Container for table with border and styling
interface TableContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title?: string;
  actions?: ReactNode;
}

export function TableContainer({
  children,
  title,
  actions,
  className,
  ...props
}: TableContainerProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 p-4 rounded-xl border border-datalab-grey-medium bg-white w-full",
        className,
      )}
      {...props}
    >
      {(title || actions) && (
        <div className="flex justify-between items-center">
          {title && (
            <h3 className="text-datalab-grey-darkest font-medium text-lg">
              {title}
            </h3>
          )}
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}
      {children}
    </div>
  );
}

export function Table({ children, className, ...props }: TableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className={cn("w-full border-collapse", className)} {...props}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({
  children,
  className,
  ...props
}: TableHeaderProps) {
  return (
    <thead className={cn("", className)} {...props}>
      {children}
    </thead>
  );
}

export function TableBody({ children, className, ...props }: TableBodyProps) {
  return (
    <tbody className={cn("", className)} {...props}>
      {children}
    </tbody>
  );
}

export function TableRow({
  children,
  hover = true,
  className,
  ...props
}: TableRowProps) {
  return (
    <tr
      className={cn(
        "border border-datalab-grey-lightest bg-white",
        hover && "hover:bg-datalab-grey-light/50 transition-colors",
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  );
}

export function TableHead({ children, className, ...props }: TableHeadProps) {
  return (
    <th
      className={cn(
        "h-14 px-4 py-3 text-left text-datalab-grey-darker text-sm font-semibold border border-datalab-grey-lightest bg-white first:rounded-tl-lg last:rounded-tr-lg",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  );
}

export function TableCell({ children, className, ...props }: TableCellProps) {
  return (
    <td
      className={cn(
        "h-14 px-4 py-3 text-datalab-grey-darkest text-sm font-normal border border-datalab-grey-lightest",
        className,
      )}
      {...props}
    >
      {children}
    </td>
  );
}
