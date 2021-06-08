import Link from 'next/link'

export default function Clients() {
    return (
        <div>
          Your clients
          <ul>
            <li><Link href="/clients/a"><a>Client a</a></Link></li>
            <li><Link href="/clients/b"><a>Client b</a></Link></li>
          </ul>
        </div>
    );
}