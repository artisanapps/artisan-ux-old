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
    { adapter: {
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

