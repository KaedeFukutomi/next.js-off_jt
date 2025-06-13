import Link from "next/link";
export default function AboutPage() {
  return (
    <main>
      <h1>このサイトについて</h1>
      <p>これはトップページです</p>
      <h1>画面一覧</h1>
      <ul>
        <li>
          <Link href="/list">一覧ページへ</Link>
        </li>
        <li>
          <Link href="/detail">詳細ページへ</Link>
        </li>
      </ul>
    </main>
  );
}
