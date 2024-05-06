export const typesButton = [
  {
    type: 'default',
    background: 'var(--brand1)',
    color: 'var(--white)',
    border: '1px solid var(--brand1)',
    hover: {
      background: 'var(--brand2)',
      border: '1px solid var(--brand2)',
    },
    focus: {
      background: 'var(--white)',
      border: '1px solid var(--brand1)',
      color: 'var(--brand1)',
    },
  },
  {
    type: 'outlined',
    background: 'var(--white)',
    color: 'var(--brand1)',
    border: '1px solid var(--brand1)',
    hover: {
      background: 'var(--grey5)',
      border: '1px solid var(--brand2)',
    },
    focus: {
      background: 'var(--brand1)',
      border: '1px solid var(--brand1)',
      color: 'var(--white)',
    },
  },
  {
    type: 'success',
    background: 'var(--success)',
    color: 'var(--white)',
    border: '1px solid var(--success)',
    hover: {
      background: 'var(--success)',
      border: '1px solid var(--success)',
    },
    focus: {
      background: 'var(--white)',
      border: '1px solid var(--success)',
      color: 'var(--success)',
    },
  },
  {
    type: 'error',
    background: 'var(--error)',
    color: 'var(--white)',
    border: '1px solid var(--error)',
    hover: {
      background: 'var(--error)',
      border: '1px solid var(--error)',
    },
    focus: {
      background: 'var(--white)',
      border: '1px solid var(--error)',
      color: 'var(--error)',
    },
  },
  {
    type: 'warning',
    background: 'var(--warning)',
    color: 'var(--white)',
    border: '1px solid var(--warning)',
    hover: {
      background: 'var(--warning)',
      border: '1px solid var(--warning)',
    },
    focus: {
      background: 'var(--white)',
      border: '1px solid var(--warning)',
      color: 'var(--warning)',
    },
  },
] as const;
