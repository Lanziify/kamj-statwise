export const rdtCustomStyle = {
    header: {
        style: {
            color: 'white',
            background: 'transparent',
            padding: '1rem',
        },
    },
    table: {
        style: {
            background: 'transparent',
        },
    },
    responsiveWrapper: {
        style: {
            borderRadius: 0,
        },
    },
    headRow: {
        style: {
            color: 'white',
            background: 'transparent',
            borderBottom: '1px solid #2D3748',
        },
    },
    rows: {
        style: {
            color: 'white',
            background: 'transparent',
            '&:not(:last-of-type)': {
                borderBottom: '1px solid #2D3748',
            },
            '&:last-of-type': {
                borderBottom: '1px solid #2D3748',
            },
        },
    },
    pagination: {
        style: {
            color: 'white',
            background: 'transparent',
            border: 'unset',
        },
        pageButtonsStyle: {
            fill: 'white',
            '&:disabled': {
                cursor: 'unset',
                fill: '#2D3748',
            },
        },
    },
    progress: {
        style: {
            background: 'transparent',
            color: 'white',
        },
    },
    noData: {
        style: {
            color: 'white',
            background: 'transparent',
        },
    },
}
