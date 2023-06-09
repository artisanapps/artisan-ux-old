import React, {useEffect, useState} from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export interface DragAndDropProviderProps {
    rootElementID: string;
    children?: any;
}

const TreeDragAndDropProvider = (props: DragAndDropProviderProps) => {
    const [context, setContext] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setContext(document.getElementById(props.rootElementID));
    }, [props.rootElementID]);

    console.log(context)

    return context ? (
        <DndProvider backend={HTML5Backend} options={{ rootElement: context }}>
            {props.children}
        </DndProvider>
    ) : null;
}

export default TreeDragAndDropProvider;
