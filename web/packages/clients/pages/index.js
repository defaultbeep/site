import Link from 'next/link'

export default function Clients() {
    return (
        <div>
          Your clients
          <ul>
            <li><Link href="/a"><a>Client a</a></Link></li>
            <li><Link href="/b"><a>Client b</a></Link></li>
          </ul>
          <p><a href="/">home</a></p>
        </div>
    );
}