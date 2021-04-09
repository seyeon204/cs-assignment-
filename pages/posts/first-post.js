import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>My name is Cho Seyeon.</h1>
      <h2>My hobby is playing basketball.</h2>  
      <h3>Thanks for your visit.</h3>
      <h4>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h4>
    </>
  )
}