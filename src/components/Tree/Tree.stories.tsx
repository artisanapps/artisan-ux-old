import Tree from './Tree';
import {TreeProps} from "./Tree.types";

const meta = {
  component: Tree,
  title: "ArtisanUX/Tree"
}

export default meta;

export const Basic = (args: TreeProps) => (
  <Tree {...args} />
)

Basic.args = {
  treeID: "basic-tree",
  items: [
    {
      adapter: {
        id: "item1",
        primaryText: "Item 1",
        secondaryText: "Item 1 was our first item"
      }
    },
    {
      adapter: {
        id: "item2",
        primaryText: "Item 2",
        secondaryText: "Second item"
      }
    }
  ]
}

export const NestedList = (args: TreeProps) => (
  <Tree {...args} />
)

NestedList.args = {
  treeID: "nested-tree",
  items: [
    {
      adapter: {
        id: "item1",
        primaryText: "Item 1",
        secondaryText: "Item 1 was our first item"
      }
    },
    {
      adapter: {
        id: "item2",
        primaryText: "Item 2",
        secondaryText: "Second item"
      }
    },
    {
      adapter: {
        id: "group1",
        primaryText: "Group 1",
        childItems: [
          {
            adapter: {
              id: "item1-1",
              primaryText: "Subitem 1",
              secondaryText: "Summary sentence sub1"
            }
          },
          {
            adapter: {
              id: "item1-2",
              primaryText: "Subitem 2",
              secondaryText: "Summary sentence sub2"
            }
          }
        ]
      }
    }
  ]
}

export const DraggableTree = (args: TreeProps) => (
    <Tree {...args} />
)

DraggableTree.args = {
  treeID: "draggable-tree",
  items: [
    {
      adapter: {
        id: "item1",
        primaryText: "Item 1",
        secondaryText: "Item 1 was our first item"
      },
      dragDropAdapter: {
        itemID: "item1",
        itemType: "item",
        dragData: {
          itemID: 1,
          payload: {
            name: "Item 1"
          }
        },
        canDrop: (droppedItemDragData) => true,
        onDrop: (droppedItemDragData) => alert(`Dropped item ${droppedItemDragData.payload.name} on Item 1`)
      }
    },
    {
      adapter: {
        id: "item2",
        primaryText: "Item 2",
        secondaryText: "Second item"
      },
      dragDropAdapter: {
        itemID: "item2",
        itemType: "item",
        dragData: {
          itemID: 2,
          payload: {
            name: "Item 2"
          }
        },
        canDrop: (droppedItemDragData) => true,
        onDrop: (droppedItemDragData) => alert(`Dropped item ${droppedItemDragData.payload.name} on Item 2`)
      }
    },
    {
      adapter: {
        id: "item3",
        primaryText: "Item 3",
        secondaryText: "Third item"
      },
      dragDropAdapter: {
        itemID: "item3",
        itemType: "item",
        dragData: {
          itemID: 3,
          payload: {
            name: "Item 3"
          }
        },
        canDrop: (droppedItemDragData) => true,
        onDrop: (droppedItemDragData) => alert(`Dropped item ${droppedItemDragData.payload.name} on Item 3`)
      }
    }
  ]
}
