import { Button } from '../Button';

export const ButtonsRender = () => {
  const href = window.location.pathname;

  return (
    <>
      {href === '/dashboard' ? (
        <>
          <Button
            type='button'
            text='Logout'
            $height='48px'
            $width='142px'
            $type='outlined'
            onClick={() => (window.location.href = '/')}
          />
        </>
      ) : (
        <>
          <Button
            type='button'
            text={href === '/' ? 'Login' : 'Home'}
            $height='48px'
            $width='142px'
            $type='outlined'
            onClick={() =>
              href === '/login' || href === '/cadastro'
                ? (window.location.href = '/')
                : (window.location.href = '/login')
            }
          />
          <Button
            text={href === '/cadastro' ? 'Login' : 'Cadastro'}
            $height='48px'
            $width='142px'
            type='button'
            $type='default'
            onClick={() => {
              if (href === '/cadastro') {
                window.location.href = '/login';
              } else {
                window.location.href = '/cadastro';
              }
            }}
          />
        </>
      )}
    </>
  );
};
