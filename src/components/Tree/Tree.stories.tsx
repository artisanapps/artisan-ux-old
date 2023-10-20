import Tree from './Tree';
import {TreeProps} from "./Tree.types";
import {ThemeProvider} from "../Provider/ArtisanUXProvider.stories";

const meta = {
  component: Tree,
  title: "ArtisanUX/Tree"
}

export default meta;

export const Basic = (args: TreeProps) => (
    <ThemeProvider>
      <Tree {...args} />
    </ThemeProvider>
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
    <ThemeProvider>
      <Tree {...args} />
    </ThemeProvider>
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
    <ThemeProvider>
      <Tree {...args} />
    </ThemeProvider>
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

export const ActionTree = (args: TreeProps) => (
    <ThemeProvider>
      <Tree {...args} />
    </ThemeProvider>
)

ActionTree.args = {
  treeID: "nested-tree",
  items: [
    {
      adapter: {
        id: "appl1",
        primaryText: "Apple",
        secondaryText: "One a day keeps the doctor away",
        actions: [
          {
            label: "Cut",
            onClick: () => alert("Finished cutting apple")
          },
          {
            label: "Mash",
            onClick: () => alert("Mashed into apple sauce")
          }
        ]
      }
    },
    {
      adapter: {
        id: "item2",
        primaryText: "Banana",
        secondaryText: "Bananas!",
        actions: [
          {
            label: "Peel",
            onClick: () => alert("Naked banana")
          },
          {
            label: "Throw on ground",
            onClick: () => alert("User slipped!")
          }
        ]
      }
    }
  ]
}

export const Pending = (args: TreeProps) => (
    <ThemeProvider>
      <Tree {...args} />
    </ThemeProvider>
)

Pending.args = {
  treeID: "basic-pending",
  pending: true,
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

export const ClickableItems = (args: TreeProps) => (
    <ThemeProvider>
      <Tree {...args} />
    </ThemeProvider>
)

ClickableItems.args = {
  treeID: "clickable-items",
  items: [
    {
      adapter: {
        id: "item1",
        primaryText: "Hyperlink",
        secondaryText: "Click title to navigate to Basic tree",
        primaryAction: {
          navigateToURL: "/?path=/story/artisanux-tree--basic"
        }
      }
    },
    {
      adapter: {
        id: "item2",
        primaryText: "Click action",
        secondaryText: "Click title to see alert message",
        primaryAction: {
          clickAction: () => alert("Clicked item 2")
        }
      }
    }
  ]
}
