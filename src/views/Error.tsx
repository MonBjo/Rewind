function Error() {
  const navigate = useNavigate();

  function navHome() {
    navigate('/');
  }

  return (
    <article className="errorPage">
      <p>Woopsie, something went wrong.</p>
      <button onClick={ navHome } className="button button--error" >Go back to the games</button>
    </article>
  );
}

export default Error;