import Image from "next/image";
import Link from "next/link";
import React from "react";
import { client } from "@/app/lib/apollo";
import { gql } from "@apollo/client";

export default function Header({ posts }) {
  console.log(posts, "posts");

  // if (!posts) {
  //   // Handle the case where posts is undefined (e.g., still loading)
  //   return <div>Loading...</div>;
  // }

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


<div className='bg-primary-main py-6 md:py-10 w-full px-6 lg:px-24'>
        <div className='lg:flex flex-row justify-between'>
          <Link href='/'>
            <Image
              src='/public/rhino_logo.svg'
              priority
              alt='rhino logo'
              height={25}
              width={125}
            />
          </Link>
          <div className='flex justify-between items-center w-1/2'>
            <div className="flex">
              <div className='mr-6 text-black'>
                <Link href='/about-us'>
                  <p className='font-bold text-sm whitespace-nowrap'>
                  Solutions
                  </p>
                </Link>
              </div>
              {/*  */}
              <div className='mr-6'>
                <Link href='/about-us'>
                  <p className='font-bold text-sm whitespace-nowrap'>
                  Rhino Platform
                  </p>
                </Link>
              </div>
              {/*  */}
              <div className='mr-6'>
                <Link href='/about-us'>
                  <p className='font-bold text-sm whitespace-nowrap'>
                  How it works?
                  </p>
                </Link>
              </div>
              {/*  */}
              <div className='mr-6'>
                <Link href='/about-us'>
                  <p className='font-bold text-sm whitespace-nowrap'>
                  Case studies
                  </p>
                </Link>
              </div>
              {/*  */}
              <div className='mr-6'>
                <Link href='/about-us'>
                  <p className='font-bold text-sm whitespace-nowrap'>
                  Company
                  </p>
                </Link>
              </div>

              {/*  */}
              
            </div>
          </div>
        </div>

        
        {/* for mobile display */}
        {/* <div className='lg:hidden'>
          <div className='flex justify-end'>
            {!isMobileMenuOpen && (
              <div className='w-full'>
                <Link href='/'>
                  <Image
                    src='/hackle_logo_mobile.svg'
                    priority
                    loading='eager'
                    alt='hackle logo'
                    height={30}
                    width={80}
                  />
                </Link>
              </div>
            )}
            <button type='button' onClick={handleIconClick}>
              <>
                {isMobileMenuOpen ? (
                  <Image
                    src='/close.svg'
                    alt='close icon'
                    height={12}
                    width={18}
                  />
                ) : (
                  <Image
                    src='/hamburger.svg'
                    priority
                    loading='eager'
                    alt='hamburger icon'
                    height={12}
                    width={18}
                  />
                )}
              </>
            </button>
          </div>
        </div> */}
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
