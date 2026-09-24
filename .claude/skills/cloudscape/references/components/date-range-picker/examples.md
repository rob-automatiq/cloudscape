# date-range-picker playground examples

Snapshot of the named examples on https://cloudscape.design/components/date-range-picker/?tabId=playground (taken 2026-09-24).
The playground stores every value as text: treat a value as code when the prop's type in `api.md` is a function, React node, object, or array, and as a plain string when the type is `string`.
Combine an example's props with the base setup to reproduce it; the wrapper shows the markup the example is placed in.

## Base setup


## Examples

### Default

Playground id: `default`

- `isValidRange`:

  ```jsx
  range => {
    if (range.type === 'absolute') {
      const [startDateWithoutTime] = range.startDate.split('T');
      const [endDateWithoutTime] = range.endDate.split('T');
  
      if (!startDateWithoutTime || !endDateWithoutTime) {
        return {
          valid: false,
          errorMessage: 'The selected date range is incomplete. Select a start and end date for the date range.',
        };
      }
  
      if (new Date(range.startDate) - new Date(range.endDate) > 0) {
        return {
          valid: false,
          errorMessage: 'The selected date range is invalid. The start date must be before the end date.',
        };
      }
    }
    return { valid: true };
  }
  ```

### With absolute ISO format

Playground id: `with-absolute-iso-format`

- `value`: `{type:"absolute",startDate:"2018-01-09T12:34:56",endDate:"2018-01-19T15:30:00"}`
- `isValidRange`:

  ```jsx
  range => {
    if (range.type === 'absolute') {
      const [startDateWithoutTime] = range.startDate.split('T');
      const [endDateWithoutTime] = range.endDate.split('T');
  
      if (!startDateWithoutTime || !endDateWithoutTime) {
        return {
          valid: false,
          errorMessage: 'The selected date range is incomplete. Select a start and end date for the date range.',
        };
      }
  
      if (new Date(range.startDate) - new Date(range.endDate) > 0) {
        return {
          valid: false,
          errorMessage: 'The selected date range is invalid. The start date must be before the end date.',
        };
      }
    }
    return { valid: true };
  }
  ```

### With absolute human-readable format

Playground id: `with-absolute-human-readable-format`

- `value`: `{type:"absolute",startDate:"2018-01-09T12:34:56",endDate:"2018-01-19T15:30:00"}`
- `absoluteFormat`: `long-localized`
- `isValidRange`:

  ```jsx
  range => {
    if (range.type === 'absolute') {
      const [startDateWithoutTime] = range.startDate.split('T');
      const [endDateWithoutTime] = range.endDate.split('T');
  
      if (!startDateWithoutTime || !endDateWithoutTime) {
        return {
          valid: false,
          errorMessage: 'The selected date range is incomplete. Select a start and end date for the date range.',
        };
      }
  
      if (new Date(range.startDate) - new Date(range.endDate) > 0) {
        return {
          valid: false,
          errorMessage: 'The selected date range is invalid. The start date must be before the end date.',
        };
      }
    }
    return { valid: true };
  }
  ```

### Without time offset

Playground id: `without-time-offset`

- `value`: `{type:"absolute",startDate:"2018-01-09T12:34:56",endDate:"2018-01-19T15:30:00"}`
- `absoluteFormat`: `long-localized`
- `hideTimeOffset`: `true`
- `isValidRange`:

  ```jsx
  range => {
    if (range.type === 'absolute') {
      const [startDateWithoutTime] = range.startDate.split('T');
      const [endDateWithoutTime] = range.endDate.split('T');
  
      if (!startDateWithoutTime || !endDateWithoutTime) {
        return {
          valid: false,
          errorMessage: 'The selected date range is incomplete. Select a start and end date for the date range.',
        };
      }
  
      if (new Date(range.startDate) - new Date(range.endDate) > 0) {
        return {
          valid: false,
          errorMessage: 'The selected date range is invalid. The start date must be before the end date.',
        };
      }
    }
    return { valid: true };
  }
  ```

### With relative range value

Playground id: `with-relative-range-value`

