import React from 'react';
import './styles.scss';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            ElemBefore: React.ReactNode;
        }
    }
}
export declare type NavItemProps = {
    title: string;
    itemId: string;
    disable?: boolean;
    elemBefore?: React.FC<unknown>;
    subNav?: NavItemProps[];
};
export declare type SideNavProps = {
    items: NavItemProps[];
    activeItemId: string;
    onSelect?: ({ itemId }: {
        itemId: string;
    }) => void;
};
declare const Navigation: React.FC<SideNavProps>;
export default Navigation;
