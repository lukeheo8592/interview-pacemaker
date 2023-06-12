"use client";
import React from "react";
import styles from "@styles/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footerBackground}>
      <div className="h-full flex flex-col items-center justify-center">
        <div className="flex w-4/5 border-b">123</div>
        <div className="flex w-4/5 place-content-between">
          <div>
            <p>© Cube Design. All Rights Reserved</p>
          </div>
          <div className="flex">
            <Link href="https://github.com/lukeheo8592">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#1877f2" }}
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Link>
            <Link href="https://github.com/lukeheo8592">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#1877f2" }}
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
