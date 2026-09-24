# dialog playground examples

Snapshot of the named examples on https://cloudscape.design/components/dialog/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

- Wrapper:

  ```jsx
  <SpaceBetween size="m">
    {dialogOpen && <Dialog />}
    <Button onClick={() => setDialogOpen(true)}>Open dialog</Button>
  </SpaceBetween>
  ```

## Examples

### Default

Playground id: `default`

- `header`:

  ```jsx
  <span>{[
    'Which ecosystem are you using?',
    'Which interface are you using?',
  ][currentQuestion - 1]}</span>
  ```
- `headerActions`:

  ```jsx
  <Pagination
    pagesVariant="compact"
    currentPageIndex={currentQuestion}
    pagesCount={2}
    onChange={({ detail }) => setCurrentQuestion(detail.currentPageIndex)}
    ariaLabels={{
      nextPageLabel: 'Next question',
      previousPageLabel: 'Previous question',
      pageLabel: pageNumber => `Question ${pageNumber}`,
    }}
    i18nStrings={{
      pagesCompactText: ({ currentPage, pagesCount }) => `${currentPage} of ${pagesCount}`,
    }}
  />
  ```
- `children`:

  ```jsx
  <Form>
    <RadioGroup
      ariaLabel={['Ecosystem', 'Interface'][currentQuestion - 1]}
      value={answers[currentQuestion]}
      onChange={({ detail }) => setAnswers({ ...answers, [currentQuestion]: detail.value })}
      items={[
        [
          { value: 'macos', label: 'macOS' },
          { value: 'windows', label: 'Windows' },
        ],
        [
          { value: 'command-line', label: 'Command line' },
          { value: 'ide', label: 'Integrated development environment (IDE)' },
        ],
      ][currentQuestion - 1]}
    />
  </Form>
  ```
- `footer`:

  ```jsx
  <Box float="right">
    <SpaceBetween direction="horizontal" size="xs">
      <Button variant="link" onClick={() => setDialogOpen(false)}>Cancel</Button>
      <Button
        variant="primary"
        onClick={() => {
          if (currentQuestion < 2) {
            setCurrentQuestion(currentQuestion + 1);
          } else {
            setDialogOpen(false);
          }
        }}
      >
        {currentQuestion < 2 ? 'Next' : 'Submit'}
      </Button>
    </SpaceBetween>
  </Box>
  ```
- `onDismiss`: `() => setDialogOpen(false)`
