import AppLayout from '@cloudscape-design/components/app-layout'
import ContentLayout from '@cloudscape-design/components/content-layout'
import Header from '@cloudscape-design/components/header'
import Container from '@cloudscape-design/components/container'
import SpaceBetween from '@cloudscape-design/components/space-between'

export default function App() {
  return (
    <AppLayout
      navigationHide
      toolsHide
      content={
        <ContentLayout
          header={
            <Header variant="h1" description="Built with Cloudscape Design System">
              Hello, Cloudscape
            </Header>
          }
        >
          <SpaceBetween size="l">
            <Container
              header={<Header variant="h2">Getting started</Header>}
            >
              <p>
                This is your blank Cloudscape scaffold. Edit{' '}
                <code>src/App.tsx</code> to start building.
              </p>
            </Container>
          </SpaceBetween>
        </ContentLayout>
      }
    />
  )
}
