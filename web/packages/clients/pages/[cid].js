import Link from 'next/link';

export default function Client() {
  return (
    <div>
        Client would appear here
        <div>
          <Link
            href="1234/photos/123"
          ><a>Photo</a></Link>
        </div>
        <div><Link href="/"><a>← Back</a></Link></div>
    </div>
  )
}
