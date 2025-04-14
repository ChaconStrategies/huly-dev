export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Welcome to Chacon Strategies
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#555' }}>
        Something powerful is launching soon. Stay tuned.
      </p>
    </main>
  );
}
