# side-navigation playground examples

Snapshot of the named examples on https://cloudscape.design/components/side-navigation/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup

### Setup 1


### Setup 2

- `activeHref`: `#/calendar`
- `onFollow` (function):

  ```jsx
  (event) => {
            if (!event.detail.external) {
              event.preventDefault();
              setActiveHref(event.detail.href);
            }
          }
  ```
- Wrapper:

  ```jsx
  
          <div className={collapsed ? 'side-navigation-collapsed-wrapper' : undefined}>
            <SideNavigation />
          </div>
        
  ```

### Setup 3

- `activeHref`: `""` (empty string)
- `onFollow` (function):

  ```jsx
  (event) => {
            if (!event.detail.external) {
              event.preventDefault();
              setActiveHref(event.detail.href);
            }
          }
  ```
- `allItems` (object, held in state): `JSON.stringify(s.items,null,2)`
- `activeView` (object, held in state): `{ label: 'View 1', value: 'view1' }`
- `items` (object, held in state): `allItems`

## Examples

### Simple

Playground id: `simple` · uses setup 1

- `activeHref`: `#/page1`
- `header`: `{href:"#/",text:"Service name"}`
- `items`:

  ```jsx
  
          [
            { type: "link", text: "Page 1", href: "#/page1" },
            { type: "link", text: "Page 2", href: "#/page2" },
            { type: "link", text: "Page 3", href: "#/page3" },
            { type: "link", text: "Page 4", href: "#/page4" },
            { type: "divider" },
            {
              type: "link",
              text: "Notifications",
              href: "#/notifications",
              info: <Badge color="red">23</Badge>
            },
            {
              type: "link",
              text: "Documentation",
              href: "https://example.com",
              external: true
            }
          ]
          
  ```

### With sections

Playground id: `with-sections` · uses setup 1

- `activeHref`: `#/page2`
- `header`: `{href:"#/",text:"Service name"}`
- `items`:

  ```jsx
  [{type:"link",text:"Page 1",href:"#/page1"},{type:"link",text:"Page 2",href:"#/page2"},{type:"section",text:"Section 1",items:[{type:"link",text:"Page 4",href:"#/page4"},{type:"link",text:"Page 5",href:"#/page5"},{type:"link",text:"Page 6",href:"#/page6"}]},{type:"section",text:"Section 2",items:[{type:"link",text:"Page 7",href:"#/page7"},{type:"link",text:"Page 8",href:"#/page8"},{type:"link",text:"Page 9",href:"#/page9"}]}]
  ```

### With section groups

Playground id: `with-section-groups` · uses setup 1

- `activeHref`: `#/page1`
- `header`: `{href:"#/",text:"Service name"}`
- `items`:

  ```jsx
  [
            {
              type: 'link',
              text: 'Page 1',
              href: '#/page1',
            },
            {
              type: 'divider',
            },
            {
              type: 'section-group',
              title: 'Section group',
              items: [
                {
                  type: 'link',
                  text: 'Page 2',
                  href: '#/page2',
                },
                {
                  type: 'link',
                  text: 'Page 3',
                  href: '#/page3',
                },
              ],
            },
            { type: 'divider' },
            {
              type: 'section-group',
              title: 'Section group',
              items: [
                {
                  type: 'link',
                  text: 'Page 4',
                  href: '#/page4',
                },
                {
                  type: 'section',
                  text: 'Section',
                  items: [
                    {
                      type: 'link',
                      text: 'Page 5',
                      href: '#/page5',
                    },
                    {
                      type: 'link',
                      text: 'Page 6',
                      href: '#/page6',
                    },
                  ],
                },
                {
                  type: 'link',
                  text: 'Page 7',
                  href: '#/page7',
                },
                {
                  type: 'expandable-link-group',
                  text: 'Expandable link group',
                  href: '#/exp-link-group',
                  items: [
                    {
                      type: 'link',
                      text: 'Page 8',
                      href: '#/page8',
                    },
                    {
                      type: 'link',
                      text: 'Page 9',
                      href: '#/page9',
                    },
                  ],
                },
                {
                  type: 'link',
                  text: 'Page 10',
                  href: '#/page10',
                },
                {
                  type: 'link-group',
                  text: 'Link group',
                  href: '#/link-group',
                  items: [
                    {
                      type: 'link',
                      text: 'Page 11',
                      href: '#/page11',
                    },
                    {
                      type: 'link',
                      text: 'Page 12',
                      href: '#/page12',
                    },
                  ],
                },
                {
                  type: 'link',
                  text: 'Page 13',
                  href: '#/page13',
                },
              ],
            },
            { type: 'divider' },
            {
              type: 'section-group',
              title: 'Section group',
              items: [
                {
                  type: 'link',
                  text: 'Page',
                  href: '#/page14',
                },
                {
                  type: 'section',
                  text: 'Section',
                  items: [
                    {
                      type: 'link',
                      text: 'Page 15',
                      href: '#/page15',
                    },
                    {
                      type: 'link',
                      text: 'Page 16',
                      href: '#/page16',
                    },
                  ],
                },
              ],
            },
            { type: 'link', text: 'Notifications', href: '#/notifications', info: <Badge color="red">23</Badge> },
            {
              type: 'link',
              text: 'External Link',
              href: '#',
              external: true,
              externalIconAriaLabel: 'Opens in a new tab',
            },
          ]
  ```

