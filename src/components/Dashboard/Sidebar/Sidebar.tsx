"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Sidebar.module.scss";
import { menuLinks } from "@/mockdata/db";

const SidebarDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={styles.dropdown}>
      <div
        onClick={() => setIsOpen((prevOpen) => !prevOpen)}
        className={styles.dropdownTitleWrapper}
      >
        <h3>MENÜ</h3>
        <img
          src="/hamburger-icon.svg"
          style={{ width: "24px", height: "24px" }}
        />
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {menuLinks.map((link) => (
            <Link className={styles.menuLink} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className={styles.sidebar}>
      <SidebarDropdown />
      <div className={styles.content6}>Content 6</div>
    </aside>
  );
};

export default Sidebar;