- `value`: `{type:"relative",amount:12,unit:"day"}`
- `isValidRange`:

  ```jsx
  range => {
    if (range.type === 'absolute') {
      const [startDateWithoutTime] = range.startDate.split('T');
      const [endDateWithoutTime] = range.endDate.split('T');
  
      if (!startDateWithoutTime || !endDateWithoutTime) {
        return {
          valid: false,
          errorMessage: 'The selected date range is incomplete. Select a start and end date for the date range.',
        };
      }
  
      if (new Date(range.startDate) - new Date(range.endDate) > 0) {
        return {
          valid: false,
          errorMessage: 'The selected date range is invalid. The start date must be before the end date.',
        };
      }
    }
    return { valid: true };
  }
  ```

### With client side error

Playground id: `with-client-side-error`

- `isValidRange`:

  ```jsx
  range => {
    const differenceInDays = (dateOne, dateTwo) => {
      const milliseconds = Math.abs(new Date(dateTwo) - new Date(dateOne));
      const days = Math.ceil(milliseconds / (1000 * 60 * 60 * 24));
      return days;
    };
  
    if (range === null) {
      return {
        valid: false,
        errorMessage: 'The selected date range is incomplete. Select a start and end date for the date range.',
      };
    }
  
    if (range.type === 'absolute') {
      const [startDateWithoutTime] = range.startDate.split('T');
      const [endDateWithoutTime] = range.endDate.split('T');
  
      if (!startDateWithoutTime || !endDateWithoutTime) {
        return {
          valid: false,
          errorMessage: 'The selected date range is incomplete. Select a start and end date for the date range.',
        };
      }
  
      if (new Date(range.startDate) - new Date(range.endDate) > 0) {
        return {
          valid: false,
          errorMessage: 'The selected date range is invalid. The start date must be before the end date.',
        };
      }
  
      if (differenceInDays(range.startDate, range.endDate) >= 30) {
        return {
          valid: false,
          errorMessage: 'The selected date range is too large. Select a range less than 30 days.',
        };
      }
  
      if (differenceInDays(range.startDate, range.endDate) < 6) {
        return {
          valid: false,
          errorMessage: 'The selected date range is too small. Select a range larger than 6 days.',
        };
      }
    } 
    
    if (range.type === 'relative') {
      if (isNaN(range.amount)) {
        return {
          valid: false,
          errorMessage: 'The selected date range is incomplete. Specify a duration for the date range.',
        };
      }
  
      if (
        (range.unit === 'second' && range.amount < 60 * 60 * 24 * 6) ||
        (range.unit === 'minute' && range.amount < 60 * 24 * 6) ||
        (range.unit === 'hour' && range.amount < 24 * 6) ||
        (range.unit === 'day' && range.amount < 6) ||
        range.amount === 0
      ) {
        return {
          valid: false,
          errorMessage: 'The selected date range is too small. Select a range larger than 6 days.',
        };
      }
  
      if (
        (range.unit === 'second' && range.amount >= 60 * 60 * 24 * 30) ||
        (range.unit === 'minute' && range.amount >= 60 * 24 * 30) ||
        (range.unit === 'hour' && range.amount >= 24 * 30) ||
        (range.unit === 'day' && range.amount >= 30) ||
        (range.unit === 'week' && range.amount >= 4) ||
        (range.unit === 'month' && range.amount >= 1) ||
        range.unit === 'year'
      ) {
        return {
          valid: false,
          errorMessage: 'The selected date range is too large. Select a range less than 30 days.',
        };
      }
    }
      
    return { valid: true };
  }
  ```

### With disabled reason for weekends

Playground id: `with-disabled-reason-for-weekends`

- `value`: `{type:"absolute",startDate:"2018-01-09T12:34:56",endDate:"2018-01-19T15:30:00"}`
- `isValidRange`:

  ```jsx
  range => {
    if (range.type === 'absolute') {
      const [startDateWithoutTime] = range.startDate.split('T');
      const [endDateWithoutTime] = range.endDate.split('T');
  
      if (!startDateWithoutTime || !endDateWithoutTime) {
        return {
          valid: false,
          errorMessage: 'The selected date range is incomplete. Select a start and end date for the date range.',
        };
      }
  
      if (new Date(range.startDate) - new Date(range.endDate) > 0) {
        return {
          valid: false,
          errorMessage: 'The selected date range is invalid. The start date must be before the end date.',
        };
      }
    }
    return { valid: true };
  }
  ```