### With expandable link groups

Playground id: `with-expandable-link-groups` · uses setup 1

- `activeHref`: `#/parent-page/child-page1`
- `header`: `{href:"#/",text:"Service name"}`
- `items`:

  ```jsx
  [{type:"link",text:"Page 1",href:"#/page1"},{type:"link",text:"Page 2",href:"#/page2"},{type:"expandable-link-group",text:"Parent page",href:"#/parent-page",items:[{type:"link",text:"Child page 1",href:"#/parent-page/child-page1"},{type:"link",text:"Child page 2",href:"#/parent-page/child-page2"},{type:"link",text:"Child page 3",href:"#/parent-page/child-page3"}]},{type:"link",text:"Page 4",href:"#/page4"},{type:"link",text:"Page 5",href:"#/page5"}]
  ```

### With link groups

Playground id: `with-link-groups` · uses setup 1

- `activeHref`: `#/resources-page/resource1/page1`
- `header`: `{href:"#/",text:"Service name"}`
- `items`:

  ```jsx
  [{type:"link-group",text:"View resources page",href:"#/resources-page",items:[{type:"link",text:"Resource page 1",href:"#/resources-page/resource1/page1"},{type:"link",text:"Resource page 2",href:"#/resources-page/resource1/page2"},{type:"link",text:"Resource page 3",href:"#/resources-page/resource1/page3"}]},{type:"link",text:"Page 1",href:"#/page1"},{type:"link",text:"Page 2",href:"#/page2"},{type:"link",text:"Page 3",href:"#/page3"}]
  ```

### With icons

Playground id: `with-icons` · uses setup 2

- `activeHref`: `#/calendar`
- `header`: `{href:"#/",text:"Service name"}`
- `items`:

  ```jsx
  
          [
            { type: 'link', text: 'Calendar', href: '#/calendar', icon: <Icon name="calendar" /> },
            { type: "link", text: "Announcements", href: "#/announcements", icon: <Icon name="announcement" /> },
            { type: "link", text: "Team", href: "#/team", icon: <Icon name="group" /> },
            { type: "link", text: "Messages", href: "#/messages", icon: <Icon name="envelope" /> },
            { type: "divider" },
            {
              type: "link",
              text: "Notifications",
              href: "#/notifications",
              icon: <Icon name="notification" />,
            },
            {
              type: "link",
              text: "Settings",
              href: "#/settings",
              icon: <Icon name="settings" />,
            }
          ]
          
  ```

### With small logo

Playground id: `with-small-logo` · uses setup 1

- `activeHref`: `#/page1`
- `header`: `{href:"#/",text:"Service name",logo:{alt:"logo",src:"/logo-small.svg"}}`
- `items`:

  ```jsx
  [{type:"link",text:"Page 1",href:"#/page1"},{type:"link",text:"Page 2",href:"#/page2"},{type:"link",text:"Page 3",href:"#/page3"},{type:"link",text:"Page 4",href:"#/page4"}]
  ```

### With large logo

Playground id: `with-large-logo` · uses setup 1

- `activeHref`: `#/page1`
- `header`: `{href:"#/",logo:{alt:"logo",src:"/logo-large.svg"}}`
- `items`:

  ```jsx
  [{type:"link",text:"Page 1",href:"#/page1"},{type:"link",text:"Page 2",href:"#/page2"},{type:"link",text:"Page 3",href:"#/page3"},{type:"link",text:"Page 4",href:"#/page4"}]
  ```

### With items control

Playground id: `with-items-control` · uses setup 3

- `items`: `allItems`
