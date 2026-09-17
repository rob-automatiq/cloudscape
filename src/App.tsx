import { useState } from 'react'
import { HashRouter, useLocation, useNavigate } from 'react-router-dom'
import AppLayout from '@cloudscape-design/components/app-layout'
import ContentLayout from '@cloudscape-design/components/content-layout'
import Header from '@cloudscape-design/components/header'
import Container from '@cloudscape-design/components/container'
import SpaceBetween from '@cloudscape-design/components/space-between'
import Input from '@cloudscape-design/components/input'
import Button from '@cloudscape-design/components/button'
import Box from '@cloudscape-design/components/box'
import FormField from '@cloudscape-design/components/form-field'

function RouteDisplay() {
  const location = useLocation()
  const navigate = useNavigate()
  const [input, setInput] = useState('')

  const go = () => {
    const path = input.startsWith('/') ? input : `/${input}`
    navigate(path)
    setInput('')
  }

  return (
    <SpaceBetween size="l">
      <Container header={<Header variant="h2">Current route</Header>}>
        <Box variant="code" fontSize="heading-l">
          #{location.pathname}{location.search}{location.hash}
        </Box>
      </Container>

      <Container header={<Header variant="h2">Navigate</Header>}>
        <FormField label="Enter a route">
          <SpaceBetween size="xs" direction="horizontal">
            <Input
              value={input}
              onChange={({ detail }) => setInput(detail.value)}
              onKeyDown={({ detail }) => detail.key === 'Enter' && go()}
              placeholder="/some/path"
            />
            <Button variant="primary" onClick={go}>Go</Button>
          </SpaceBetween>
        </FormField>
      </Container>
    </SpaceBetween>
  )
}

export default function App() {
  return (
    <HashRouter>
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
            <RouteDisplay />
          </ContentLayout>
        }
      />
    </HashRouter>
  )
}
