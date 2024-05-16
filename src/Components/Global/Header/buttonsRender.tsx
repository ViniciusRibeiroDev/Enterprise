export const ButtonsRender = () => {
  const href = window.location.pathname;

  return (
    <>
      {href === '/dashboard' ? (
        <>
          <span onClick={() => (window.location.href = '/')}>Logout</span>
        </>
      ) : (
        <>
          <span
            onClick={() =>
              href === '/login' || href === '/cadastro'
                ? (window.location.href = '/')
                : (window.location.href = '/login')
            }
          >
            {href === '/' ? 'Login' : 'Home'}
          </span>
          <span
            onClick={() => {
              if (href === '/cadastro') {
                window.location.href = '/login';
              } else {
                window.location.href = '/cadastro';
              }
            }}
          >
            {href === '/cadastro' ? 'Login' : 'Cadastro'}
          </span>
        </>
      )}
    </>
  );
};
