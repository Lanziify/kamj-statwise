
export interface ActionMenu<T> {
    name: string
    icon: JSX.Element
    onClick: (data: T) => void
}
