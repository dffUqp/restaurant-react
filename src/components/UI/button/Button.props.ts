export interface IButton {
    color?: string;
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}