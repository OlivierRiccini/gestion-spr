const baseStyles = {
  body: {
    backgroundColor: '#0A0B0D',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  container: {
    margin: '0 auto',
    padding: '20px 0 48px',
    maxWidth: '600px',
  },
  section: {
    backgroundColor: '#101114',
    borderRadius: '16px',
    padding: '40px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  heading: {
    color: '#00e676', // Fallback for email clients
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '1.3',
    marginBottom: '16px',
  },
  text: {
    color: '#fff',
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '16px',
  },
  button: {
    backgroundColor: '#00e676',
    color: '#000',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'block',
    width: 'fit-content',
    marginTop: '24px',
    border: 'none',
    cursor: 'pointer',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#00e676',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'block',
    width: 'fit-content',
    marginTop: '24px',
    border: '1px solid #00e676',
    cursor: 'pointer',
  },
  footer: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '14px',
    marginTop: '32px',
  },
};

export default baseStyles; 