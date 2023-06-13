import React from "react";
export interface DragAndDropProviderProps {
    rootElementID: string;
    children?: any;
}
declare const TreeDragAndDropProvider: (props: DragAndDropProviderProps) => React.JSX.Element | null;
export default TreeDragAndDropProvider;
