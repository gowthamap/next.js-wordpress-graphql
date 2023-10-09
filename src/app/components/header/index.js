import Button from "../button";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { client } from "@/app/lib/apollo";
import { gql } from "@apollo/client";

export default function Header({ posts }) {
  // console.log(posts, "posts");

  // const rhinoImage = '../../../../public/rhino_logo.png'

  return (
    <>
      {/* {posts.map((post) => {
        return (
          <div key={post?.title}>
            <h1>{post?.title}</h1>
            <p>{post?.content}</p>
          </div>
        );
      })} */}

      <div className="lg:flex flex-row items-center w-full py-6 lg:pl-60 pt-24">
        <Link href="/" className="w-3/12">
          <Image
            src="/rhino_logo.png"
            priority
            alt="rhino logo"
            height={25}
            width={125}
          />
        </Link>
        <div className="flex justify-start items-center w-9/12">
          <div className="flex text-black">
            <div className="px-5">
              <Link href="/about-us" className="flex w-24 hover:text-primary-light">
                <p className="font-bold text-sm whitespace-nowrap">Solutions</p>
                <span className="pl-2">
                <Image
                  src="/down_arrow.svg"
                  alt="down arrow"
                  height={16}
                  width={16}
                />
              </span>
              </Link>
            </div>
            {/*  */}
            <div className="px-5">
              <Link href="/about-us">
                <p className="font-bold text-sm whitespace-nowrap hover:text-primary-light">
                  Rhino Platform
                </p>
              </Link>
            </div>
            {/*  */}
            <div className="px-5">
              <Link href="/about-us">
                <p className="font-bold text-sm whitespace-nowrap hover:text-primary-light">
                  How it works?
                </p>
              </Link>
            </div>
            {/*  */}
            <div className="px-5">
              <Link href="/about-us">
                <p className="font-bold text-sm whitespace-nowrap hover:text-primary-light">
                  Case studies
                </p>
              </Link>
            </div>
            {/*  */}
            <div className="pr-5 hover:text-primary-light">
              <Link href="/about-us" className="flex w-24">
                <p className="font-bold text-sm whitespace-nowrap ">Company</p>
                <span className="pl-2">
                <Image
                  src="/down_arrow.svg"
                  alt="down arrow"
                  height={16}
                  width={16}
                  className="hover:fill-primary-light"
                />
              </span>
              </Link>
            </div>

            {/*  */}
          </div>
          <div className="w-full px-5">
            <Button title={"Talk to Sales"} className="bg-primary-light mr-8" />
            <Button title={"Partner Program"} className="bg-primary-main" />
          </div>
        </div>
      </div>
    </>
  );
}
















// export async function getStaticProps() {
//   const GET_POSTS = gql`
//     query GetAllPosts {
//       posts {
//         nodes {
//           title
//           content
//           uri
//           date
//         }
//       }
//     }
//   `;

//   const response = await client.query({
//     query: GET_POSTS,
//   });

//   const posts = response?.data?.posts?.nodes;
//   return {
//     props: {
//       posts,
//     },
//   };
// }
