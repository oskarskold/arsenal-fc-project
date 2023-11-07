import { NavbarProps, useWorkspace } from 'sanity';
import { Card, Stack, Text, Flex } from '@sanity/ui';

function StudioNavbar(props: NavbarProps) {
  const { dataset, currentUser, projectId } = useWorkspace();
  const isStaging = dataset === 'staging';

  if (isStaging) {
    return (
      <Stack>
        <Card padding={3} tone="caution">
          <Flex gap={5}>
            <Text size={1}>
              Dataset: <strong>{dataset}</strong>
            </Text>
          </Flex>
        </Card>

        {props.renderDefault(props)}
      </Stack>
    );
  }

  return props.renderDefault(props);
}

export default StudioNavbar;