- `isDateEnabled`: `date => date.getDay() !== 6 && date.getDay() !== 0`
- `dateDisabledReason`: `date => date.getDay() === 6 || date.getDay() === 0 ? "You can only select a weekday." : ''`

### With date only

Playground id: `with-date-only`

- `isValidRange`:

  ```jsx
  range => {
    if (range.type === 'absolute') {
      const [startDateWithoutTime] = range.startDate.split('T');
      const [endDateWithoutTime] = range.endDate.split('T');
  
      if (!startDateWithoutTime || !endDateWithoutTime) {
        return {
          valid: false,
          errorMessage: 'The selected date range is incomplete. Select a start and end date for the date range.',
        };
      }
  
      if (new Date(range.startDate) - new Date(range.endDate) > 0) {
        return {
          valid: false,
          errorMessage: 'The selected date range is invalid. The start date must be before the end date.',
        };
      }
    }
    return { valid: true };
  }
  ```
- `dateOnly`: `true`
- `placeholder`: `Filter by date`
- `relativeOptions`:

  ```jsx
  [{key:"previous-1-day",amount:1,unit:"day",type:"relative"},{key:"previous-3-days",amount:3,unit:"day",type:"relative"},{key:"previous-14-days",amount:14,unit:"day",type:"relative"},{key:"previous-1-month",amount:1,unit:"month",type:"relative"},{key:"previous-3-months",amount:3,unit:"month",type:"relative"}]
  ```

### With month granularity

Playground id: `with-month-granularity`

- `isValidRange`:

  ```jsx
  range => {
    if (range === null) {
      return {
        valid: false,
        errorMessage: 'The selected date range is incomplete. Select a start and end date for the date range.',
      };
    }
    
    if (range.type === 'absolute') {
       if (!range.startDate || !range.endDate) {
        return {
          valid: false,
          errorMessage: 'The selected date range is incomplete. Select a start and end date for the date range.',
        };
      }
  
      if (new Date(range.startDate).getTime() - new Date(range.endDate).getTime() > 0) {
        return {
          valid: false,
          errorMessage: 'The selected date range is invalid. The start date must be before the end date.',
        };
      }
    }
    
    if (range.type === 'relative') {
      if (isNaN(range.amount)) {
        return {
          valid: false,
          errorMessage: 'The selected date range is incomplete. Specify a duration for the date range.',
        };
      }
  
      if (
        (range.unit === 'month' && range.amount < 1) ||
        range.amount === 0
      ) {
        return {
          valid: false,
          errorMessage: 'The selected date range is too small. Select a range of one month or larger.',
        };
      }
    }
  
    return { valid: true };
  }
  ```
- `granularity`: `month`
- `placeholder`: `Filter by month`
- `relativeOptions`:

  ```jsx
  [{key:"previous-1-month",amount:1,unit:"month",type:"relative"},{key:"previous-3-months",amount:3,unit:"month",type:"relative"},{key:"previous-6-months",amount:6,unit:"month",type:"relative"},{key:"previous-1-year",amount:1,unit:"year",type:"relative"}]
  ```

### With custom trigger

Playground id: `with-custom-trigger`

- `value`: `{type:"relative",amount:1,unit:"hour",key:"last-1-hour"}`
- `isValidRange`:

  ```jsx
  range => {
    if (range.type === 'absolute') {
      const [startDateWithoutTime] = range.startDate.split('T');
      const [endDateWithoutTime] = range.endDate.split('T');
  
      if (!startDateWithoutTime || !endDateWithoutTime) {
        return {
          valid: false,
          errorMessage: 'The selected date range is incomplete. Select a start and end date for the date range.',
        };
      }
  
      if (new Date(range.startDate) - new Date(range.endDate) > 0) {
        return {
          valid: false,
          errorMessage: 'The selected date range is invalid. The start date must be before the end date.',
        };
      }
    }
    return { valid: true };
  }
  ```
- `renderTriggerContent`:

  ```jsx
  ({ formattedDate }) => (
          <SpaceBetween size="xs" alignItems="center" direction="horizontal">
            <Icon name="calendar" variant="normal" />
            <span>{formattedDate}</span>
            <div style={{ blockSize: '20px' }}><Divider orientation="vertical" /></div>
            <span>UTC</span>
          </SpaceBetween>
        )
  ```
