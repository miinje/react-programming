// import styles from '@/styles/HeaderBar.module.css'; // -> tailwind 사용을 위해 걷어내기
import Heading from "@/components/Heading";

function HeaderBar() {
  return (
    <header className="p-5 bg-indigo-900 text-indigo-50">
      <Heading />
    </header>
  )
}

export default HeaderBar;