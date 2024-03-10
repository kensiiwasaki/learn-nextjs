import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <p>Dashboard Page</p>
      <p>
        <Link href="/0">0</Link>
      </p>
      <p>
        <Link prefetch={true} href="/dashboard/1">
          1
        </Link>
      </p>
      <p>
        <Link href="/dashboard/2">2</Link>
      </p>
      <p>
        <Link href="/dashboard/3">3</Link>
      </p>
      <p>
        <Link href="/dashboard/4">4</Link>
      </p>
      <p>
        <Link href="/dashboard/5">5</Link>
      </p>
      <p>
        <Link href="/dashboard/6">6</Link>
      </p>
      <p>
        <Link href="/dashboard/7">7</Link>
      </p>
      <p>
        <Link href="/dashboard/8">8</Link>
      </p>
      <p>
        <Link href="/dashboard/9">9</Link>
      </p>
      <p>
        <Link href="/dashboard/10">10</Link>
      </p>
    </div>
  );
}
