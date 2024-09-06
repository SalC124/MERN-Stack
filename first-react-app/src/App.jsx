const ReactLogo = (props) => {
  return (
    <img
      src="https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png"
      alt="React Logo"
      width={props.size}
    />
  )
}

const App = () => {
  const releaseYear = 2013;
  const developerCompany = "Facebook, Inc.";
  console.log("Release Year: ", releaseYear);
  console.log(`Developer Company: ${developerCompany}`);
  console.log("hello from App component")
  return (
    <>
    <h1>Hello React!!!</h1>
    <ReactLogo size="100"/>
    <ReactLogo size="75"/>
    <ReactLogo size="50"/>
    <ReactLogo size="25"/>
      <p>
        React was developed by {developerCompany} and was first released{" "}
        {releaseYear}, {new Date().getFullYear() - releaseYear} years ago.
      </p>
    </>
  )
}

export default App