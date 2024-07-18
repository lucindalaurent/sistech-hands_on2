import Link from 'next/link';

function AllCoursesNav() {
    return(
        <section className="flex justify-center items-center h-full border-b-2 border-subtle pb-2">
        <Link href="/courses">
          <p className="text-center text-xl text-pink font-semibold transition-colors duration-300 ease-out hover:transform hover:translate-y-[5px] hover:text-purple transition-transform duration-300">
            View all courses
          </p>
        </Link>
      </section>
    );
}

export {AllCoursesNav};