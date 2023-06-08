import Tree, {TreeProps} from './Tree';

const meta = {
  component: Tree,
  title: "ArtisanUX/Tree"
}

export default meta;

export const Basic = (args: TreeProps) => (
  <Tree {...args} />
)

Basic.args = {
  key: "basic-tree",
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
  key: "nested-tree",
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
