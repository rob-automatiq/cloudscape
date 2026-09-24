# property-filter playground examples

Snapshot of the named examples on https://cloudscape.design/components/property-filter/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`


### With a custom group

Playground id: `with-a-custom-group`

- `filteringProperties`:

  ```jsx
  [...n.filteringProperties,{key:"stage",groupValuesLabel:"Stage values",propertyLabel:"Stage",operators:["=","!=",":","!:","^","!^"],group:"tags"}]
  ```
- `customGroupsText`: `[{properties:"Tags",values:"Tag values",group:"tags"}]`
- `filteringOptions`: `[...n.filteringOptions]`

### With hidden tokens

Playground id: `with-hidden-tokens`

- `query`:

  ```jsx
  {tokens:[{value:"Running",propertyKey:"state",operator:"="},{value:"Pending",propertyKey:"state",operator:"="},{value:"Stopping",propertyKey:"state",operator:"="}],operation:"or"}
  ```
- `tokenLimit`: `2`

### With a date property (custom form)

Playground id: `with-a-date-property-(custom-form)`

- `filteringProperties`:

  ```jsx
  
          [
            {
              key: 'instanceid',
              operators: ['=', '!=', ':', '!:', '^', '!^'],
              propertyLabel: 'Instance ID',
              groupValuesLabel: 'Instance ID values',
            },
            {
              key: 'state',
              operators: [{ operator: '=', tokenType: 'enum' }, { operator: '!=', tokenType: 'enum' }, ':', '!:', '^', '!^'],
              propertyLabel: 'State',
              groupValuesLabel: 'State values',
            },
            {
              key: 'instancetype',
              operators: [{ operator: '=', tokenType: 'enum' }, { operator: '!=', tokenType: 'enum' }, ':', '!:', '^', '!^'],
              propertyLabel: 'Instance type',
              groupValuesLabel: 'Instance type values',
            },
            {
              key: 'averagelatency',
              operators: ['=', '!=', '>', '<', '<=', '>='],
              propertyLabel: 'Average latency',
              groupValuesLabel: 'Average latency values',
            },
            {
              key: 'createdAt',
              propertyLabel: 'Created at',
              groupValuesLabel: 'Created at value',
              operators: ['=', '!=', '<', '<=', '>', '>='].map(operator => ({
                operator,
                form: ({ value, onChange, filter }) => {
                  if (typeof filter === 'undefined') {
                    return (
                      <FormField>
                        <DatePicker
                          value={value ?? ''}
                          onChange={event => onChange(event.detail.value)}
                          placeholder="YYYY/MM/DD"
                          locale="en-GB"
                        />
                      </FormField>
                    );
                  }
                  return (
                    <div className="date-form">
                      <FormField>
                        <DateInput
                          value={value ?? ''}
                          onChange={event => onChange(event.detail.value)}
                          placeholder="YYYY/MM/DD"
                        />
                      </FormField>
                      <Calendar
                        value={value ?? ''}
                        onChange={event => onChange(event.detail.value)}
                        locale="en-GB"
                      />
                    </div>
                  )
                },
                match: 'date'
              })),
            },
          ]
          
  ```
- `filteringOptions`: `[...n.filteringOptions]`

### Empty suggestions

Playground id: `empty-suggestions`

- `filteringEmpty`: `No suggestions`
- `filteringProperties`: `[]`

### With constraint text

Playground id: `with-constraint-text`

- `filteringConstraintText`: `You can apply up to 2 filters.`
- `enableTokenGroups`: `false`
