import { ReactComponent as AddNode } from '../../assets/icons/node-add.svg'
import { ReactComponent as RemoveNode } from '../../assets/icons/node-remove.svg'
import { useToolbar } from './hooks'
import { Container, Content, WithTooltipIconButton } from './styles'
import { ToolbarProps } from './types'

const Toolbar = ({ ...props }: ToolbarProps) => {
  const { handleCreateGhostNode, handleDeleteNode, selected } = useToolbar()

  return (
    <Container aria-label="Toolbar" role="toolbar" {...props}>
      <Content>
        <WithTooltipIconButton
          aria-label="Add Node"
          onClick={handleCreateGhostNode}
          tooltip="Add Node"
        >
          <AddNode />
        </WithTooltipIconButton>
        <WithTooltipIconButton
          aria-label="Remove Node"
          disabled={!selected}
          onClick={handleDeleteNode}
          tooltip={selected ? 'Remove Node' : undefined}
        >
          <RemoveNode />
        </WithTooltipIconButton>
      </Content>
    </Container>
  )
}

export type { ToolbarProps }

export default Toolbar
