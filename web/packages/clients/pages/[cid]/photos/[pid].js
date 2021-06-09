import Link from 'next/link';
import { useRouter } from 'next/router'

export default function Photo() {
    const router = useRouter();
    console.log({ router });
  return (
    <div>
        PHOTO A
    </div>
  )
}